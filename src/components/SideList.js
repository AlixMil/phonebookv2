import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';

export default function SideList(props) {
  const styles = makeStyles({
    list: {
      width: 250
    },
    sideList: {
      width: 'auto'
    }
  })

  return (<div
      className={styles.list}
      role="presentation"
      onClick={() => props.toggleDrawer(false)}
      onKeyDown={() => props.toggleDrawer(false)}
    >
      <List>
        {['Main Page', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <HomeOutlinedIcon />  : <SettingsApplicationsOutlinedIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      <ListItem button>
            <ListItemIcon><ExploreOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'About AlixMil'}/>
          </ListItem>
      </List>
    </div>)
}