import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from 'react-router-dom';
import './styles/main.css';
import MainLayout from './components/main-layout';
import registerServiceWorker from './registerServiceWorker';

const PageRender = () => (
    <MuiThemeProvider>
        <BrowserRouter basename="/online-profile">
            <MainLayout />
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(<PageRender />, document.getElementById('root'));
registerServiceWorker();
