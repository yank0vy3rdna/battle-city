import { combineReducers } from 'redux';
import matchReducer from './match_reducer';

const rootReducer = combineReducers({
    match: matchReducer,
    //...
});