import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonComponent from "../Components/Button";
import {yupResolver} from '@hookform/resolvers/yup';
import schema from "../Controller/Schema";
import axios from "axios";
import swal from 'sweetalert2';

function SignUp() {

    const {register, handleSubmit, formState:{ errors}, reset} = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmitData = (data) => {
        console.log(data.Name);
        axios.post('http://localhost:5000/users/signup', data).then(response =>{
            console.log("Validation: " + response.data)
            if(response.data == false){
                swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Failed',
                })
            }
        })
        reset();
    }

    return (
        <div className="main">
            <Typography>Sign Up Page</Typography>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <TextField label="Name"{...register('Name')}></TextField>
                <p></p>
                <p className="errors">{errors.Name?.message}</p>
                <TextField label="Password" {...register('Password')} type="password"></TextField>
                <p></p>
                <p className="errors">{errors.Password?.message}</p>
                <Button type="submit" variant="contained" color="primary" style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px'}}>Submit</Button>
                <p></p>
                <Link to="/" style={{ textDecoration : 'none'}}><ButtonComponent text="Return"></ButtonComponent></Link>
            </form>

        </div>
    )
}

export default SignUp;