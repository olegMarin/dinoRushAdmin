import React from 'react';
import { List, Datagrid, NumberField, EditButton, DeleteButton } from 'react-admin';

const AchievementsList = (props) => {
    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <NumberField label='Id Игрока' source='idp' />
            <NumberField label='Метка времени' source='time' />
            <NumberField label='Тип' source='typeAchievement' />
            <EditButton basePath='/achievements' />
            <DeleteButton basePath='/achievements' />
        </Datagrid>
    </List>
};

export default AchievementsList;