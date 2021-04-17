import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const GamersEdit = (props) => {
    return <Edit title='Edit a User' {...props}>
        <SimpleForm>
            <NumberInput disabled source='id' />
            <TextInput label='Ссылка' source='qr' />
            <TextInput label='ФИО' source='name' />
            <TextInput label='Цвет брюха динозавра' source='color' />
            <NumberInput label='Id текущего вопроса' source='idanswer' />
            <NumberInput label='Последняя точка сохранения' source='location' />
            <NumberInput label='Метка времени' source='time' />
        </SimpleForm>
    </Edit>
};

export default GamersEdit;