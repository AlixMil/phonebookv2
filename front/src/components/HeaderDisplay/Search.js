import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles, fade } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip'


const useStyles = makeStyles(theme => ({
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
}))

export default function Search(props) {

  const classes = useStyles()

  return (
          <Tooltip title="Search">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                // onKeyUp={(e) => {
                //   if (e.keyCode === 13 && e.target.value.trim()) props.search(e.target.value.trim())
                //   if (e.target.value) setState(state => { return { isOpen: state.isOpen, isSearched: true }})
                //   else setState(state => { return { isOpen: state.isOpen, isSearched: false }})
                // }}
                placeholder='search'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
              {/* {state.isSearched ? <IconButton onClick={setState(state => { return { isOpen: state.isOpen, isSearched: false } })}><CloseIcon /></IconButton> : null} */}
            </div>
          </Tooltip>
  )
}