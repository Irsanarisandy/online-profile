import React from 'react';
import Paper from 'material-ui/Paper';
import '../styles/Home.css';
import logo from '../assets/thinking.svg';

const App = () => (
    <div id="home-content">
        <Paper zDepth={3} className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Irsan Arisandy</h1>
            <p className="App-intro">
                Future Software/Web Developer, dank meme-lord
            </p>
        </Paper>
    </div>
);

export default App;
