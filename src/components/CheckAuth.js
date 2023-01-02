import {Auth} from "./Auth";
import {ChooseLobby} from "./ChooseLobby";
import {useEffect, useRef, useState} from "react";

export const CheckAuth = ({client, socket}) => {
    const [session, setSession] = useState(null)
    useEffect(() => {
        if (session !== null)
            socket.current.connect(session)
    }, [client, session, socket])
    return session === null ? <Auth client={client} setSession={setSession}/> :
        <ChooseLobby client={client} session={session} socket={socket}/>
}