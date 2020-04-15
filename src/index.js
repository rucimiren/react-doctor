import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";

import './assets/css/index.less';
import App from './App';
import DongTai from './views/dongtai'
import Desc from './views/desc'
import Heal from './views/heal'
import Loca from './views/loca'
import Login from './views/login'
import Zhuce from './views/zhuce'
import SetPwd from './views/setPwd'
import Must from './views/must'
import Manyi from './views/manyi'
import Fee from './views/fee'
import User from './views/user'
import Gonglue from './views/gonglue'
import Two from './router/gonglue/two'
import Three from './router/gonglue/three'
import Four from './router/gonglue/four'
import Guahaolist from './views/guahaolist'
import Logout from './views/logout'
import Baogao from './views/baogao'
import Baogaolist from './views/baogaolist'
import Yuyue from './views/yuyue'
import Keshi from './views/keshi'
import Doctor from './views/doctor'

import * as serviceWorker from './serviceWorker';

/* 
 <TransitionGroup>
    <CSSTransition
      appear={true}
      classNames="appAppear"
      timeout={500}
    >
      <App/>
    </CSSTransition>
  </TransitionGroup>
*/


ReactDOM.render(

    <TransitionGroup>
        <CSSTransition
            appear={true}
            classNames="fade"
            timeout={800}


        >
            <Router>



                <Route path='/dongtai' exact component={DongTai}></Route>


                <Route path="/" exact component={App}></Route>
                <Route path='/desc' exact component={Desc}></Route>
                <Route path='/heal' exact component={Heal}></Route>
                <Route path='/loca' exact component={Loca}></Route>
                <Route path='/login' exact component={Login}></Route>
                <Route path='/zhuce' exact component={Zhuce}></Route>
                <Route path='/must' exact component={Must}></Route>
                <Route path='/setPwd' exact component={SetPwd}></Route>
                <Route path='/manyi' exact component={Manyi}></Route>
                <Route path='/fee' exact component={Fee}></Route>
                <Route path='/user' exact component={User}></Route>
                <Route path='/gonglue' exact component={Gonglue}></Route>
                <Route path='/gonglue/two' exact component={Two}></Route>
                <Route path='/gonglue/three' exact component={Three}></Route>
                <Route path='/gonglue/four' exact component={Four}></Route>
                <Route path='/guahaolist' exact component={Guahaolist}></Route>
                <Route path='/logout' exact component={Logout}></Route>
                <Route path='/baogao' exact component={Baogao} ></Route>
                <Route path='/baogaolist' exact component={Baogaolist} ></Route>
                <Route path='/yuyue' exact component={Yuyue} ></Route>
                <Route path='/keshi' exact component={Keshi} ></Route>
                <Route path='/doctor' exact component={Doctor} ></Route>


            </Router>
        </CSSTransition>
    </TransitionGroup>


    , document.getElementById('root'));

serviceWorker.unregister();

