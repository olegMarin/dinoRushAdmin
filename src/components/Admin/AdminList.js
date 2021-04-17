import React from 'react';
import { List, Datagrid, NumberField, TextField } from 'react-admin';

const AdminList = (props) => {
    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <TextField label='Название организации' source='org' />
            <TextField label='ФИО' source='name' />
            <TextField label='Токен' source='token' />
        </Datagrid>
    </List>
};

export default AdminList;