import { Typography } from "@material-ui/core";
import React, { useState } from "react";
import ButtonComponent from "../Components/Button";
import UserTable from "../Components/UserTable";
import { Link} from 'react-router-dom';

function Update(){

    const [check, setCheck] = useState();

    console.log(window.localStorage.getItem('id'));

    return(
        <div className="main">
            <Typography>You are at Update Page</Typography>
            <p></p>
            <UserTable/>
            <p></p>
            <Typography>Check which user to want to update</Typography>

            <Link to="/" style={{ textDecoration: 'none' }}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Update;