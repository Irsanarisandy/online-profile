import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
);

export default Routes;
