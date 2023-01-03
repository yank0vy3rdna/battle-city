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
        clickW(state, action){
            state.myTank.y--
        },
        clickS(state, action){
            state.myTank.y++
        },
        clickA(state, action){
            state.myTank.x--
        },
        clickD(state, action){
            state.myTank.x++
        },
        changeLastPress(state, action){
            state.lastPress = action.payload.lastPress
        }
    }
})

export const {clickA,clickW,clickS,clickD,changeLastPress} = gameplaySlice.actions;
export default gameplaySlice.reducer;