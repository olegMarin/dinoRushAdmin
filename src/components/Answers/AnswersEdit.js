import React from 'react';
import { Edit, SimpleForm, NumberInput } from 'react-admin';

const AnswersEdit = (props) => {
    return <Edit title='Create a Post' {...props}>
        <SimpleForm>
            <NumberInput disabled source='id' />
            <NumberInput label='Id Игрока' source='idp' />
            <NumberInput label='Результат' source='correctness' />
            <NumberInput label='Метка времени' source='time' />
        </SimpleForm>
    </Edit>
};

export default AnswersEdit;