import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

const QuestionsEdit = (props) => {
    return <Edit title='Edit a User' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput label='Тема вопроса' source='theme' />
            <TextInput label='Тема родитель' source='parentTheme' />
            <NumberInput label='Порядковый номер вопроса' source='serialNumber' />
            <TextInput label='Текст вопроса' source='text' />
            <TextInput label='Правильный ответ' source='correctAnswer' />
            <TextInput label='Неправильный ответ' source='wrongAnswer' />
        </SimpleForm>
    </Edit>
};

export default QuestionsEdit;