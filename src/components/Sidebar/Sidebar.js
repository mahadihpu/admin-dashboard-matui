import { NotificationAdd } from "@mui/icons-material";
import { Collapse, darkScrollbar, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import menuItems from "../../data";


const Sidebar = (props) => {
   const [open, setOpen] = React.useState(true);

   const handleClick = (index, menuTitle, childMenuTitle) => {
      if (open === index) {
         setOpen((prevopen) => !prevopen);
      } else {
         setOpen(index);
      }
   };

   const SidebarContent = (
      <darkScrollbar style={{ height: "calc(100vh - 5px)" }}>
         <Box sx={{ p: 2 }}>
            {/* <LogoIcon /> */}
            <Box>
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
                                    handleClick(index, item.title, "");
                                    // state.setMenuClicked(item.title);
                                 }}
                              >
                                 <ListItemText>{item.title}</ListItemText>
                              </ListItem>
                              <Collapse in={index === open} timeout="auto" unmountOnExit>
                                 <List component="li" disablePadding>
                                    {item.children.map((child) => {
                                       return (
                                          <ListItem
                                             key={child.title}
                                             button
                                             // component={NavLink}
                                             // to={child.href}
                                             onClick={() => {
                                                props.onSidebarClose();
                                             }}
                                          >
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
                                 onClick={() => {
                                    handleClick(index, item.title, "");
                                    // state.setMenuClicked(item.title);
                                 }}
                                 button
                              >
                                 <ListItemIcon

                                 >
                                    <NotificationAdd />
                                 </ListItemIcon>
                                 <ListItemText
                                    onClick={() => {
                                       props.onSidebarClose();
                                    }}
                                 >
                                    {item.title}
                                 </ListItemText>
                              </ListItem>
                           </List>
                        );
                     }
                  })}
               </List>
            </Box>
         </Box>
      </darkScrollbar>
   );
   //   if (lgUp) {
   //     return (
   //       <Drawer
   //         anchor="left"
   //         open={props.isSidebarOpen}
   //         variant="persistent"
   //         PaperProps={{
   //           sx: {
   //             width: SidebarWidth,
   //           },
   //         }}
   //       >
   //         {SidebarContent}
   //       </Drawer>
   //     );
   //   }
   return (
      <Drawer
         anchor="left"
         open={props.isMobileSidebarOpen}
         onClose={props.onSidebarClose}
         variant="temporary"
      >
         {SidebarContent}
      </Drawer>
   );
};

export { Sidebar };
