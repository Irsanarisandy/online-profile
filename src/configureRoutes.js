import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const ConnectedSwitch = connect(state => ({
    location: state.location
}))(Switch);

const RouteContainer = () => (
    <ConnectedSwitch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/projects' component={Projects}/>
        <Route path='/contact' component={Contact}/>
    </ConnectedSwitch>
);

export default connect(state => ({
    location: state.location
}))(RouteContainer);
