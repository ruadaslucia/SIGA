import * as React from 'react';
import './sidebar.scss';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import ChairAltIcon from '@mui/icons-material/ChairAlt';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const menuItemStudents = { text: 'ALUMNOS', icon: <PeopleIcon /> };
const menuItemClasses = { text: 'CLASES', icon: <ChairAltIcon /> };
const menuItemProfile = { text: 'PERFIL', icon: <AccountCircleIcon /> };

const menuItems = [menuItemStudents, menuItemClasses, menuItemProfile];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar className="toolbarContainer">
          <div className="content">
            <Avatar className="avatar">U</Avatar>
            <span className="content__name">USUARIO</span>
          </div>
          <div className="year">
            <p>CURSO ESCOLAR: 22/23</p>
          </div>
        </Toolbar>

        <Divider />

        <List className="sidebarList">
          {menuItems.map((menuItem) => (
            <ListItem key={menuItem.text} className="listItem" disablePadding>
              {menuItem.icon}
              <ListItemButton className="sidebarList__listItemButton">
                <ListItemText primary={menuItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Button
            className="sendButton"
            variant="contained"
            endIcon={<SendIcon />}
          >
            AÑADIR CLASE
          </Button>
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
