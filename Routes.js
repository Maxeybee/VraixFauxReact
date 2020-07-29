import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import QuestionsList from './components/QuestionsList';

const Routes = () => (
    <Router>
       <Scene key = "root">
          <Scene key = "home" component = {Home} title = "Home" initial = {true} />
          <Scene key = "questionslist" component = {QuestionsList} title = "Que le jeux de merde commence !" />
       </Scene>
    </Router>
 )
 export default Routes