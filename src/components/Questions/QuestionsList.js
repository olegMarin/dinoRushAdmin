import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';

const QuestionsList = (props) => {
    return <List {...props}>
        <Datagrid>
            <NumberField source='id' />
            <TextField label='Тема вопроса' source='theme' />
            <TextField label='Тема родитель' source='parentTheme' />
            <NumberField label='Порядковый номер вопроса' source='serialNumber' />
            <TextField label='Текст вопроса' source='text' />
            <TextField label='Правильный ответ' source='correctAnswer' />
            <TextField label='Неправильный ответ' source='wrongAnswer' />
            <NumberField label='Метка времени' source='utime' />
            <EditButton basePath='/questions' />
            <DeleteButton basePath='/questions' />
        </Datagrid>
    </List>
};

export default QuestionsList;