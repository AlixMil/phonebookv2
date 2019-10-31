import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  fab: {
    margin: theme.spacing(1),
  },
}));

export default function AddPaper(props) {

  const [state, setState] = useState({
    name: '',
    number: ''
  })
  
  const classes = useStyles()

  const handleChange = ({name, value}) => {
    if (name === 'name') {
      setState(state => ({ name: value, number: state.number }))
    } else {
      setState(state => ({ name: state.name, number: value }))
    }
  }


  return (
    <Paper className={classes.root}>
      <Typography variant="h5" component="h3">
        Add Contact
      </Typography>
      <Typography >
        <TextField 
          label='name'
          name='name'
          onChange={(e) => handleChange(e.target)}
        />
        <TextField 
          name='number'
          label='number'
          onChange={(e) => handleChange(e.target)}
        />
        <Tooltip title="Add Contact">
        <Fab onClick={() => props.handleAdd(state.name, state.number)} color='primary'>
          <AddIcon />
        </Fab>
        </Tooltip>
      </Typography>
    </Paper>
  )
}