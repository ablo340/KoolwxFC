import React,  { useState, useEffect } from 'react';


export default function Auth(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [statut, setStatut] = useState("coach");

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
        console.log(username + " "+ password + " " + statut)
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
              //setTeams(result);
            },
            (error) => {
              console.log(error);
              //setError(error);
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