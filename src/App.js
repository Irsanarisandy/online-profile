import React, { Component } from 'react';
import logo from './thinking.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Irsan Arisandy</h1>
                </header>
                <p className="App-intro">
                    Future Software/Web Developer, meme-lord
                </p>
            </div>
        );
    }
}

export default App;
