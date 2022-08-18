import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from '@reduxjs/toolkit';
import rootReducer from './reducers'
 
// const store = configureStore({ reducer: rootReducer}, compose(applyMiddleware(thunk)));
// export default store;