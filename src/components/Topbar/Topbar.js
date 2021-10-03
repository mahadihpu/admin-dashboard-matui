import { SettingsTwoTone } from "@mui/icons-material";
import { AppBar, Avatar, Badge, Button, Chip, Drawer, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import AppsIcon from '@mui/icons-material/Apps';
// import { Link } from "react-router-dom";
import './Topbar.css';





const Topbar = (props) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   // 2
   const [anchorEl2, setAnchorEl2] = React.useState(null);

   const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
   };

   const handleClose2 = () => {
      setAnchorEl2(null);
   };

   // 4
   const [anchorEl4, setAnchorEl4] = React.useState(null);

   const handleClick4 = (event) => {
      setAnchorEl4(event.currentTarget);
   };

   const handleClose4 = () => {
      setAnchorEl4(null);
   };

   // drawer
   const [showDrawer, setShowDrawer] = useState(false);

   const handleDrawerClose = () => {
      setShowDrawer(false);
   };

   // drawer top
   const [showDrawer2, setShowDrawer2] = useState(false);

   const handleDrawerClose2 = () => {
      setShowDrawer2(false);
   };

   return (
      <AppBar position="sticky" color="inherit" sx={{
         width: '100%',
      }}>
         <Toolbar>
            <IconButton
               edge="start"
               color="inherit"
               aria-label="menu"
               onClick={props.toggleSidebar}
               size="large"
               sx={{
                  display: {
                     lg: "flex",
                     xs: "none",
                  },
               }}
            >
               <AppsIcon />
            </IconButton>
            <Drawer
               anchor="top"
               open={showDrawer2}
               onClose={() => setShowDrawer2(false)}
               sx={{
                  "& .MuiDrawer-paper": {
                     padding: "15px 30px",
                  },
               }}
            >
               <Box display="flex" alignItems="center">
                  <Box
                     sx={{
                        ml: "auto",
                     }}
                  >
                     <IconButton
                        color="inherit"
                        sx={{
                           color: (theme) => theme.palette.grey.A200,
                        }}
                        onClick={handleDrawerClose2}
                     >
                        Hello
                     </IconButton>
                  </Box>
               </Box>
            </Drawer>

            <Box flexGrow={1} />
            <IconButton
               size="large"
               color="inherit"
               onClick={() => setShowDrawer(true)}
            >

            </IconButton>
            <Drawer
               anchor="right"
               open={showDrawer}
               onClose={() => setShowDrawer(false)}
               sx={{
                  "& .MuiDrawer-paper": {
                     width: {
                        xs: "100%",
                        sm: "395px",
                     },
                     padding: "30px",
                  },
               }}
            >
               <Box display="flex" alignItems="center">
                  <Typography variant="h4" fontWeight="500">
                     Shopping Cart
                  </Typography>
                  <Box
                     sx={{
                        ml: "auto",
                     }}
                  >
                     <IconButton
                        color="inherit"
                        sx={{
                           color: (theme) => theme.palette.grey.A200,
                        }}
                        onClick={handleDrawerClose}
                     >
                     </IconButton>
                  </Box>
               </Box>
            </Drawer>
            <IconButton
               size="large"
               aria-label="show 11 new notifications"
               color="inherit"
               aria-controls="msgs-menu"
               aria-haspopup="true"
               onClick={handleClick2}
            >
               <Badge variant="dot" color="warning">
                  <NotificationsIcon icon="message-square" width="20" height="20" />
               </Badge>
            </IconButton>
            <Menu
               id="msgs-menu"
               anchorEl={anchorEl2}
               keepMounted
               open={Boolean(anchorEl2)}
               onClose={handleClose2}
               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
               transformOrigin={{ horizontal: "right", vertical: "top" }}
               sx={{
                  "& .MuiMenu-paper": {
                     width: "385px",
                     right: 0,
                     top: "70px !important",
                  },
                  "& .MuiList-padding": {
                     p: "30px",
                  },
               }}
            >
               <Box
                  sx={{
                     mb: 1,
                  }}
               >
                  <Box display="flex" alignItems="center">
                     <Typography variant="h4" fontWeight="500">
                        Messages
                     </Typography>
                     <Box
                        sx={{
                           ml: 2,
                        }}
                     >
                        <Chip
                           size="small"
                           label="5 new"
                           sx={{
                              borderRadius: "6px",
                              pl: "5px",
                              pr: "5px",
                              backgroundColor: (theme) => theme.palette.secondary.main,
                              color: "#fff",
                           }}
                        ></Chip>
                     </Box>
                  </Box>
               </Box>


               <Button
                  sx={{
                     mt: 2,
                     display: "block",
                     width: "100%",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleClose2}
               >
               </Button>
            </Menu>
            <IconButton
               size="large"
               aria-label="menu"
               color="inherit"
               aria-controls="notification-menu"
               aria-haspopup="true"
               onClick={handleClick}
            >
               <Badge variant="dot" color="secondary">
                  <LanguageIcon width="20" height="20" />
               </Badge>
            </IconButton>
            <IconButton
               size="large"
               aria-label="menu"
               color="inherit"
               aria-controls="notification-menu"
               aria-haspopup="true"
               onClick={handleClick}
            >
               <Badge variant="dot" color="secondary">
                  <SettingsTwoTone width="20" height="20" />
               </Badge>
            </IconButton>
            <Menu
               id="notification-menu"
               anchorEl={anchorEl}
               keepMounted
               open={Boolean(anchorEl)}
               onClose={handleClose}
               anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
               transformOrigin={{ horizontal: "right", vertical: "top" }}
               sx={{
                  "& .MuiMenu-paper": {
                     width: "385px",
                     right: 0,
                     top: "70px !important",
                  },
                  "& .MuiList-padding": {
                     p: "30px",
                  },
               }}
            >
               <Box
                  sx={{
                     mb: 1,
                  }}
               >
                  <Box display="flex" alignItems="center">
                     <Typography variant="h4" fontWeight="500">
                        Notifications
                     </Typography>
                     <Box
                        sx={{
                           ml: 2,
                        }}
                     >
                        <Chip size="small"
                           label="5 new"
                           sx={{
                              borderRadius: "6px",
                              pl: "5px",
                              pr: "5px",
                              backgroundColor: (theme) => theme.palette.warning.main,
                              color: "#fff",
                           }}
                        ></Chip>
                     </Box>
                  </Box>
               </Box>

               <Button
                  sx={{
                     mt: 2,
                     display: "block",
                     width: "100%",
                  }}
                  variant="contained"
                  color="primary"
                  onClick={handleClose}
               >
                  {/* <Link
              to="/email"
              style={{
                color: "#fff",
                width: "100%",
                display: "block",
                textDecoration: "none",
              }}
            >
              See all notifications
            </Link> */}
               </Button>
            </Menu>
            {/* ------------------------------------------- */}
            {/* End Notifications Dropdown */}
            {/* ------------------------------------------- */}

            <Box
               sx={{
                  width: "1px",
                  backgroundColor: "rgba(0,0,0,0.1)",
                  height: "25px",
                  ml: 1,
                  mr: 1,
               }}
            ></Box>
            {/* ------------------------------------------- */}
            {/* Profile Dropdown */}
            {/* ------------------------------------------- */}
            <Button
               aria-label="menu"
               color="inherit"
               aria-controls="profile-menu"
               aria-haspopup="true"
               onClick={handleClick4}
            >
               <Box display="flex" alignItems="center">
                  <Avatar
                     src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                     sx={{
                        width: "30px",
                        height: "30px",
                     }}
                  />
                  <Box
                     sx={{
                        display: {
                           xs: "none",
                           sm: "flex",
                        },
                        alignItems: "center",
                     }}
                  >
                     <Typography
                        color="textSecondary"
                        variant="h5"
                        fontWeight="400"
                        sx={{ ml: 1 }}
                     >
                        Hi,
                     </Typography>
                     <Typography
                        variant="h5"
                        fontWeight="700"
                        sx={{
                           ml: 1,
                        }}
                     >
                        Julia
                     </Typography>
                     {/* <FeatherIcon
                        icon="chevron-down"
                        width="20"
                        height="20"
                     ></FeatherIcon> */}
                  </Box>
               </Box>
            </Button>
            <Menu
               id="profile-menu"
               anchorEl={anchorEl4}
               keepMounted
               open={Boolean(anchorEl4)}
               onClose={handleClose4}
               sx={{
                  "& .MuiMenu-paper": {
                     width: "385px",
                     right: 0,
                     top: "70px !important",
                  },
                  "& .MuiList-padding": {
                     p: "30px",
                  },
               }}
            >
               <Box
                  sx={{
                     mb: 1,
                  }}
               >
                  <Box display="flex" alignItems="center">
                     <Typography variant="h4" fontWeight="500">
                        User Profile
                     </Typography>
                  </Box>
               </Box>

               {/* <Link
            style={{
              textDecoration: "none",
            }}
            to="/auth/login"
          >
            <Button
              sx={{
                mt: 2,
                display: "block",
                width: "100%",
              }}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
          </Link> */}
            </Menu>
         </Toolbar>
      </AppBar>
   );
};

export default Topbar;
