import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../reducers/slices/mapSlice';
import gameplayReducer from  '../reducers/slices/gameplaySlice'

export default configureStore({
    reducer: {
        map: mapReducer,
        gameplay: gameplayReducer,
    },
    devTools: true,
})