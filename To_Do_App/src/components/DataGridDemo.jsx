import { DataGrid } from '@mui/x-data-grid';
import * as React from 'react';
import Box from '@mui/material/Box';

import { useEffect } from 'react';

const columns= [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'dueDate',
    headerName: 'Due Date',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const DataGridDemo=()=> {

  const [rows,setRows] = React.useState([])


  const USER_DATA_API = "http://localhost:8080/fetch-details/"+localStorage.getItem("userId")
  console.log(USER_DATA_API);
 

  useEffect(() => {
    const returnedPromise = fetch(USER_DATA_API)
    returnedPromise.then(res => res.json()).then(data => {
      setRows(data)
    })
  },[])


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}


export default DataGridDemo