const transition = {
    'transition': 'all, 5s'
}
export const size = 35
export const Tank = ({x, y, angle = 0}) => {
    return <g transform={"rotate(" + angle + " " + (x + size / 2) + " " + (y + size / 2) + ")"}>
        <rect style={transition} x={x} y={y} width={size} height={size} fill="brown" stroke="black"/>
        <rect style={transition} x={x + size/6} y={y + size/4} width={size / 2} height={size/2} fill="brown" stroke="black"/>
        <rect style={transition} x={x + size/2} y={y + size/2.1} width="12" height="3" fill="brown" stroke="black"/>
    </g>
}