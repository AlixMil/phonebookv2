import React from 'react'
import { makeStyles } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      // maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    list: {
      width: '600px'
    },
    dividerFullWidth: {
      margin: `5px 0 0 ${theme.spacing(2)}px`,
    },
    dividerInset: {
      margin: `5px 0 0 ${theme.spacing(9)}px`,
    },
  }));


export default function ContactList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List className={classes.list}>
        <Divider component='li'/>
        <li>
          <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
          >
            Divider
          </Typography>
        </li>
        <ListItem button>
          <ListItemText primary='Hllo'/>
        </ListItem>
      </List>
    </div>
  )
}