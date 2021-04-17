import React from 'react';
import { Edit, SimpleForm, NumberInput } from 'react-admin';

const AchievementsEdit = (props) => {
    return <Edit title='Create a Post' {...props}>
        <SimpleForm>
            <NumberInput disabled source='id' />
            <NumberInput label='Id Игрока' source='idp' />
            <NumberInput label='Метка времени' source='time' />
            <NumberInput label='Тип' source='typeAchievement' />
        </SimpleForm>
    </Edit>
};

export default AchievementsEdit;