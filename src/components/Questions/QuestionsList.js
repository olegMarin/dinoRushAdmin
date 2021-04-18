import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton, SelectField } from 'react-admin';

const QuestionsList = (props) => {

    const choices = [
        { typeAchievement: 'book', name: 'Книга' },
        { typeAchievement: 'glasses', name: 'Очки' },
        { typeAchievement: 'lvl1', name: 'Уровень 1' },
        { typeAchievement: 'lvl2', name: 'Уровень 2' },
        { typeAchievement: 'lvl3', name: 'Уровень 3' },
     ];

    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <TextField label='Тема вопроса' source='theme' />
            <TextField label='Тема родитель' source='parentTheme' />
            <NumberField label='Номер вопроса' source='serialNumber' />
            <TextField label='Текст вопроса' source='text' />
            <TextField label='Правильный ответ' source='correctAnswer' />
            <TextField label='Неправильный ответ' source='wrongAnswer' />
            <SelectField label='Вознаграждение' source='typeAchievement' choices={choices} optionText="name" optionValue="typeAchievement"/>
            <NumberField label='Метка времени' source='utime' />
            <EditButton basePath='/questions' />
            <DeleteButton basePath='/questions' />
        </Datagrid>
    </List>
};

export default QuestionsList;