import React,  {useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function Auth(){
    
    const contextUserValue = useContext(UserContext);

    var player = false;

    if(contextUserValue.user.access == "player"){
        player=true;
    }
    return(
        <div>
            <h1>Nom : {contextUserValue.user.name}</h1>
            <h2>Prenom : {contextUserValue.user.firstname}</h2>
            <h4>Age :  {contextUserValue.user.age} ans </h4>
            {player && (<h4>Position :  {contextUserValue.user.position}</h4>)}
        </div>
    )
}