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
  });

  return (<div onClick={() => props.toggleDrawer()} className={styles.list}>
    <List>
      <ListItem onClick={() => props.toggleDrawer()} button>
        <ListItemIcon>Options
          <HomeOutlinedIcon /> 
        </ListItemIcon>
        <ListItemText primary="Main Page" />
      </ListItem>
      <ListItem onClick={() => {
          props.toggleImport();
          props.toggleDrawer();
        }} button>
        <ListItemIcon>
          <SettingsApplicationsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Import" />
      </ListItem>
      <ListItem onClick={() => {
          props.export();
          props.toggleDrawer();
        }} button>
        <ListItemIcon>
          <SettingsApplicationsOutlinedIcon />
        </ListItemIcon>
        <ListItemText primary="Export" />
      </ListItem>
      
    </List>
    <Divider />
    <List>
      <ListItem button>
        <ListItemIcon><ExploreOutlinedIcon /></ListItemIcon>
        <ListItemText primary={'About AlixMil'} />
      </ListItem>
    </List>
  </div>);
}
