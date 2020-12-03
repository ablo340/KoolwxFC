import React,  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Box, Typography, FormGroup, FormControlLabel, Switch} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import GridList, {Teams} from '../components/Grid';
//import Team from '../models/Team';
//import equi from '../services/TeamServices';
//import { ajax } from 'rxjs/ajax';
//import { map } from 'rxjs/operators';


const api = '';

function TabPanel(props) {
  
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const [error, setError] = useState(null);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/allTeams")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setTeams(result);
        },
        (error) => {
          console.log(error);
          setError(error);
        }
      )
  }, []);
  
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleTab = (event, newValue) => {
    setValue(newValue);
  };

  const [auth, setAuth] = React.useState(true);
  const handleLog = (event) => {
    setAuth(event.target.checked);
  };

  return (
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleLog} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Tabs value={value} onChange={handleTab} aria-label="simple tabs example" centered>
          <Tab label="Home" icon={ <HomeIcon />} {...a11yProps(0)} />
          {auth && (
            <Tab label="Profile" icon={ <PersonIcon />} {...a11yProps(1)} />
          )}
          {auth && (
            <Tab label="Team" icon={ <PeopleIcon />} {...a11yProps(2)} />
          )}
          {auth && (
            <Tab label="Compte" icon={ <AccountCircle />} {...a11yProps(3)} />
          )}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <GridList items={teams}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Profile
      </TabPanel>
      <TabPanel value={value} index={2}>
        Team
      </TabPanel>
      <TabPanel value={value} index={3}>
        Compte
      </TabPanel>
    </div>
  );
}