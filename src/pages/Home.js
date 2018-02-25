import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from '../layouts/MainLayout';
import logo from '../assets/thinking.svg';
import '../styles/Home.css';

const App = (props) => (
    <MuiThemeProvider>
        <MainLayout>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Irsan Arisandy</h1>
            </header>
            <p className="App-intro">
                Future Software/Web Developer, dank meme-lord
            </p>
        </MainLayout>
    </MuiThemeProvider>
);

export default App;
