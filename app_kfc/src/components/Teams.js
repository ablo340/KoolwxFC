import React,  {useContext } from 'react';
import GridList from '../components/Grid';
import UserContext from '../contexts/UserContext';
import Team from '../components/Team';

export default function TeamDisplay(){
    const contextUserValue = useContext(UserContext);
    var player = false;

    if(contextUserValue.user.access == "player"){
        player=true;
    }

    console.log(contextUserValue.user.name)

    return(
        <div>
            {player ? (<Team team={contextUserValue.user.Team}/>) : (<GridList coach_name={contextUserValue.user.name} coach_firstname={contextUserValue.user.firstname} teams={contextUserValue.user.Teams}/>)}
        </div>
    )
}