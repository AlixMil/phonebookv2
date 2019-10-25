import React, { useState, useRef } from 'react';
import SideList from './SideList';
import { makeStyles, fade } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close';
import InputBase from '@material-ui/core/InputBase';



const useStyles = makeStyles(theme => ({
  root: {
    // display: 'flex',
    // justifyContent: "space-between",
    // width: '100%',
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 140,
    },
  }
}));


export default function Header(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    isOpen: false,
    isSearched: false
  })

  const toggleDrawer = open => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }
    setState({ isOpen: open })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => toggleDrawer(true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Drawer open={state.isOpen} onClose={() => toggleDrawer(false)}>
              <SideList toggleDrawer={toggleDrawer}/>
            </Drawer>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Phone Book
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onKeyUp={(e) => {
                if (e.keyCode === 13 && e.target.value.trim()) props.search(e.target.value.trim())
                if (e.target.value) setState(state => { return { isOpen: state.isOpen, isSearched: true }})
                else setState(state => { return { isOpen: state.isOpen, isSearched: false }})
              }}
              placeholder='search'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
            />
            {state.isSearched ? <IconButton onClick={setState(state => { return { isOpen: state.isOpen, isSearched: false } })}><CloseIcon /></IconButton> : null}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}