import React from 'react';
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';

import UserIcon from '@material-ui/icons/People';
import PostIcon from '@material-ui/icons/Book';

import AdminList from './components/Admin/AdminList';

import GamersList from './components/Gamers/GamersList';
import GamersCreate from './components/Gamers/GamersCreate';
import GamersEdit from './components/Gamers/GamersEdit';

import QuestionsList from './components/Questions/QuestionsList';
import QuestionsCreate from './components/Questions/QuestionsCreate';
import QuestionsEdit from './components/Questions/QuestionsEdit';

import AnswersList from './components/Answers/AnswersList';
import AnswersCreate from './components/Answers/AnswersCreate';
import AnswersEdit from './components/Answers/AnswersEdit';

import AchievementsList from './components/Achievements/AchievementsList';
import AchievementsCreate from './components/Achievements/AchievementsCreate';
import AchievementsEdit from './components/Achievements/AchievementsEdit';

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
    <Resource options={{ label: 'Администраторы' }} name='admin' list={AdminList} />
    <Resource options={{ label: 'Игроки' }} icon={UserIcon} name='gamers' list={GamersList} create={GamersCreate} edit={GamersEdit}/>
    <Resource options={{ label: 'Вопросы' }} icon={PostIcon} name='questions' list={QuestionsList} create={QuestionsCreate} edit={QuestionsEdit}/>
    <Resource options={{ label: 'Ответы' }} icon={UserIcon} name='answers' list={AnswersList} create={AnswersCreate} edit={AnswersEdit}/>
    <Resource options={{ label: 'Достижения' }} icon={UserIcon} name='achievements' list={AchievementsList} create={AchievementsCreate} edit={AchievementsEdit}/>

  </Admin>
}

export default App;
