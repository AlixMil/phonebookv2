import React, { useState } from 'react';
import SideList from "./SideList";
import Search from './Search'
import Options from './Options';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Tooltip from '@material-ui/core/Tooltip'



const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // justifyContent: "space-between",
    // width: '100%',
    // flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Header(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    isOpenSide: false,
    isSearched: false,
    isOpenOptions: false
  })

  const toggleDrawer = () => {
    setState(state => { 
      return {
        isOpenSide: !state.isOpenSide,
        isSearched: state.isSearched,
        isOpenOptions: state.isOpenOptions
      } 
    })
  }

  const toggleOptions = () => {
    setState(state => {
      return {
        isOpenSide: state.isOpenSide,
        isSearched: state.isSearched,
        isOpenOptions: !state.isOpenOptions
      }
    })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Tooltip title="Menu">
            <IconButton onClick={() => toggleDrawer()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              <Drawer variant="temporary" open={state.isOpenSide}>
                <SideList toggleOptions={toggleOptions} toggleDrawer={toggleDrawer}/> 
              </Drawer>
            </IconButton>
          </Tooltip>
          <Typography variant="h4" className={classes.title}>
            Phone Book
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
      <Options state={state} toggleOptions={toggleOptions} />
    </div>
  );
}