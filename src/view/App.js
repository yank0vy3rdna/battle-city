import {CheckAuth} from "../components/CheckAuth";
import {Client} from "@heroiclabs/nakama-js";
import {useRef} from "react";
import {BattleMap} from "../components/BattleMap";

function App() {
    const client = useRef(new Client("defaultkey", "127.0.0.1", "7350", false))
    const socket = useRef(client.current.createSocket( false, true))
    return (
        <div>
            {/*<CheckAuth client={client} socket={socket}/>*/}
            <BattleMap />
        </div>
    );
}

export default App;
