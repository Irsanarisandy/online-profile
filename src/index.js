import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import MainLayout from './components/MainLayout';
import registerServiceWorker from './registerServiceWorker';

const PageRender = () => (
    <MuiThemeProvider>
        <BrowserRouter>
            <MainLayout/>
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(<PageRender />, document.getElementById('root'));
registerServiceWorker();
