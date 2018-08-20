import React from 'react';
import Paper from 'material-ui/Paper';
import logo from '../assets/thinking.svg';
import wellness from '../assets/wellness-shed.png';
import aucs from '../assets/aucs.png';
import etite from '../assets/app-etite.png';
import qwiky from '../assets/qwiky.png';
import eatMyApp from '../assets/eat-my-app.png';
import currency from '../assets/currency-converter.png';
import '../styles/projects.css';

export default () => (
    <div id="projects-content">
        <Paper zDepth={3} rounded={false} className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Projects</h1>
        </Paper>
        <Paper zDepth={3} rounded={false} id="projects-paper">
            <h3>Websites:</h3>
            <div className="projects-web">
                <a href="https://www.thewellnessshed.co.nz/" target="_blank" rel="noopener noreferrer">
                    <img src={wellness} alt="The Wellness Shed" />
                </a>
                <a href="http://aucs.azurewebsites.net/index.html" target="_blank" rel="noopener noreferrer">
                    <img src={aucs} alt="Auckland University Compsci Society" />
                </a>
                <a href="https://ooksei.github.io/Hackfest/" target="_blank" rel="noopener noreferrer">
                    <img src={etite} alt="App-etite" />
                </a>
                <a href="https://badboiz.github.io/frontend/" target="_blank" rel="noopener noreferrer">
                    <img src={qwiky} alt="Qwiky" />
                </a>
                <a href="http://eatmyapp.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={eatMyApp} alt="Eat My App" />
                </a>
            </div>
            <h3>Mobile Applications:</h3>
            <div className="projects-app">
                <a href="https://expo.io/@irsanarisandy/currency-converter" target="_blank" rel="noopener noreferrer">
                    <img src={currency} alt="Currency Converter" />
                </a>
            </div>
            <h3>Others:</h3>
            <p>
                Other projects are mentioned in the&nbsp;
                <a href="https://www.dropbox.com/s/npvzonzakkjqsbc/CV.pdf?dl=0" target="_blank" rel="noopener noreferrer">CV</a>.
                If you want to see the code, feel free to email me at&nbsp;
                <a href="mailto:irsanarisandy@hotmail.com">irsanarisandy@hotmail.com</a>.
            </p>
        </Paper>
    </div>
);
