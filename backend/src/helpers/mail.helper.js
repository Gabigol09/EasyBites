import { getClient } from "../config/mail.config.js"

export const sendEmailReceipt = function (order) {
    const mailClient = getClient();

    mailClient.messages
        .create('sandbox72138e662ce748a18ca6dd02e4d84d80.mailgun.org', {
            from: 'orders@foodmine.com',
            to: order.user.email,
            subject: `Order ${order.id} is being processed`,
            html: getReceipHtml(order),
        })
        .then(msg => console.log(msg)) //Sucesso
        .catch(err => console.log(err));
};

const getReceipHtml = function (order) {
    return `
    <html>
        <head>
            <style>
            table {
                border-collapse: collapse;
                max-width:35rem;
                width: 100%;
            }
            th, td{
                text-align: left;
                padding: 8px;
            }
            th{
                border-bottom: 1px solid #dddddd;
            }
            </style>
        </head>
        <body>
            <h1>Pagamento Confirmado</h1>
            <p>Querido(a) ${order.name},</p>
            <p>Obrigado por nos escolher! Seu pedido foi pago com sucesso e agora está sendo processado.</p>
            <p><strong>Tracking ID:</strong> ${order.id}</p>
            <p><strong>Data do Pedido:</strong> ${order.createdAt
                .toISOString()
                .replace('T', ' ')
                .substr(0, 16)}</p>
                <h2>Detalhes do Pedido:</h2>
                <table>
                <thead>
                <tr>
                    <th>Produto</th>
                    <th>Valor Unidade</th>
                    <th>Quantidade</th>
                    <th>Valor Total</th>
                </tr>
                </thead>
                <tbody>
                ${order.items
                .map(
                    item =>
                    `
                    <tr>
                    <td>${item.food.name}</td>
                    <td>$${item.food.price}</td>
                    <td>${item.quantity}</td>    
                    <td>$${item.price.toFixed(2)}</td>
                    </tr>
                    `
                )
                .join('\n')}
                </tbody>
                <tfoot>
                <tr>
                <td colspan="3"><strong>Total:</strong></td>
                <td>$${order.totalPrice}</td>
                </tr>
                </tfoot>
                </table>
                <p><strong>Endereço para envio:</strong> ${order.address}</p>
        </body>
    </html>

    `;
};