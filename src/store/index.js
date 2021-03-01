// eslint-disable-next-line
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import grillMasterReducer from './grillMaster.slice';
import logger from 'redux-logger';

const rootReducer = combineReducers({
    grillMaster: grillMasterReducer
});
const middleware = [...getDefaultMiddleware()];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}
const store = configureStore({
    reducer: rootReducer,
    middleware,
});

export default store;
