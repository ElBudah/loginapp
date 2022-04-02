import { Typography } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../Components/Button";
import { Link} from 'react-router-dom'

function Show(){
    return(
        <div className="main">
            <Typography>See All Users</Typography>
            <p></p>
            <Link to="/" style={{ textDecoration : 'none'}}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Show;