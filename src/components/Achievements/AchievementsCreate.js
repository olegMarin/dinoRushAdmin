import React from 'react';
import { Create, SimpleForm, NumberInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const AchievementsCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/achievements');
        refresh();
    };
    return <Create onSuccess={onSuccess} title='Create a Post' {...props}>
        <SimpleForm>
            <NumberInput label='Id Игрока' source='idp' />
            <NumberInput label='Метка времени' source='time' />
            <NumberInput label='Тип' source='typeAchievement' />
        </SimpleForm>
    </Create>
};

export default AchievementsCreate;