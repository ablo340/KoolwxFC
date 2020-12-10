import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardItem({team_name, coach_name, coach_firstname}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {team_name}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="h2">
                Coach : {coach_name} {coach_firstname}
            </Typography>
            
        </CardContent>
        <CardActions>
        <Button size="small" color="primary">
            Share
        </Button>
        <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
    </Card>
  );
}