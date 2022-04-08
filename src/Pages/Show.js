import { Paper, TableContainer, TableHead, Typography, TableRow, TableCell, Table, TableBody } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../Components/Button";
import { Link } from 'react-router-dom';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';
import swal from 'sweetalert2';


function Show() {

  const [rows, setRows] = useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 140 },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
      editable: true,
    },
    {
      field: 'password',
      headerName: 'Password',
      width: 250,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 360,
      editable: true,
    },
  ]

  /*   useEffect(() => {
      const interval = setInterval(() => {
        axios.get('http://localhost:5000/users/read').then(response => {
          console.log(response.data);
          console.log(response.data)
          setRows(response.data);
        },2000);
       
        return () => clearInterval(interval);
    }, []);
   */


  function deleteAll() {
    axios.get('http://localhost:5000/users/deleteall').then(response => {
      console.log(response.data);
      swal.fire({
        icon: 'success',
        title: 'All user deleted',
        text: 'All database has been deleted'
      })
    })
  }

  function deleteid() {
    axios.post('http://localhost:5000/users/deleteid',)
  }

  function handleRowSelection(e){
    let selectedRow = rows.filter((r) => r.id === e.data.id);
    console.log(selectedRow);
  }

  useEffect(() => {
    axios.get('http://localhost:5000/users/read').then(resp => {
      setRows(resp.data);
    })
  }, [rows])


  return (
    <div className="main">
      <Typography>All Users Cadastrated</Typography>
      <p></p>
      <div style={{ height: 300, width: '100%', backgroundColor: '' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={console.log()}
          >
        </DataGrid>
      </div>
      <p></p>
      <div className="buttons">
        <ButtonComponent text="Delete All" function={deleteAll}></ButtonComponent>
        <ButtonComponent text="Delete Selected" function={deleteid}></ButtonComponent>
        <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
      </div>

    </div>
  )
}

export default Show;