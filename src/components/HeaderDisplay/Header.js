import React, { useState } from 'react';
import SideList from "./SideList";
import Search from './Search'
import Import from './Import';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
      // display: 'flex',
      // justifyContent: "center",
  },
  toolbar: {
    display: 'flex',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    alignSelf: 'center',
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

  const toggleImport = () => {
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
        <Toolbar className={classes.toolbar}>
            <IconButton onClick={() => toggleDrawer()} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              <Drawer variant="temporary" open={state.isOpenSide}>
                <SideList export={props.export} toggleImport={toggleImport} toggleDrawer={toggleDrawer}/> 
              </Drawer>
            </IconButton>
            <h2>Phone Book</h2>
          <Search search={props.handleSearch} />
        </Toolbar>
      </AppBar>
      <Import import={props.import} export={props.export} state={state} toggleImport={toggleImport} />
    </div>
  );
}