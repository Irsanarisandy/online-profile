import React from 'react';
import Paper from 'material-ui/Paper';
import '../styles/Projects.css';
import logo from '../assets/thinking.svg';

const App = () => (
    <div id="projects-content">
        <Paper zDepth={3} className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Projects</h1>
            <p className="App-intro">
                Coming Soon
            </p>
        </Paper>
    </div>
);

export default App;
