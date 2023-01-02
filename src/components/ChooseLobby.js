import {useEffect, useState} from "react";
import {Match} from "./Match";
import '../css/table.css'

export const ChooseLobby = ({client, session, socket}) => {
    const [lobbies, setLobbies] = useState([])
    const [match, setMatch] = useState(null)
    useEffect(() => {
        client.current.listMatches(session).then((matches) => {
            if (matches.matches === undefined)
                matches.matches = []
            setLobbies(matches.matches)
        }).catch(console.error)
    }, [client, session])
    const createLobby = () => {
        socket.current.createMatch().then(setMatch).catch(console.error)
    }
    if (match !== null)
        return <Match match={match} setMatch={setMatch} client={client} session={session} socket={socket}></Match>

    return <div>
        <div>
            <button onClick={createLobby}>Create lobby</button>
        </div>
        <table>
            <thead>
            <tr>
                <th colSpan="2">Lobbies</th>
            </tr>
            {lobbies.length > 0 ? <tr>
                <th>Lobby id</th>
                <th>Count of users in lobby</th>
            </tr> : <></>}
            </thead>
            <tbody>
            {
                lobbies.map((match, i) => <tr key={i}>
                    <td>{match.match_id}</td>
                    <td>{match.size}</td>
                    <td>
                        <button onClick={() => {
                            socket.current.joinMatch(match.match_id).then(setMatch).catch(console.error)
                        }}>Join lobby
                        </button>
                    </td>
                </tr>)
            }
            {lobbies.length === 0 ? <tr>
                <td colSpan="2">No lobbies found</td>
            </tr> : <></>}
            </tbody>
        </table>
    </div>
}