import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';
import '../styles/home.css';

const Home = () => (
    <div id="home-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Irsan Arisandy</h1>
            <p className="app-intro">
                Future Software/Web Developer, dank meme-lord
            </p>
        </Paper>
    </div>
);

export default Home;
