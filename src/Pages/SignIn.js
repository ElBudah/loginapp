import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonComponent from "../Components/Button";
import { Link } from 'react-router-dom';
import axios from "axios";
import schema from "../Controller/Schema";
import swal from 'sweetalert2';

function SignIn() {

    const { register, reset, formState: { errors }, handleSubmit } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitData = (data) => {
        console.log(data.Name);
        axios.post('http://localhost:5000/users/signin', data).then(response => {
            console.log(response.data);
            if (response.data == true) {
                window.location.href = "/private"
            }
            else{
                reset()
                swal.fire({
                    icon: 'error',
                    title: 'Invalid',
                    text: 'Invalid credentials'
                }); 
            }

    })
}

return (
    <div className="main">
        <Typography>You are at Sign In page</Typography>
        <form onSubmit={handleSubmit(onSubmitData)}>
            <TextField {...register("Name")} color="primary" label="Name" ></TextField>
            <p></p>
            <p className="errors">{errors.Name?.message}</p>
            <TextField {...register("Password")} color="primary" label="Password" type={"password"}></TextField>
            <p></p>
            <p className="errors">{errors.Password?.message}</p>
            <TextField {...register("Email")} autoComplete="off" color="primary" label="Email"></TextField>
            <p></p>
            <p className="erros">{errors.Email?.message}</p>
            <Button type="submit" variant="contained" color="primary" style={{ maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight: '50px' }} >Submit</Button>
            <p></p>
            <Link to="/" style={{ textDecoration: 'none' }}><Button color="primary" variant="contained" style={{ maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight: '50px' }}>Return</Button></Link>
        </form>

    </div>
)
}

export default SignIn;