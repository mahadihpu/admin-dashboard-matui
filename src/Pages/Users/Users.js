import { Grid } from '@mui/material';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import Userlist from './Userlist';

const Users = () => {
   return (
      <>
         <Topbar />
         <Grid container>
            <Grid xs={2}>
               <Sidebar />
            </Grid>
            <Grid xs={10}>
               <Userlist />
            </Grid>
         </Grid>
      </>
   );
};

export default Users;