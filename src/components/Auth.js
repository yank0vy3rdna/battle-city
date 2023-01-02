import {useState} from "react";

export const Auth = ({client, setSession}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const onClick = () => {
        if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            alert("Bad email")
            return
        }
        if (password.length < 8){
            alert("Password length should not be less than 8")
            return;
        }
        client.current.authenticateEmail(email, password, true).then(setSession).catch(console.error)
    }
    return <>
        <label>
            Email:
            <input type={"email"} onChange={(e) => setEmail(e.target.value)} value={email}/>
        </label>
        <label>
            Password:
            <input type={"password"} onChange={(e) => setPassword(e.target.value)} value={password}/>
        </label>
        <button onClick={onClick}>Login</button>
    </>
}