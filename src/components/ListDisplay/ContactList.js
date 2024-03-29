import React from 'react'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItemLogic from './ListItemLogic';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'; 

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      width: '600px',
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
    },
    headNull: {
      margin: '4px',
      cursor: 'pointer'
    },
    smile: {
      cursor: 'pointer',
      transition: '.3s',
      '&:hover': {
        color: 'black'
      }
    },
    smileWrapper: {
      '&:hover': {
        // backgroundColor: 'green'
      }
    }
  }));

export default function ContactList(props) {
  const classes = useStyles();

  const renderLogic = () => {
    if (!props.data.search.length) {
      if (props.data.contacts.length) {
        return props.data.contacts.map((el, index, arr) => {
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
        })
      } else {
        return (
          <div className={classes.smileWrapper}>
                <h3 className={classes.headNull}>None Items</h3>
                <SentimentVeryDissatisfiedIcon color='disabled' fontSize='large' className={classes.smile} />
          </div>
        )
      }
    }
  }

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        {
          renderLogic()
        }
      </List>
    </div>
  )
}