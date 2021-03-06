import React from 'react';
import { Admin, Resource } from 'react-admin';
import axios from 'axios';

import AdminIcon from '@material-ui/icons/Security';
import UserIcon from '@material-ui/icons/People';
import QuestionIcon from '@material-ui/icons/LiveHelp';
import AnswerIcon from '@material-ui/icons/QuestionAnswer';
import AchieveIcon from '@material-ui/icons/EmojiEvents';

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
    <Resource options={{ label: '????????????????????????????' }} icon={AdminIcon} name='admin' list={AdminList} />
    <Resource options={{ label: '????????????' }} 
      icon={UserIcon} 
      name='gamers' 
      list={GamersList} 
      create={GamersCreate} 
      edit={GamersEdit}/>
    <Resource 
      options={{ label: '??????????????' }} 
      icon={QuestionIcon} 
      name='questions' 
      list={QuestionsList} 
      create={QuestionsCreate} 
      edit={QuestionsEdit}/>
    <Resource options={{ label: '????????????' }} icon={AnswerIcon} name='answers' list={AnswersList} create={AnswersCreate} edit={AnswersEdit}/>
    <Resource options={{ label: '????????????????????' }} icon={AchieveIcon} name='achievements' list={AchievementsList} create={AchievementsCreate} edit={AchievementsEdit}/>

  </Admin>
}

export default App;
