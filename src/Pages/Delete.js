import { Button, InputLabel, MenuItem, TextField, Typography, Select } from "@material-ui/core";
import axios from "axios";
import React from "react";
import swal from 'sweetalert2';
import ButtonComponent from "../Components/Button";
import { Link } from 'react-router-dom'

function Delete(){

    function deletelall(){
        axios.get('http://localhost:5000/users/deleteall').then(response =>{
            console.log(response.data);
            swal.fire({
                icon: 'success',
                title: 'All user deleted',
                text: 'All database has been deleted'
            })
        })

    }

    function deleteid(){
        axios.post('http://localhost:5000/users/deleteid', )
    }




    return(
        <div className="main">
            <Typography>Delete Page</Typography>
            <p></p>
            <ButtonComponent text="Delete All" function={deletelall}></ButtonComponent>
            <p></p>
            <ButtonComponent text="Delete Id" function={deleteid}></ButtonComponent>
            <p></p>
            <Select>
                <MenuItem value={10}s
                >Ten</MenuItem>

            </Select>
            <p></p>
            <Link to="/" style={{ textDecoration: 'none'}}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Delete;