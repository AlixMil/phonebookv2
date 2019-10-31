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
import CreateIcon from '@material-ui/icons/Create';
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core'
import Fab from '@material-ui/core/Fab'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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
    name: '',
    number: '',
    updDate: '',
    isExpanded: false
  })

  const classes = useStyles()

  const handleChange = ({ name, value }) => {
    name === 'name' ? setState(state => {
      return {
      name: value,
      number: state.number,
      updDate: new Date(),
      isExpanded: state.isExpanded }
    }) : setState(state => {
      return {
        name: state.name,
        number: value,
        updDate: new Date(),
        isExpanded: state.isExpanded
      }
    })
  }

  const handleExpand = () => {
    setState(state => {
      return {
        name: state.name,
        number: state.number,
        updDate: state.updDate,
        isExpanded: !state.isExpanded
      }
    })
  }

  const buttonRender = () => {
    if (state.name || state.number) {
      return (
      <Tooltip title="Change contact">
        <Fab 
          onClick={() => {
            props.change(props.index, state.name, state.number)
            setState(state => ({ name: '', number: '', updDate: new Date(), isExpanded: !state.isExpanded}))
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
          onClick={() => {
            props.delete(props.index)
            setState(state => ({ name: '', number: '', updDate: new Date(), isExpanded: !state.isExpanded}))
          }}
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
              {/* <DividerLi head={props.element}/>
             */}
             
              <ListItem className={props.classes.listItem} button>
                <ExpansionPanel expanded={state.isExpanded} className={props.classes.listItem}>
                  <ExpansionPanelSummary onClick={() => handleExpand()}>
                      <ListItemText primary={props.element.name}/>
                      <ListItemText label='number'primary={props.element.number}/>
                        {
                          state.isExpanded ? <Tooltip title="Close contact"><ExpandLessIcon className={props.classes.expand} /></Tooltip> : <Tooltip title="Open contact"><ExpandMoreIcon className={props.classes.expand}/></Tooltip>
                        }
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails className={props.classes.expansionDetails}>
                    <form>
                      <Divider />
                      <TextField 
                        onChange={(e) => handleChange(e.target)}
                        value={state.name}
                        label='name'
                        name="name"
                      />
                      <TextField 
                        onChange={(e) => handleChange(e.target)}
                        label='number'
                        value={state.number}
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