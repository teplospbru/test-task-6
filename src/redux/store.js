import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

// Настраиваем работу с devtools
const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

// Создаём Store
const store = () => createStore(rootReducer, composeEnhancers(applyMiddleware()));

const Store = store();

export default Store;