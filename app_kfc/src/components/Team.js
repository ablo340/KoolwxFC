import React, {useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import UserContext from '../contexts/UserContext';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import PersonIcon from '@material-ui/icons/Person';
import Modal from '@material-ui/core/Modal';
import Profile from '../components/Profile';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( (theme) => ({
    root: {
      maxWidth: 360,
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

export default function Teams({team}){
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [pl, setPl] = React.useState({});
    const contextUserValue = useContext(UserContext);
    var player = true;

    if(contextUserValue.user.access !== "player"){
        player=false;
    }

    const handleOpen = (event) => {
        setOpen(true);
        console.log(event.target)
        console.log(event.value)
        //setPl(event.target.value);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const body = (
        <div className={classes.paper}>
          <Profile playerValue={pl}/>
        </div>
      );

    return(
        <div>
            {player && <h2>Coach : {team.Coach.name} {team.Coach.firstname}</h2>}
            <h3>Players :</h3>
            <List className={classes.root}>
                {team.Players.map((player) => 
                <Button value={player.id} onClick={handleOpen}>
                    <ListItem key={player.id}>
                        <ListItemAvatar>
                            <PersonIcon />
                        </ListItemAvatar>
                        <ListItemText id={player.id} primary={player.name + ' ' + player.firstname} />
                    </ListItem>
                </Button>
                )}
            </List>
            <Modal
                open={open}
                onClose={handleClose}
                className={classes.modal}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}