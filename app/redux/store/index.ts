import {combineReducers, createStore} from 'redux';
import CounterReducer from '../reducers/Counter';

const store = createStore(CounterReducer);

export default store;
export type RootState=ReturnType<typeof CounterReducer>;