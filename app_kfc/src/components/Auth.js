import React,  { useState, useEffect, useContext } from 'react';
import LogContext from '../contexts/AuthContext';
import PlayerContext from '../contexts/PlayerContext';

export default function Auth(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statut, setStatut] = useState("coach");
    
    const contextPlayerValue = useContext(PlayerContext);
    const contextValue = useContext(LogContext);

    const handleChangeUsername = (event) => {
        const value = event.currentTarget.value;
        setUsername(value);
    }
    const handleChangePassword = (event) => {
        const value = event.currentTarget.value;
        setPassword(value);
    }
    const handleChangeStatut = (event) => {
        const value = event.currentTarget.value;
        setStatut(value);
    }


    async function fetchData() {
        fetch("http://localhost:8081/login", {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "statut": statut
            })
        })
          .then(res => res.json())
          .then(
            (result) => {
              console.log(result);
              contextValue.updateLog(true);
              contextPlayerValue.updatePlayer(result);
            },
            (error) => {
              console.log(error);
              contextValue.updateLog(false);
            }
          )
    }

    useEffect(() => {
        fetchData()
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData()
    }

    return(
        <form onSubmit={handleSubmit}>
            <img src="logo_kfc192.jpg"/>
            <input value={username} onChange={handleChangeUsername} type="text" placeholder="username"/>
            <input value={password} onChange={handleChangePassword} type="text" placeholder="password"/>
            <select value={statut} onChange={handleChangeStatut}>
                <option value="coach">Coach</option>
                <option value="player">Player</option>
            </select>
            <button>Connect</button>
        </form>
    )
}