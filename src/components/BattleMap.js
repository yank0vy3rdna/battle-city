import {BattleField} from "./BattleField";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateMap} from '../reducers/slices/mapSlice'

import {changeLastPress, clickA, clickW, clickD, clickS} from "../reducers/slices/gameplaySlice";
const TankTop = "tank_top"
const TankBottom = "tank_bottom"
const TankLeft = "tank_left"
const TankRight = "tank_right"
const Brick = "brick"
const Empty = "empty"

export const BattleMap = () => {
    const currentMap = useSelector((state) => state.map.map);
    const currentTank = useSelector((state) => state.gameplay.gameplay);
    const dispatch = useDispatch()

    // console.log(currentTank.lastPress)
    // console.log(currentMap[currentTank.myTank.y][currentTank.myTank.x])



    const onKeyPress = (e) => {
        if (e.timeStamp - currentTank.lastPress < 500) {
            return
        }
        let newLastPress = e.timeStamp
        dispatch(changeLastPress({newLastPress}))


        switch (e.key) {
            case 'w':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankTop:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x, Empty))
                        dispatch(clickW())
                    case TankLeft:
                    case TankRight:
                    case TankBottom:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x, TankTop))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'a':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankLeft:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x, Empty))
                        dispatch(clickA())
                    case TankTop:
                    case TankRight:
                    case TankBottom:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x, TankLeft))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 's':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankBottom:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x,  Empty))
                        dispatch(clickS())
                    case TankLeft:
                    case TankRight:
                    case TankTop:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x,  TankBottom))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'd':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankRight:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x,  Empty))
                        dispatch(clickD())
                    case TankLeft:
                    case TankTop:
                    case TankBottom:
                        dispatch(updateMap(currentTank.myTank.y, currentTank.myTank.x,   TankRight))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            default:
                break
        }
    }
    return <BattleField map={currentMap} onKeyPress={onKeyPress}/>
}