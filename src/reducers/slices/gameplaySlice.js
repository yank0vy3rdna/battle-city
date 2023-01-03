import {createSlice} from "@reduxjs/toolkit";

const gameplaySlice = createSlice({
    name: "Gameplay Slice",
    initialState: {
        myTank: {
            x: 1,
            y: 3
        },
        lastPress: 0
    },
    reducers : {

    }
})