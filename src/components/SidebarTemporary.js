import { NotificationAdd } from '@mui/icons-material';
import { Collapse, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React from 'react';
import menuItems from '../data';

const SidebarTemporary = () => {
   return (
      <List>
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
               // {/********If Sub Menu**********/}
            } else if (item.children) {
               return (
                  <React.Fragment key={item.title}>
                     <ListItem
                        button
                        component="li"
                        onClick={() => {
                        }}
                     >
                        <ListItemText>{item.title}</ListItemText>
                     </ListItem>
                     <Collapse timeout="auto" unmountOnExit>
                        <List component="li" disablePadding>
                           {item.children.map((child) => {
                              return (
                                 <ListItem
                                    key={child.title}
                                    button
                                 // component={NavLink}
                                 // to={child.href}
                                 >
                                    <ListItemIcon

                                    >
                                       {child.icon}
                                    </ListItemIcon>
                                    <ListItemText>{child.title}</ListItemText>
                                 </ListItem>
                              );
                           })}
                        </List>
                     </Collapse>
                  </React.Fragment>
               );
               // {/********If Sub No Menu**********/}
            } else {
               return (
                  <List component="li" disablePadding key={item.title}>
                     <ListItem
                        button
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
               );
            }
         })}
      </List>
   );
};

export default SidebarTemporary;