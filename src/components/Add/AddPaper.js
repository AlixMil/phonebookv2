import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  fab: {
    margin: theme.spacing(1),
    // witdh: '30px',
    // height: '30px'
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
      
        {/* <Typography variant="h4" component="h3"> */}
          {/* Add Contact */}
        {/* </Typography> */}
        <Typography >
          <TextField 
            variant="filled"
            autoComplete
            label='name'
            name='name'
            value={state.name}
            onChange={(e) => handleChange(e.target)}
          />
          <TextField 
            autoComplete
            variant="filled"
            name='number'
            label='number'
            value={state.number}
            onChange={(e) => handleChange(e.target)}
          />
          <Tooltip title="Add Contact">
          <Button className={classes.fab} onClick={() => {
            props.handleAdd(state.name, state.number)
            setState({name: '', number: ''})
          }} color='primary'>
            <AddIcon />
          </Button>
          </Tooltip>
        </Typography>
        
    </Paper>
  )
}