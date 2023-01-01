import {Brick} from "./Brick";
import {size} from "./Tank";

const BrickLine = ({x, y, count, firstHalf = false}) => {
    const xes = []
    for (let i = 0; i < count; i++) {
        if ((i >= 1 && firstHalf))
            xes.push(x + halfBlockSize + (i - 1) * (halfBlockSize * 2))
        else
            xes.push(i * (halfBlockSize * 2) + x)
    }
    return <>{xes.map((br_x, i) => <Brick key={i} x={br_x} y={y}
                                       half={firstHalf ? (br_x === 0) : (br_x === xes[xes.length - 1])}/>)}</>
}
const brickSizeInHalfBlocks = 7 // must be odd
const halfBlockSize = size / brickSizeInHalfBlocks
export const BrickWall = ({x, y}) => {
    const yes = []
    for (let i = 0; i < brickSizeInHalfBlocks; i++) {
        yes.push(i * halfBlockSize + y)
    }
    return <g>
        {yes.map((line_y, i) => <BrickLine key={i} count={Math.round(brickSizeInHalfBlocks / 2)} x={x} y={line_y}
                                      firstHalf={line_y / halfBlockSize % 2}/>)}
    </g>
}