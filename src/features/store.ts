import { configureStore } from '@reduxjs/toolkit';
import switchFormReducer from './redux/SwitchFormSlice';


export const store = configureStore({
  reducer: {
    switchForm: switchFormReducer, 
  }, 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;