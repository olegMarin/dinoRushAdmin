import React from 'react';
import { Create, SimpleForm, NumberInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const AnswersCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/answers');
        refresh();
    };
    return <Create onSuccess={onSuccess} title='Create a Post' {...props}>
        <SimpleForm>
            <NumberInput label='Id Игрока' source='idp' />
            <NumberInput label='Результат' source='correctness' />
            <NumberInput label='Метка времени' source='time' />
        </SimpleForm>
    </Create>
};

export default AnswersCreate;