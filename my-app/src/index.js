import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
//import './index.css';
import App from './App';
import Login from './Components/Login';
import Home from './Components/home';
import EditProfile from './Components/edit-profile';
import Chat from './Components/chat';
import Color from './Components/color';
import Theme from './Components/theme';
import WallPaper from './Components/wallPaper';
//import {Login} from './App.js';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <div>
      <Router history={browserHistory}>
         <Route path = "/" component = {App}>
         <IndexRoute component = {Login} />
         <Route path = "Login" component = {Login} />
         <Route path = "Home" component = {Home} />
         <Route path = "EditProfile" component = {EditProfile} />
         <Route path = "Chat" component = {Chat} />
         <Route path = "Color" component = {Color} />
         <Route path = "Theme" component = {Theme} />
         <Route path = "WallPaper" component = {WallPaper} />
      </Route>
   </Router>
    
	    </div>,  document.getElementById('root')
	);
//serviceWorker.unregister();
//
