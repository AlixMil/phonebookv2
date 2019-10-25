import React from 'react'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { IconButton } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      width: '600px'
    },
    dividerFullWidth: {
      margin: `2px 0 0 ${theme.spacing(2)}px`,
      textAlign: 'left',
    },
    dividerInset: {
      margin: `2px 0 0 ${theme.spacing(9)}px`,
    },
    listItem: {
      // padding: '20px',
    },
  }));


export default function ContactList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        
        {
          props.data.contacts.sort((a, b) => a.name > b.name ? 1 : -1).map((el, index) => {
            return (
              <>
              <Divider component='li'/>
              <li>
                <Typography
                className={classes.dividerFullWidth}
                color="textSecondary"
                display="block"
                variant="caption"
                >
                  {el.name.split('')[0].toUpperCase()}
                </Typography>
              </li>
              <ListItem className={classes.listItem} button>
                <ListItemText primary={el.name}/>
                <ListItemText label='number'primary={el.number}/>
                <IconButton onClick={() => props.dialogChange(index)}>
                  <CreateOutlinedIcon />
                </IconButton>
                <IconButton onClick={() => props.delete(index)}>
                  <DeleteForeverOutlinedIcon />
                </IconButton>
              </ListItem>
              <Divider />
              </>
            )
          })
        }
        
      </List>
    </div>
  )
}