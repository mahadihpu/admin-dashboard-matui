import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './OverviewCards.css';
const OverviewCards = () => {
   return (
      <Grid container className="overview-cards">
         <Grid xs={4}>
            <Box className="overview-card">
               <Typography>Revenue</Typography>
               <br />
               <Box className="card-center">
                  <Typography variant="h4">$2,334.45</Typography><Typography>-11.4<ArrowDownwardIcon className="arrow-downward" /></Typography>
               </Box>
               <br />
               <Typography>Compared to last month</Typography>
            </Box>
         </Grid>
         <Grid xs={4}>
            <Box className="overview-card">
               <Typography>Sales</Typography>
               <br />
               <Box className="card-center">
                  <Typography variant="h4">$4,334.45</Typography><Typography>-1.4<ArrowDownwardIcon className="arrow-downward" /></Typography>
               </Box>
               <br />
               <Typography>Compared to last month</Typography>
            </Box>
         </Grid>
         <Grid xs={4}>
            <Box className="overview-card">
               <Typography>Cost</Typography>
               <br />
               <Box className="card-center">
                  <Typography variant="h4">$2,234.45</Typography><Typography>+2.4<ArrowUpwardIcon className="arrow-upward" /></Typography>
               </Box>
               <br />
               <Typography>Compared to last month</Typography>
            </Box>
         </Grid>
      </Grid>
   );
};

export default OverviewCards;