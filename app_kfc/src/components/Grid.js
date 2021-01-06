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



/*export const Teams = [
    {id:0, name: "U8", coach: "Klop", players:[ 
            {id: 0, name: "Abdou"},
            {id: 1, name: "Alex"},
            {id: 2, name: "Henri"},
            {id: 3, name: "Jean"},
            {id: 4, name: "Rifi"},
            {id: 5, name: "AnToine"},
            {id: 6, name: "Julian"},
            {id: 7, name: "Poley"},
            {id: 8, name: "Seb"},
            {id: 9, name: "Samad"},
            {id: 10, name: "Karim"}
        ]
    },
    {id:1, name: "U9", coach: "Eric", players:[ 
            {id: 11, name: "Alexi"},
            {id: 12, name: "Fab"},
            {id: 13, name: "Tom"},
            {id: 14, name: "Nat"},
            {id: 15, name: "Biley"},
            {id: 16, name: "Juan"},
            {id: 17, name: "Ange"},
            {id: 18, name: "Tom"},
            {id: 19, name: "Jimi"},
            {id: 20, name: "Bryan"}
        ]
    },
    {id:2, name: "U8", coach: "Klop", players:[ 
        {id: 0, name: "Abdou"},
        {id: 1, name: "Alex"},
        {id: 2, name: "Henri"},
        {id: 3, name: "Jean"},
        {id: 4, name: "Rifi"},
        {id: 5, name: "AnToine"},
        {id: 6, name: "Julian"},
        {id: 7, name: "Poley"},
        {id: 8, name: "Seb"},
        {id: 9, name: "Samad"},
        {id: 10, name: "Karim"}
    ]
},
{id:3, name: "U8", coach: "Klop", players:[ 
    {id: 0, name: "Abdou"},
    {id: 1, name: "Alex"},
    {id: 2, name: "Henri"},
    {id: 3, name: "Jean"},
    {id: 4, name: "Rifi"},
    {id: 5, name: "AnToine"},
    {id: 6, name: "Julian"},
    {id: 7, name: "Poley"},
    {id: 8, name: "Seb"},
    {id: 9, name: "Samad"},
    {id: 10, name: "Karim"}
]
},
{id:4, name: "U8", coach: "Klop", players:[ 
    {id: 0, name: "Abdou"},
    {id: 1, name: "Alex"},
    {id: 2, name: "Henri"},
    {id: 3, name: "Jean"},
    {id: 4, name: "Rifi"},
    {id: 5, name: "AnToine"},
    {id: 6, name: "Julian"},
    {id: 7, name: "Poley"},
    {id: 8, name: "Seb"},
    {id: 9, name: "Samad"},
    {id: 10, name: "Karim"}
]
},
];
*/