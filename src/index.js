import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {PersistGate} from 'redux-persist/integration/react';
import registerServiceWorker from './registerServiceWorker';
import {history, persistor, store} from './configureStore';
import MainRoutes from './configureRoutes';
import CustomNavbar from './components/CustomNavbar';
import './styles/main.css';

const MainLayout = () => (
    <div id="main-layout">
        <CustomNavbar />
        <MainRoutes />
        <footer>Irsan Arisandy &#169; {(new Date()).getFullYear()}. Made using React.</footer>
    </div>
);

const PageRender = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <MainLayout />
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<PageRender />, document.getElementById('root'));
registerServiceWorker();
