import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css';
import data from '../../userData';


const Chart = () => {
   return (
      <Box className="chart">
         <Typography variant="h6">Sales Analytics</Typography>
         <br />
         <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart
               data={data}
               margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis />
               <Tooltip />
               <Legend />
               <Line type="monotone" dataKey="Active user" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
         </ResponsiveContainer>
      </Box>

   );
};

export default Chart;