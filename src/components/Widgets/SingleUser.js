import { Avatar, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './Widget.css';


const SingleUser = ({ name, title, image }) => {
   return (
      <Box className="single-user">
         <Avatar alt="Remy Sharp" src={image} />
         <Box>
            <Typography align="center">{name}</Typography>
            <Typography align="center" variant="caption">{title}</Typography>
         </Box>
         <Button
            loadingPosition="start"
            startIcon={<VisibilityIcon />}
            variant="contained"
            color="inherit"
         >
            Show
         </Button>
      </Box>
   );
};

export default SingleUser;