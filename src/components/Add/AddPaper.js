import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  wrapper: {
    margin: '14px 14px 0px 14px', 
    paddingBottom: '20px',
    display: 'block',
    height: '100%',
    width: '600px',
    borderLeft: '2px solid #f5f1f0',
    borderRight: '2px solid #f5f1f0',
    borderTop: '2px solid #f5f1f0',
    backgroundColor: 'white',
    transition: '.4s all',
    cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#f5f1f0',
      }, 
    // padding: '8px'
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
      if (!isNaN(value)) {
        setState(state => ({ name: state.name, number: value }))
      }
    }
  }

  return (
    <Paper className={classes.root}>
      <div className={classes.wrapper}>
        <Typography >
          <h2>Add Contact</h2>
          <TextField 
            label='name'
            name='name'
            value={state.name}
            onKeyDown={(e) => e.keyCode === 13 ? handleChange(e.target) : false}
            onChange={(e) => handleChange(e.target)}
          />
          <TextField 
            name='number'
            label='number'
            value={state.number}
            onKeyDown={(e) => e.keyCode === 13 ? handleChange(e.target) : false}
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
      </div>
    </Paper>
  )
}