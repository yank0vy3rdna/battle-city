import {size, Tank} from "./Tank";
import {BrickWall} from "./BrickWall";
import {useEffect} from "react";

export const BattleField = ({map, onKeyPress}) => {
    useEffect(() => {
        window.removeEventListener("keydown", onKeyPress)
        window.addEventListener('keydown', onKeyPress)
    }, [onKeyPress])
    const elements = []
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            const x = j * size
            const y = i * size
            const key = map[i][j] + '_' + x + '_' + y
            switch (map[i][j]) {
                case 'brick':
                    elements.push(<BrickWall x={x} y={y} key={key}/>)
                    break
                case 'tank_left':
                    elements.push(<Tank x={x} y={y} key={key} angle={180}/>)
                    break

                case 'tank_right':
                    elements.push(<Tank x={x} y={y} key={key} angle={0}/>)
                    break

                case 'tank_top':
                    elements.push(<Tank x={x} y={y} key={key} angle={270}/>)
                    break

                case 'tank_bottom':
                    elements.push(<Tank x={x} y={y} key={key} angle={90}/>)
                    break
                case 'empty':
                    break
                default:
                    alert('wrong map')
            }
        }
    }
    return <div>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 900 900">
            {elements}
        </svg>
    </div>
}