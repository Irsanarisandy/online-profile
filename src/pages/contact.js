import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';

const Contact = () => (
    <div id="contact-content">
        <Paper zDepth={3} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Contact</h1>
            <p className="app-intro">
                If you need someone to do your job, I am available&nbsp;
                <span role="img" aria-label="grin">&#128512;</span>
            </p>
        </Paper>
    </div>
);

export default Contact;
