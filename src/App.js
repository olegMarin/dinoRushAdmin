import React from 'react';
import { Admin, Resource, fetchUtils } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import axios from 'axios';

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
/* 
const fetchJson = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }

  options.user = {
    authenticated: true,
    token: '2035'
  };

  options.token = '2035';

  options.headers.set('Content-Type', 'application/x-www-form-urlencoded');
  options.headers.set('charset', 'utf-8');
  options.headers.set('Access-Control-Allow-Headers', '*');
  options.headers.set('Access-Control-Expose-Headers', 'X-Total-Count');
  options.headers.set('Access-Control-Allow-Origin', '*');
  options.headers.set('ReferrerPolicy', 'unsafe-url');

  return fetchUtils.fetchJson(url, options);
}
 */
//const dataProvider = restProvider('http://api.dinorush.businessmod.ru/admin', fetchJson);

const headers = { 
                                'Content-Type': 'application/x-www-form-urlencoded', 
                                'charset': 'utf-8',
                                'Access-Control-Allow-Headers': '*',
                                'Access-Control-Allow-Origin': '*',
                                'ReferrerPolicy': "unsafe-url"}
 
const apiUrl = 'https://api.dinorush.businessmod.ru/admin/'
 
const dataProvider = {
    getList:    (resource, params) => 
                  {
                        return new Promise(function (resolve, reject) {       
                        axios({
                            method: 'POST',
                            headers: headers,
                            url: apiUrl + resource +".php",
                            data: {
                                "jsonrpc": "2.0",
                                "method": 'getList',
                                "params": { token: '2035', ...params}
                            },
                            responseType: 'json', 
                            referrerPolicy: "unsafe-url", 
                        })
                            .then((res) => {
                                console.log(res)
                                resolve(res.data);
                            })
                            .catch((error) => {
                                reject(error);
                            });
                    }); 
                  }
             ,
              
    getOne:     (resource, params) => Promise,
    getMany:    (resource, params) => Promise,
    getManyReference: (resource, params) => Promise,
    create:     (resource, params) => Promise,
    update:     (resource, params) => Promise,
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => Promise,
    deleteMany: (resource, params) => Promise,

}

function App() {
  return <Admin dataProvider={dataProvider}>
    <Resource options={{ label: 'Администраторы' }} name='admin' list={AdminList} />
    <Resource options={{ label: 'Игроки' }} 
      icon={UserIcon} 
      name='gamers' 
      list={GamersList} 
      create={GamersCreate} 
      edit={GamersEdit}/>
    <Resource 
      options={{ label: 'Вопросы' }} 
      icon={PostIcon} 
      name='questions' 
      list={QuestionsList} 
      create={QuestionsCreate} 
      edit={QuestionsEdit}/>
    <Resource options={{ label: 'Ответы' }} icon={UserIcon} name='answers' list={AnswersList} create={AnswersCreate} edit={AnswersEdit}/>
    <Resource options={{ label: 'Достижения' }} icon={UserIcon} name='achievements' list={AchievementsList} create={AchievementsCreate} edit={AchievementsEdit}/>

  </Admin>
}

export default App;
