export const Match = ({client, session, socket, match, setMatch}) => {
    socket.current.onmatchdata = (e) => {
        console.log("Received match data", e)
    }
    const sendMatchData = (opCode, data) => {
        socket.current.sendMatchState(match.match_id, opCode, JSON.stringify(data))
    }
    return <>{JSON.stringify(match)}</>
}