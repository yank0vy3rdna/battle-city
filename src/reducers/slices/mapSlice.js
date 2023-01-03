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
        updateMap(state, action) {
            console.log(state, action) //checking
            state.map[action.payload.x][action.payload.y] = action.payload.value
        },
        generateNewMap(state, action) {
        },
    }
})

export const {updateMap} = mapSlice.actions;
export default mapSlice.reducer;