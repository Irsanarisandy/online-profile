import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import Projects from '../pages/projects';
import Contact from '../pages/contact';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);

export default Routes;
