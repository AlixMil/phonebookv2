import React from 'react'
import { makeStyles } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'static',
    bottom: '0',
    margin: '16px',
    opacity: .4,
    transition: '0.4s',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1
    }
  }
}))

export default function SwitchSort(props) {
  const classes = useStyles()

  return (
        <FormControlLabel className={classes.root}
          control={
          <Switch disabled={props.isShow <= 1} checked={props.isSort} onChange={() => props.changeSort(!props.isSort)} value="sort" />
          }
          label="On | Off sorting contacts"
        />
  );
}