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
    const {currentMap} = useSelector((state) => state.map);
    const {currentTank} = useSelector((state) => state.gameplay);
    const dispatch = useDispatch()

    const update = () => dispatch(updateMap())
    const press = () => dispatch(changeLastPress())
    const tapW = () => dispatch(clickW())
    const tapA = () => dispatch(clickA())
    const tapS = () => dispatch(clickS())
    const tapD = () => dispatch(clickD())

    console.log(currentTank.state)



    const onKeyPress = (e) => {
        if (e.timeStamp - currentTank.lastPress < 500) {
            return
        }
        press(e.timeStamp)

        switch (e.key) {
            case 'w':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankTop:
                        update(currentTank.myTank.y, currentTank.myTank.x, Empty)
                        tapW()
                    case TankLeft:
                    case TankRight:
                    case TankBottom:
                        update(currentTank.myTank.y, currentTank.myTank.x, TankTop)
                        // setData(structuredClone(data))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'a':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankLeft:
                        update(currentTank.myTank.y, currentTank.myTank.x, Empty)
                        tapA()
                    case TankTop:
                    case TankRight:
                    case TankBottom:
                        update(currentTank.myTank.y, currentTank.myTank.x, TankLeft)
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 's':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankBottom:
                        update(currentTank.myTank.y, currentTank.myTank.x, Empty)
                        tapS()
                    case TankLeft:
                    case TankRight:
                    case TankTop:
                        update(currentTank.myTank.y, currentTank.myTank.x, TankBottom)
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'd':
                switch (currentMap[currentTank.myTank.y][currentTank.myTank.x]) {
                    case TankRight:
                        update(currentTank.myTank.y, currentTank.myTank.x, Empty)
                        tapD()
                    case TankLeft:
                    case TankTop:
                    case TankBottom:
                        update(currentTank.myTank.y, currentTank.myTank.x, TankRight)
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
    return <BattleField onKeyPress={onKeyPress}/>
}