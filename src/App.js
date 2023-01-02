import {CheckAuth} from "./components/CheckAuth";
import {Client} from "@heroiclabs/nakama-js";
import {useRef} from "react";

function App() {
    const client = useRef(new Client("defaultkey", "127.0.0.1", "7350", false))
    const socket = useRef(client.current.createSocket( false, true))
    return (
        <div>
            <CheckAuth client={client} socket={socket}/>
        </div>
    );
}

export default App;
