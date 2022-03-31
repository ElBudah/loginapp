import { Button, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import ButtonComponent from "../Components/Button";
import {Link} from 'react-router-dom';
import axios from "axios";
import schema from "../Controller/Schema";

function SignIn(){

    const {register, reset, formState: {errors}, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitData = (data) => {
        console.log(data.Name);
       
    }

    return(
        <div className="main">
            <Typography>You are at Sign In page</Typography>
            <form onSubmit={handleSubmit(onSubmitData)}>
                <TextField {...register("txtName")} color="primary" label="Name" ></TextField>
                <p></p>
                <p className="errors">{errors.Name?.message}</p>
                <TextField {...register("txtPassword")} color="primary" label="Password" type={"password"}></TextField>
                <p></p>
                <p className="errors">{errors.Password?.message}</p>
                <Button type="submit" variant="contained" color="primary" style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px'}} >Submit</Button>
                <p></p>
                <Link to="/" style={{textDecoration: 'none'}}><Button color="primary" variant="contained" style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px'}}>Return</Button></Link>
            </form>
            
        </div>
    )
}

export default SignIn;