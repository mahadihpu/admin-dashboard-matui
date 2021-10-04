import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Chip } from '@mui/material';
import './Widget.css';
import { Box } from '@mui/system';

function createData(name, date, amount, status) {
   return { name, date, amount, status };
}

const rows = [
   createData('Susan Carol', '2 Jun 2021', 122, 'approved'),
   createData('Susan Carol', '2 Jun 2021', 122, 'pending'),
   createData('Susan Carol', '2 Jun 2021', 122, 'declined'),
   createData('Susan Carol', '2 Jun 2021', 122, 'approved'),
   createData('Susan Carol', '2 Jun 2021', 122, 'approved'),
];


const WidgetBig = () => {
   return (
      <TableContainer component={Paper} className="widget-big">
         <Table aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell>Customer</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Status</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow
                     key={row.name}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        <Box className="user">
                           <Avatar alt="user" className="avatar" src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />{row.name}
                        </Box>
                     </TableCell>
                     <TableCell>{row.date}</TableCell>
                     <TableCell>${row.amount}</TableCell>
                     <TableCell><Chip label={row.status} color={row.status === 'approved' ? 'success' :
                        row.status === 'pending' ? 'warning' :
                           row.status === 'declined' ? 'error' : 'primary'
                     } /></TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default WidgetBig;