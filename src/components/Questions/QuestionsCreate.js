import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput, useNotify, useRefresh, useRedirect, SelectInput } from 'react-admin';

const QuestionsCreate = (props) => {
    const notify = useNotify();
    const refresh = useRefresh();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`)
        redirect('/questions');
        refresh();
    };

    const choices = [
        { typeAchievement: 'book', name: 'Книга' },
        { typeAchievement: 'glasses', name: 'Очки' },
        { typeAchievement: 'lvl1', name: 'Уровень 1' },
        { typeAchievement: 'lvl2', name: 'Уровень 2' },
        { typeAchievement: 'lvl3', name: 'Уровень 3' },
     ];

    return <Create onSuccess={onSuccess} title='Создать вопрос...' {...props}>
        <SimpleForm>
            <TextInput label='Тема вопроса' source='theme' />
            <TextInput label='Тема родитель' source='parentTheme' />
            <NumberInput label='Номер вопроса' source='serialNumber' />
            <TextInput label='Текст вопроса' source='text' />
            <TextInput label='Правильный ответ' source='correctAnswer' />
            <TextInput label='Неправильный ответ' source='wrongAnswer' />
            <SelectInput label='Вознаграждение' source='typeAchievement' choices={choices} optionText="name" optionValue="typeAchievement"/>
        </SimpleForm>
    </Create>
};

export default QuestionsCreate;