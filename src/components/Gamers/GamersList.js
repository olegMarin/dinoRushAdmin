import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';

const GamersList = (props) => {
    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <TextField label='Ссылка' source='qr' />
            <TextField label='ФИО' source='name' />
            <TextField label='Цвет брюха динозавра' source='color' />
            <NumberField label='Id текущего вопроса' source='idanswer' />
            <NumberField label='Последняя точка сохранения' source='location' />
            <NumberField label='Метка времени' source='time' />
            <EditButton basePath='/gamers' />
            <DeleteButton basePath='/gamers' />
        </Datagrid>
    </List>
};

export default GamersList;