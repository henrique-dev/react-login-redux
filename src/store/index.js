import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authenticateReducer from './auth';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    authenticate: authenticateReducer
  }
});

export default store;
