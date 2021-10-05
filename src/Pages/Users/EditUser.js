import { Button, Card, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import ProfileDetailsCard from '../../components/Widgets/ProfileDetailsCard';
import ProfileEditCard from '../../components/Widgets/ProfileEditCard';

const EditUser = () => {
   return (
      <>
         <Topbar />
         <Grid container>
            <Grid xs={2}>
               <Sidebar />
            </Grid>
            <Grid xs={10} className="edituser-container">
               <Box className="edit-header">
                  <Typography variant="h4">Edit User</Typography>
                  <Button variant="contained" color="primary">Create</Button>
               </Box>
               <Grid container>
                  <Grid xs={3}>
                     <ProfileDetailsCard />
                  </Grid>
                  <Grid xs={8}>
                     <ProfileEditCard />
                  </Grid>
               </Grid>
            </Grid>
         </Grid>
      </>
   );
};

export default EditUser;