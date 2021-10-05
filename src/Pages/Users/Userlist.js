import { Delete } from '@mui/icons-material';
import { Avatar, Button } from '@mui/material';
import { Box } from '@mui/system';
import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { tableRows } from '../../userData';
import './User.css';


export default function Userlist() {
   const [data, setData] = React.useState(tableRows);
   const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id))
   }
   const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      {
         field: 'user', headerName: 'user', width: 200, renderCell: (params) => {
            return (
               <Box className="userinfo">
                  <Avatar className="table-avatar" alt="" src={params.row.avatar} />
                  {params.row.username}
               </Box>
            )
         }
      },
      { field: 'email', headerName: 'email', width: 230 },
      {
         field: 'status',
         headerName: 'status',
         width: 120,
      },
      {
         field: 'transaction',
         headerName: 'transaction',
         width: 160,
      },
      {
         field: 'action', headerName: 'Action', width: 200, renderCell: (params) => {
            return (
               <Box className="userinfo">
                  <Link to={"/user/" + params.row.id} className="link">
                     <Button variant="contained" color="primary">Edit</Button>
                  </Link>
                  <Delete className="userlist-delete" onClick={() => handleDelete(params.row.id)} />
               </Box>
            )
         }
      },
   ];
   return (
      <Box style={{ height: '80%', width: '100%' }}>
         <DataGrid
            rows={data}
            columns={columns}
            disableSelectionOnClick
            pageSize={8}
            checkboxSelection
         />
      </Box>
   );
}