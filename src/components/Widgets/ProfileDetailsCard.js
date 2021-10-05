import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ProfileDetailsCard = () => {
   return (
      <Card sx={{ maxWidth: 345, marginTop: 10 }} variant="outlined">
         <CardHeader
            avatar={
               <Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" aria-label="picture" sx={{ width: 56, height: 56 }} />
            }
            title="Eric Albright"
            subheader="Software Engineer"
         />
         <CardContent>
            <Typography variant="subtitle2" color="text.secondary">Account Details</Typography>
            <Box className="account-details">
               <PersonIcon className="account-details-icon" /><Typography>eric3233</Typography>
            </Box>
            <Box className="account-details">
               <CalendarTodayIcon className="account-details-icon" /><Typography>12.12.21</Typography>
            </Box>
            <br />
            <Typography variant="subtitle2" color="text.secondary">Account Details</Typography>
            <Box className="account-details">
               <PhoneIphoneIcon className="account-details-icon" /><Typography>+880-1867884361</Typography>
            </Box>
            <Box className="account-details">
               <MailOutlineIcon className="account-details-icon" /><Typography>eric3233@gmail.com</Typography>
            </Box>
            <Box className="account-details">
               <LocationOnIcon className="account-details-icon" /><Typography>New york | USA</Typography>
            </Box>
         </CardContent>
      </Card>
   );
};

export default ProfileDetailsCard;