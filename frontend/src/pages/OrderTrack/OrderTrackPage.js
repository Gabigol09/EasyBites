import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { trackOrderById } from '../../services/orderService';
import NotFound from '../../components/NotFound/NotFound';
import DateTime from '../../components/DateTime/DateTime';
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList';
import classes from './orderTrackPage.module.css'
import Title from '../../components/Title/Title';
import Map from '../../components/Map/Map';

export default function OrderTrackPage() {
    const { orderId } = useParams();
    const [order, setOrder] = useState();

    useEffect(() => {
        orderId &&
            trackOrderById(orderId).then(order => {
                setOrder(order);
            });
    },     []);

    if (!orderId)
        return <NotFound message="Pedido não Encontrado" linkText="Vá para Tela Inicial" />;

    return (
        order && (
            <div className={classes.container}>
                <div className={classes.content}>
                    <h1>Pedido #{order.id}</h1>
                    <div className={classes.header}>
                        <div>
                            <strong>Data</strong>
                            <DateTime date={order.createdAt} />
                        </div>
                        <div>
                            <strong>Nome</strong>
                            {order.name}
                        </div>
                        <div>
                            <strong>Endereço</strong>
                            {order.address}
                        </div>
                        <div>
                            <strong>Status</strong>
                            {order.status}
                        </div>
                        {order.paymentId && (
                            <div>
                                <strong>Pagamento ID</strong>
                                {order.paymentId}
                            </div>
                        )}
                    </div>

                    <OrderItemsList order={order} />
                </div>

                <div>
                    <Title title="Sua Localização" fontSize="1.6rem" />
                    <Map location={order.addressLatLng} readonly={true} />
                </div>

                {order.status === 'Novo' && (
                    <div className={classes.payment}>
                        <Link to="/payment">Fazer Pedido</Link>
                    </div>
                )}
            </div>
        )
    );
}
