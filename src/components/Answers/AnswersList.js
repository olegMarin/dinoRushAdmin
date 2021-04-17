import React from 'react';
import { List, Datagrid, NumberField, EditButton, DeleteButton } from 'react-admin';

const AnswersList = (props) => {
    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <NumberField label='Id Игрока' source='idp' />
            <NumberField label='Результат' source='correctness' />
            <NumberField label='Метка времени' source='time' />
            <EditButton basePath='/answers' />
            <DeleteButton basePath='/answers' />
        </Datagrid>
    </List>
};

export default AnswersList;