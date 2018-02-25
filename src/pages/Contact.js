import React from 'react';
import Paper from 'material-ui/Paper';
import '../styles/Contact.css';
import logo from '../assets/thinking.svg';

const App = () => (
    <div id="contact-content">
        <Paper zDepth={3} className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Contact</h1>
            <p className="App-intro">
                If you need someone to do your job, I am available&nbsp;
                <span role="img" aria-label="grin">&#128512;</span>
            </p>
        </Paper>
    </div>
);

export default App;
