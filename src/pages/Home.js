import React from 'react';
import '../styles/Home.css';
import logo from '../assets/thinking.svg';

const App = () => (
    <div id="home-content">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Irsan Arisandy</h1>
        </header>
        <p className="App-intro">
            Future Software/Web Developer, dank meme-lord
        </p>
    </div>
);

export default App;
