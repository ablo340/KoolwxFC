import React,  {useContext, useState } from 'react';
import UserContext from '../contexts/UserContext';

export default function Profile({playerValue}){
    const contextUserValue = useContext(UserContext);
    const [user, setUser] = useState(Object.keys(playerValue).length===0 ? contextUserValue.user : playerValue);
    var player = false;

    if(user.access === "player"){
        player=true;
    }
    return(
        <div>
            <h1>Nom : {user.name}</h1>
            <h2>Prenom : {user.firstname}</h2>
            <h4>Age :  {user.age} ans </h4>
            {player && (<h4>Position :  {user.position}</h4>)}
        </div>
    )
}