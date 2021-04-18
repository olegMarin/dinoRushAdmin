import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput } from 'react-admin';

const QuestionsEdit = (props) => {
    const choices = [
        { typeAchievement: 'book', name: 'Книга' },
        { typeAchievement: 'glasses', name: 'Очки' },
        { typeAchievement: 'lvl1', name: 'Уровень 1' },
        { typeAchievement: 'lvl2', name: 'Уровень 2' },
        { typeAchievement: 'lvl3', name: 'Уровень 3' },
     ];
    return <Edit title='Редактирование вопроса...' {...props}>
        <SimpleForm>
            <TextInput disabled source='id' />
            <TextInput label='Тема вопроса' source='theme' />
            <TextInput label='Тема родитель' source='parentTheme' />
            <NumberInput label='Номер вопроса' source='serialNumber' />
            <TextInput label='Текст вопроса' source='text' />
            <TextInput label='Правильный ответ' source='correctAnswer' />
            <TextInput label='Неправильный ответ' source='wrongAnswer' />
            <SelectInput label='Вознаграждение' source='typeAchievement' choices={choices} optionText="name" optionValue="typeAchievement"/>
        </SimpleForm>
    </Edit>
};

export default QuestionsEdit;