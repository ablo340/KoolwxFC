import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardItem from '../components/CardItem'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function GridList({coach_name, coach_firstname, teams}) {

  const classes = useStyles();
  function FormRow() {
    return (
      <React.Fragment>
          {teams.map((team) =>(
            <Grid item xs={4} key={team.id}>
                <CardItem className={classes.paper} team={team} coach_name={coach_name} coach_firstname={coach_firstname}/>
            </Grid>
          ))}
      </React.Fragment>
    );
  }

  return (
    <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <FormRow />
        </Grid>
    </Grid>
  );
}