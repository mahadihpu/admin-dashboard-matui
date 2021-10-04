import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Home.css';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import HomeContent from './HomeContent';

const Home = () => {
   return (
      <>
         <Topbar />
         <Grid container>
            <Grid xs={2}>
               <Sidebar />
            </Grid>
            <Grid xs={10}>
               <HomeContent />
            </Grid>
         </Grid>
      </>
   );
};

export default Home;