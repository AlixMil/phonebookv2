import React, { useState, useRef } from 'react'
import DividerLi from './DividerLi'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import { IconButton } from '@material-ui/core'
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    width: '50px',
    height: '50px'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ListItemLogic(props) {
  const [state, setState] = useState({
    local: {
      name: '',
      number: '',
      updDate: ''
    },
    isExpanded: false
  })

  const classes = useStyles()

  const fieldOne = useRef(), fieldTwo = useRef()

  const handleDate = () => {
    return new Date()
  }

  const handleChange = ({ name, value }) => {
    name === 'name' ? setState(state => {
      return {
      local: {
        name: value,
        number: state.local.number,
        updDate: handleDate()
      },
      isExpanded: state.isExpanded }
    }) : setState(state => {
      return {
        local: {
          name: state.local.name,
          number: value,
          updDate: handleDate()
        },
        isExpanded: state.isExpanded
      }
    })
  }

  const handleExpand = () => {
    setState(state => {
      return {
        local: state.local,
        isExpanded: !state.isExpanded
      }
    })
  }

  const handleReset = () => {
    fieldOne.current.value = ''
    fieldTwo.current.value = ''
  }

  const buttonRender = () => {
    if (state.local.name || state.local.number) {
      return (
      <Tooltip title="Change contact">
        <Fab 
          onClick={() => {
            handleReset()
            props.change(props.index, state.local.name, state.local.number)
          }}
          color="primary"
          className={classes.fab}
          >
          <CreateIcon />
        </Fab>
      </Tooltip>
      )}
    else {
      return (
      <Tooltip title="Delete">
        <Fab 
          onClick={() => props.delete(props.index)}
          color="secondary"
          className={classes.fab}
          >
          <DeleteForeverOutlinedIcon />
        </Fab>
      </Tooltip>
      )
    }
  }

  return (
              <>
              <DividerLi head={props.element}/>
              
              <ListItem className={props.classes.listItem} button>
                <ExpansionPanel expanded={state.isExpanded} className={props.classes.listItem}>
                  <ExpansionPanelSummary onClick={() => handleExpand()}>
                      <ListItemText primary={props.element.name}/>
                      <ListItemText label='number'primary={props.element.number}/>
                      <Tooltip title="Open contact">
                      <ExpandMoreIcon className={props.classes.expand}/>

                      </Tooltip>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={props.classes.expansionDetails}>
                    <form>
                      <Divider />
                      <TextField 
                        onChange={(e) => handleChange(e.target)}
                        label='name'
                        name="name"
                      />
                      <TextField 
                        onChange={(e) => handleChange(e.target)}
                        label='number'
                        name="number"
                      />
                    </form>
                    {
                      buttonRender()
                    }
                    
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </ListItem>
              </>
  )
}