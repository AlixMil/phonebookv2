import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItemLogic from './ListItemLogic';


  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      borderLeft: '2px solid #f5f1f0',
      borderRight: '2px solid #f5f1f0',
      borderBottom: '2px solid #f5f1f0',
    },
    dividerFullWidth: {
      margin: `2px 0 0 ${theme.spacing(2)}px`,
      textAlign: 'left',
    },
    dividerInset: {
      // margin: `2px 0 0 ${theme.spacing(9)}px`,
    },
    listItem: {
      width: '600px',
      alignItems: 'center',
      alignSelf: "center",
      alignContent: 'center',
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    expand: {
      alignSelf: 'center'
    },
    expansionDetails: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      alignSelf: 'center'
    }
  }));

export default function ContactList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {
          props.data.contacts.length ? props.data.contacts.sort((a, b) => a.name > b.name ? 1 : -1).map((el, index, arr) => {
            return (
              <ListItemLogic 
                index={index} 
                classes={classes} 
                element={el}
                delete={props.delete}
                change={props.change}
                handleUpdate={props.handleUpdate}
              />
            )
          }) : <h2>None Items</h2>
        }
      </List>
    </div>
  )
}