import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';

const PageRender = () => (
    <MuiThemeProvider>
        <BrowserRouter basename="/online-profile">
            <MainLayout />
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(<PageRender />, document.getElementById('root'));
registerServiceWorker();
