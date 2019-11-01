import React from 'react'
import { makeStyles } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export default function DividerLi(props) {
  const useStyles = makeStyles(theme => ({
    dividerFullWidth: {
      margin: `2px 0 0 ${theme.spacing(2)}px`,
      textAlign: 'left',
    },
    dividerInset: {
      margin: `2px 0 0 ${theme.spacing(9)}px`,
    },
  }));

  const classes = useStyles()
  
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
        {props.head.name.split('')[0].toUpperCase()}
      </Typography>
      </li>
    </>
  )
}