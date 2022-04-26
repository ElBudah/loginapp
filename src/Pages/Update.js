import { TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ButtonComponent from "../Components/Button";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import updateSchema from "../Controller/UpdateSchema";
import swal from 'sweetalert2';


function Update() {

    const [rows, setRows] = useState([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(updateSchema),
    })

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

    const clock = 4000;
    useEffect(() => {
        const id = setInterval(() => {
            axios.get('http://localhost:5000/users/read').then(resp => {
                setRows(resp.data);
            })
        }, clock);
        return () => clearInterval(id);
    }, [rows]);

    // User Update function
    const OnSubmitUpdate = (data) => {

        console.log(data);
        data.id = window.localStorage.getItem('id');

        console.log(data);

        axios.post('http://localhost:5000/users/update', data).then((resp) => {
            console.log(resp.data.ok);
            if (resp.data.ok == true) {
                swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your data has been updated!'
                })
            }
        })
        reset();
    }



    return (
        <div className="main">
            <Typography>You are at Update Page</Typography>
            <p></p>
            <div style={{ height: 300, width: '100%', backgroundColor: '' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onSelectionModelChange={(itemIdselected) => window.localStorage.setItem('id', itemIdselected)}
                >
                </DataGrid>
            </div>
            <p></p>
            <Typography>First select which user you want to update</Typography>
            <p></p>
            <form onSubmit={handleSubmit(OnSubmitUpdate)}>
                <TextField label='New name' {...register('Name')} color="primary" style={{ width: '10%' }}></TextField>
                <p className="errors">{errors.Name?.message}</p>
                <TextField label='New email' {...register('Email')} color="primary" style={{ width: '10%' }}></TextField>
                <p className="errors">{errors.Email?.message}</p>
                <TextField label='New password' type={'password'} {...register('Password')} color="primary" style={{ width: '10%' }}></TextField>
                <p className="errors">{errors.Password?.message}</p>
                <ButtonComponent text="Update" type='submit'></ButtonComponent>
                <p></p>
                <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
            </form>

        </div>
    )
}

export default Update;