import React from 'react';
import { Admin, Resource } from 'react-admin';
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

const headers = { 
                                'Content-Type': 'application/x-www-form-urlencoded', 
                                'charset': 'utf-8',
                                'Access-Control-Allow-Headers': '*',
                                'Access-Control-Allow-Origin': '*',
                                'ReferrerPolicy': "unsafe-url"}
 
const apiUrl = 'https://admin.dinorush.businessmod.ru/api/admin/'
 
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
    create:     (resource, params) => 
                  { return new Promise(function (resolve, reject) {       
                        axios({
                            method: 'POST',
                            headers: headers,
                            url: apiUrl + resource +".php",
                            data: {
                                "jsonrpc": "2.0",
                                "method": 'create',
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
                  },
    update:     (resource, params) => { return new Promise(function (resolve, reject) {       
                        axios({
                            method: 'POST',
                            headers: headers,
                            url: apiUrl + resource +".php",
                            data: {
                                "jsonrpc": "2.0",
                                "method": 'update',
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
                  },
    updateMany: (resource, params) => Promise,
    delete:     (resource, params) => { return new Promise(function (resolve, reject) {       
                        axios({
                            method: 'POST',
                            headers: headers,
                            url: apiUrl + resource +".php",
                            data: {
                                "jsonrpc": "2.0",
                                "method": 'delete',
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
                  },
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
