import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Modal from '@material-ui/core/Modal';
import Team from '../components/Team';

const useStyles = makeStyles( (theme) => ({
  root: {
    maxWidth: 345,
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


export default function CardItem({team, coach_name, coach_firstname}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (event) => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <Team team={team}/>
    </div>
  );

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                  {team.name}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="h2">
                  Coach : {coach_name} {coach_firstname}
              </Typography>
              
          </CardContent>
        </CardActionArea>
          <CardActions>
          <Button size="small" color="primary">
              Share
          </Button>
          <Button size="small" color="primary">
              Learn More
          </Button>
          </CardActions>
      </Card>
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
  );
}