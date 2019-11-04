import React from 'react'
import { makeStyles } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'static',
    // right: '0',
    bottom: '0',

  }
}))

export default function SwitchSort(props) {
  const classes = useStyles()

  return (
      <FormControlLabel className={classes.root}
        control={
          <Switch checked={props.isSort} onChange={() => props.changeSort(!props.isSort)} value="sort" />
        }
        label="On|Off sorting contacts"
      />
  );
}