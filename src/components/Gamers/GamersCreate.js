import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const GamersCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/gamers');
        refresh();
    };
    return <Create onSuccess={onSuccess} title='Create a Post' {...props}>
        <SimpleForm>
        <TextInput label='Ссылка' source='qr' />
            <TextInput label='ФИО' source='name' />
            <TextInput label='Цвет брюха динозавра' source='color' />
            <NumberInput label='Id текущего вопроса' source='idanswer' />
            <NumberInput label='Последняя точка сохранения' source='location' />
            <NumberInput label='Метка времени' source='time' />
        </SimpleForm>
    </Create>
};

export default GamersCreate;