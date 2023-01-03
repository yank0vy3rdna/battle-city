import {createSlice} from "@reduxjs/toolkit";

const TankTop = "tank_top"
const TankBottom = "tank_bottom"
const TankLeft = "tank_left"
const TankRight = "tank_right"
const Brick = "brick"
const Empty = "empty"

const mapSlice = createSlice({
    name: 'Game Map',
    initialState: {
        map: [
            [Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick],
            [Brick, Empty, Empty, Empty, Brick, Empty, Empty, Empty, Empty, Brick
            ],
            [Brick, Empty, Brick, Empty, Brick, Empty, Brick, Empty, Empty, Brick],
            [Brick, TankRight, Empty, Empty, Empty, Empty, Brick, Empty, Empty, Brick],
            [Brick, Empty, TankLeft, Empty, Brick, Empty, Empty, Empty, Brick, Brick],
            [Brick, Empty, Brick, Empty, Empty, Empty, Brick, Empty, Empty, Brick],
            [Brick, Empty, Brick, Empty, Empty, Brick, Empty, Empty, Empty, Brick],
            [Brick, Empty, Brick, Empty, Brick, Empty, Empty, Brick, Empty, Brick],
            [Brick, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Empty, Brick],
            [Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick, Brick],
        ],
    },
    reducers: {
        generateNewMap(state, action) {
            console.log(state, action) //checking
            state.map.splice(0,state.map.length);
            state.map.push(action.payload.map)
        },
    }
})

export const {generateNewMap} = mapSlice.actions;
export default mapSlice.reducer;