import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'

export default function Options(props) {
  const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      margin: 'auto',
      left: '50%',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    },
  }));

  const classes = useStyles()

  return (
    <Modal 
      open={props.state.isOpenOptions}
      onClose={() => props.toggleOptions()}
    >
      <div className={classes.paper}>
          <h2 id="simple-modal-title">Import | Export</h2>
          <p id="simple-modal-description">
            <Button variant='outlined' color='primary' onClick={props.export}>Export contacts</Button>
            <Button variant='outlined' color='primary' onClick={props.import}>Import contacts</Button>
          </p> 
        </div>

    </Modal>
  )
}