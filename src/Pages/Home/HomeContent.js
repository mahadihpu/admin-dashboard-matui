import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Chart from '../../components/Chart/Chart';
import OverviewCards from '../../components/OverviewCards/OverviewCards';
import WidgetBig from '../../components/Widgets/WidgetBig';
import WidgetSmall from '../../components/Widgets/WidgetSmall';
import './Home.css';
const HomeContent = () => {
   return (
      <Box className="home-content">
         <OverviewCards />
         <Chart />
         <Grid container>
            <Grid xs={3}>
               <Typography variant="h5">New Joining Members</Typography>
               <WidgetSmall />
            </Grid>
            <Grid xs={9}>
               <Typography variant="h5">Latest Transaction</Typography>
               <WidgetBig />
            </Grid>
         </Grid>
      </Box>
   );
};

export default HomeContent;