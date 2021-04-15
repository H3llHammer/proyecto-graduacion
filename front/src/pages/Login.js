import React, { useState } from "react";
import axios from "axios";

export default function Login(){

    const [ loginUsername, setLoginUsername ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");

    const login = () => {
        axios({
            method: "POST",
            data: {
                username: loginUsername,
                password: loginPassword,
            },
            withCredentiales: true,
            url: "http://localhost:4000/login",
        }).then((res) => console.log(res));
    };

    return(
        <div className="login-background">
            <div className="login">
                <h1>Login</h1>
                <input placeholder="username" 
                onChange={(e) => setLoginUsername(e.target.value)} />
                <input placeholder="password"
                onChange={(e) => setLoginPassword(e.target.value)} />
                <button onClick={login}>Iniciar sesion</button>
            </div>
        </div>
    )
}