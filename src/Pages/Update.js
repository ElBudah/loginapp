import { TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ButtonComponent from "../Components/Button";
import { DataGrid } from "@material-ui/data-grid";
import { Link} from 'react-router-dom';
import axios from "axios";


function Update(){

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

    useEffect(() => {
        axios.get('http://localhost:5000/users/read').then(resp => {
            setRows(resp.data);
        })
    }, [rows]);

    return(
        <div className="main">
            <Typography>You are at Update Page</Typography>
            <p></p>
            <div style={{ height: 300, width: '100%', backgroundColor: '' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onSelectionModelChange={(itemIdSelected) => window.localStorage.setItem('id', itemIdSelected)}
                >
                </DataGrid>
            </div>
            <p></p>
            <Typography>Check which user to want to update</Typography>
            <p></p>
            <TextField label='Name' color="primary" style={{ width: '10%'}}></TextField> <TextField label='Email' color="primary" style={{ width: '10%'}}></TextField> <TextField label={'Password'} color="primary" style={{ width: '10%'}}></TextField>
            <p></p>
            <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Update;