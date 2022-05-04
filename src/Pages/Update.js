import { Button, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ButtonComponent from "../Components/Button";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { Modal, makeStyles, Fade, Backdrop } from "@material-ui/core";
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

    const clock = 1500;
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
        
        data.id = window.localStorage.getItem('id');

        axios.post('http://localhost:5000/users/update', data).then(resp => {
            console.log(resp.data.ok);
            if (resp.data.ok == 1) {
                swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Your data has been updated!'
                })
            } else {
                swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No data inserted!'
                })
            }
        })
        reset();
    }

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            width: 400,
        },
    }));

    const body = (
        <div>
            <h3>This is just a test</h3>
        </div>
    );

    const classes = useStyles();


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

            <ButtonComponent text="Update" func={handleOpen}></ButtonComponent>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Update Data</h2>
                        <p id="transition-modal-description">react-transition-group animates me.</p>
                        <form onSubmit={handleSubmit(OnSubmitUpdate)}>
                            <TextField label='New name' {...register('Name')} color="primary" style={{ width: '80%' }}></TextField>
                            <p className="errors">{errors.Name?.message}</p>
                            <TextField label='New password' type={'password'} {...register('Password')} color="primary" style={{ width: '80%' }}></TextField>
                            <p className="errors">{errors.Password?.message}</p>
                            <TextField label='New email' {...register('Email')} color="primary" style={{ width: '80%' }}></TextField>
                            <p className="errors">{errors.Email?.message}</p>

                            <ButtonComponent text="Confirm" type='submit' func={handleClose}></ButtonComponent>
                            <p></p>
                        </form>
                    </div>
                </Fade>
            </Modal>

            <p></p>
            <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>

        </div>
    )
}

export default Update;