import React from 'react'
import { useForm } from 'react-hook-form';
import Title from '../Title/Title';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { useAuth } from '../../hooks/useAuth';

export default function ChangePassword() {

    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors },
    } = useForm();

    const { changePassword } = useAuth();
    const submit = passwords => {
        changePassword(passwords);
    };

    return (
        <div>
            <Title title="Trocar Senha" />
            <form onSubmit={handleSubmit(submit)}>
                <Input
                    type="password"
                    label="Senha"
                    {...register('currentPassword', {
                        required: true,
                    })}
                    error={errors.currentPassword}
                />

                <Input
                    type="password"
                    label="Nova Senha"
                    {...register('newPassword', {
                        required: true,
                        minLength: 5,
                    })}
                    error={errors.newPassword}
                />

                <Input
                    type="password"
                    label="Confirmar Senha"
                    {...register('confirmNewPassword', {
                        required: true,
                        validate: value =>
                            value != getValues('newPassword')
                                ? 'Senha não Compativel'
                                : true,
                    })}
                    error={errors.confirmNewPassword}
                />

                <Button type="submit" text="Trocar" />
            </form>
        </div>
    );
}
