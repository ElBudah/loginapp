import { Paper, TableContainer, TableHead, Typography, TableRow, TableCell, Table, TableBody} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ButtonComponent from "../Components/Button";
import { Link } from 'react-router-dom';
import axios from "axios";
import { DataGrid } from '@material-ui/data-grid';


function Show() {

     const [rows, setRows] = useState([]); 

    /* const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
      ]; */

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

    useEffect(() => {
        axios.get('http://localhost:5000/users/read').then(response => {
            console.log(response.data);
            console.log(response.data)
            setRows(response.data);
        })
    }, [])

    return (
        <div className="main">
            <Typography>See All Users</Typography>
            <p></p>
            <div style={{ height: 400, width: '100%', backgroundColor: 'lightgray',}}>
                <DataGrid 

                rows={rows} 
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick>
                </DataGrid>
            </div>
            <p></p>
            <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Show;