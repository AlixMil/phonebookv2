import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button'

export default function Import(props) {
  // const [state, setState] = useState({
  //   json: undefined
  // })

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
      transform: 'translate(-50%, -50%)',
      outline: '0'
    },
  }));

  const classes = useStyles()

  const handleLoad = (files) => {
    const file = files[0]
    const reader = new FileReader()

    reader.readAsText(file)
    // setState({isLoad: true})
    // console.log(file.name)
    reader.onload = () => {
      console.log(reader.result)
      // console.log(JSON.parse(reader.result))
      // setState(({ file: reader.result }))
      props.import(JSON.parse(reader.result))
      props.toggleImport()
    }

    reader.onerror = () => {
      console.log('error')
    }
  }

  return (
    <Modal 
      open={props.state.isOpenOptions}
      onClose={() => props.toggleImport()}
    >
      <div className={classes.paper}>
          <h2 id="simple-modal-title">Import | Export</h2>
          <p id="simple-modal-description">
            <input type='file' onChange={(e) => handleLoad(e.target.files)} name='import' />
<hr />
            {/* <Button variant='outlined' color='primary' onClick={() => props.import(state.json)}>Import contacts</Button> */}
          </p> 
        </div>

    </Modal>
  )
}