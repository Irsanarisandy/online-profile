import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';
import '../styles/projects.css';

export default () => (
    <div id="projects-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Projects</h1>
            <p className="app-intro">
                Coming Soon
            </p>
        </Paper>
    </div>
);
