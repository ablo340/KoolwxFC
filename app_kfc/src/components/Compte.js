import React,  {useContext } from 'react';
import PlayerContext from '../contexts/PlayerContext';

export default function Auth(){
    
    const contextValue = useContext(PlayerContext);
    return(
        <div>
            <h1>{contextValue.player.name}</h1>
            <h1>{contextValue.player.firstname}</h1>
        </div>
    )
}