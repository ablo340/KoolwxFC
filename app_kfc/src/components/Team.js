import React,  {useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
}));

export default function Teams({team}){
    const classes = useStyles();
    return(
        <div>
            <List className={classes.root}>
                {team.Players.map((player) => {
                    return (
                    <ListItem key={player.id} button>
                        <ListItemAvatar>
                            <PersonIcon />
                        </ListItemAvatar>
                        <ListItemText id={player.id} primary={player.name + ' ' + player.firstname} />
                    </ListItem>
                    );
                })}
            </List>
        </div>
    )
}