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


    function deleteAll() {
        axios.get('http://localhost:5000/users/deleteall').then(response => {
            swal.fire({
                icon: 'success',
                title: 'All user deleted',
                text: 'All database has been deleted'
            })
        })
    }

    function deleteid() {
        const data = {
            id: window.localStorage.getItem('id')
        }
        axios.post('http://localhost:5000/users/deleteid', data).then(resp => {
            if (resp.data.ok) {
                swal.fire({
                    icon: 'success',
                    title: 'User Deleted',
                    text: 'The selected user has been deleted'
                })
            }else{
                swal.fire({
                    icon: 'warning',
                    title: 'Warning',
                    text: 'No ID selected'
                })
            }

        })
    }

    const clock = 1500;
    useEffect(() => {
        const intervalid = setInterval(() => {
            axios.get('http://localhost:5000/users/read').then(resp => {
                setRows(resp.data);
            })
        }, clock)
        return () => clearInterval(intervalid)
    }, [rows]);



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
                    onSelectionModelChange={(itemIdSelected) => window.localStorage.setItem('id', itemIdSelected)}

                >
                </DataGrid>
            </div>
            <p></p>
            <div className="buttons">
                <ButtonComponent text="Delete All" func={deleteAll}></ButtonComponent>
                <ButtonComponent text="Delete Selected" func={deleteid}></ButtonComponent>
                <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
            </div>

        </div>
    )
}

export default Show;