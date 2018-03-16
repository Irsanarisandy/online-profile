import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware, routerReducer} from 'react-router-redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory({basename: 'online-profile'});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, routerReducer);
const middlewares = [thunk, routerMiddleware(history)];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}
export const store = createStore(persistedReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
