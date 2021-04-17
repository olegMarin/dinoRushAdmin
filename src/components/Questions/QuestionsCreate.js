import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, useNotify, useRefresh, useRedirect } from 'react-admin';

const QuestionsCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/questions');
        refresh();
    };
    return <Create onSuccess={onSuccess} title='Create a Post' {...props}>
        <SimpleForm>
            <TextInput label='Тема вопроса' source='theme' />
            <TextInput label='Тема родитель' source='parentTheme' />
            <NumberInput label='Порядковый номер вопроса' source='serialNumber' />
            <TextInput label='Текст вопроса' source='text' />
            <TextInput label='Правильный ответ' source='correctAnswer' />
            <TextInput label='Неправильный ответ' source='wrongAnswer' />
        </SimpleForm>
    </Create>
};

export default QuestionsCreate;