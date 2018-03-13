import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';
import FlappyBird from '../games/flappy-bird';
import '../styles/home.css';

export default () => (
    <div id="home-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Irsan Arisandy</h1>
            <p className="app-intro">
                Future Software/Web Developer
            </p>
        </Paper>
        <Paper zDepth={3} rounded={false} id="screen-too-small">
            <p>Hello, just a tip that there is a game here if you open this site on a screen that is at least 690px wide&nbsp;
                <span role="img" aria-label="smile">&#128515;</span></p>
        </Paper>
        <Paper zDepth={3} rounded={false} id="game-arena">
            <FlappyBird />
        </Paper>
    </div>
);
