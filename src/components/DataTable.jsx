import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'description', headerName: 'Description', width: 250 },
  { field: 'price', headerName: 'Price', width: 70 },
  { field: 'category', headerName: 'Category', width: 130 },
  { field: 'sold', headerName: 'Sold', width: 130 },
  { field: 'image', headerName: 'Image', width: 100 , renderCell: (params) => <img width={50} height={50} src={params.value} />,},
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
    const baseURL = "http://localhost:3000/"

    const getAllTransactionData= async()=>{
        await axios.get(baseURL).then((response) => {    
            setData(response?.data)
        })
    } 

    const [data, setData] = React.useState([])

    React.useEffect( ()=>{
        getAllTransactionData()
    },[])
  return (
    <Paper sx={{ height: 400, width: '90%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}