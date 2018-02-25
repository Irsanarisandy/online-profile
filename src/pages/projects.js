import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';

const Projects = () => (
    <div id="projects-content">
        <Paper zDepth={3} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Projects</h1>
            <p className="app-intro">
                Coming Soon
            </p>
        </Paper>
    </div>
);

export default Projects;
