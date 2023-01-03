import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../reducers/slices/mapSlice'

export default configureStore({
    reducer: {
        map: mapReducer,
    }
})