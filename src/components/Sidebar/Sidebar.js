import { Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import menuItems from '../../data';
import './Sidebar.css';
const Sidebar = () => {
   return (
      <List className="sidebar">
         {menuItems.map((item, index) => {
            //{/********SubHeader**********/}
            if (item.subheader) {
               return (
                  <li key={item.subheader}>
                     <Typography
                        variant="subtitle2"
                        fontWeight="500"
                        sx={{ my: 2, mt: 4, opacity: "0.4" }}
                     >
                        {item.subheader}
                     </Typography>
                  </li>
               );
            } else {
               return (
                  <Link to={item.href} className="sidebar-link">
                     <List component="li" disablePadding key={item.title}>
                        <ListItem
                           button
                           to={item.href}
                        >
                           <ListItemIcon>
                              {item.icon}
                           </ListItemIcon>
                           <ListItemText
                           >
                              {item.title}
                           </ListItemText>
                        </ListItem>
                     </List>
                  </Link>
               );
            }
         })}
      </List>
   );
};

export default Sidebar;