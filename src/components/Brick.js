export const Brick = ({x, y, half = false}) => {
    return <rect x={x} y={y} width={half ? "5" : "10"} height="5" fill="#884535" stroke="#a25f2a"/>
}