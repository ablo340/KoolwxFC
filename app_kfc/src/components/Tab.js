import React,  { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Box, Typography} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import Auth from '../components/Auth';
import Profile from '../components/Profile';
import TeamDisplay from '../components/Teams';
import Compte from '../components/Compte';
import LogContext from '../contexts/AuthContext';
import UserContext from '../contexts/UserContext';

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
  const [user, setUser] = useState({});
  
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const handleTab = (event, newValue) => {
    setValue(newValue);
  };

  const [auth, setAuth] = React.useState(false);
  
  const handleLougout = () => {
    setAuth(false);
  };

  const contextValue ={
    log: auth,
    updateLog: setAuth
  }
  const contextUserValue ={
    user: user,
    updateUser: setUser
  }
  return (
    <LogContext.Provider value={contextValue}>
      <UserContext.Provider value={contextUserValue}>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs value={value} onChange={handleTab} aria-label="simple tabs example" centered>
              <Tab label="Compte" icon={ <AccountCircle />} {...a11yProps(0)} />
              {auth && (
                <Tab label="Home" icon={ <HomeIcon />} {...a11yProps(1)} />
              )}
              {auth && (
                <Tab label="Profile" icon={ <PersonIcon />} {...a11yProps(2)} />
              )}
              {auth && (
                <Tab label="Team" icon={ <PeopleIcon />} {...a11yProps(3)} />
              )}
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            {auth && (
              <div>
                <Compte/>
                <button onClick={handleLougout}>Deconnexion</button>
              </div>
            )}
            {!auth && (
              <Auth/>
            )}
          </TabPanel>
          <TabPanel value={value} index={1}>
            <h1>En construction</h1>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Profile playerValue={{}}/>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TeamDisplay/>
          </TabPanel>
        </div>
      </UserContext.Provider>
    </LogContext.Provider>
  );
}