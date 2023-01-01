import {useState} from "react";
import {BattleField} from "./BattleField";
import structuredClone from '@ungap/structured-clone';

const TankTop = "tank_top"
const TankBottom = "tank_bottom"
const TankLeft = "tank_left"
const TankRight = "tank_right"
const Brick = "brick"
const Empty = "empty"

export const BattleMap = () => {
    const [data, setData] = useState({
        map:
            [
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
        myTank: {
            x: 1,
            y: 3
        },
        lastPress: 0
    })

    const onKeyPress = (e) => {
        if (e.timeStamp - data.lastPress < 500) {
            return
        }
        data.lastPress = e.timeStamp
        switch (e.key) {
            case 'w':
                switch (data.map[data.myTank.y][data.myTank.x]) {
                    case TankTop:
                        data.map[data.myTank.y][data.myTank.x] = Empty
                        data.myTank.y--
                    case TankLeft:
                    case TankRight:
                    case TankBottom:
                        data.map[data.myTank.y][data.myTank.x] = TankTop
                        setData(structuredClone(data))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'a':
                switch (data.map[data.myTank.y][data.myTank.x]) {
                    case TankLeft:
                        data.map[data.myTank.y][data.myTank.x] = Empty
                        data.myTank.x--
                    case TankTop:
                    case TankRight:
                    case TankBottom:
                        data.map[data.myTank.y][data.myTank.x] = TankLeft
                        setData(structuredClone(data))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 's':
                switch (data.map[data.myTank.y][data.myTank.x]) {
                    case TankBottom:
                        data.map[data.myTank.y][data.myTank.x] = Empty
                        data.myTank.y++
                    case TankLeft:
                    case TankRight:
                    case TankTop:
                        data.map[data.myTank.y][data.myTank.x] = TankBottom
                        setData(structuredClone(data))
                        break
                    default:
                        alert("Wrong tank data")
                        break
                }
                break
            case 'd':
                switch (data.map[data.myTank.y][data.myTank.x]) {
                    case TankRight:
                        data.map[data.myTank.y][data.myTank.x] = Empty
                        data.myTank.x++
                    case TankLeft:
                    case TankTop:
                    case TankBottom:
                        data.map[data.myTank.y][data.myTank.x] = TankRight
                        setData(structuredClone(data))
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
    return <BattleField map={data.map} onKeyPress={onKeyPress}/>
}