import {createSlice} from "@reduxjs/toolkit";

const gameplaySlice = createSlice({
    name: "Gameplay Slice",
    initialState: {
        gameplay:
            {
                myTank: {
                    x: 1,
                    y: 3
                },
                lastPress: 0
            }

    },
    reducers: {
        clickW(state, action) {
            state.gameplay.myTank.y--
        },
        clickS(state, action) {
            state.gameplay.myTank.y++
        },
        clickA(state, action) {
            state.gameplay.myTank.x--
        },
        clickD(state, action) {
            state.gameplay.myTank.x++
        },
        changeLastPress(state, action) {
            state.gameplay.lastPress = action.payload.newLastPress
        }
    }
})

export const {clickA, clickW, clickS, clickD, changeLastPress} = gameplaySlice.actions;
export default gameplaySlice.reducer;