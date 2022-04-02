import { Typography } from "@material-ui/core";
import React from "react";
import ButtonComponent from "../Components/Button";
import { Link} from 'react-router-dom';

function Private(){
    return(
        <div className="main">
            <Typography>Private Page</Typography>
            <p></p>
            <Link to="/" style={{ textDecoration: 'none'}}><ButtonComponent text="Return"></ButtonComponent></Link>
        </div>
    )
}

export default Private;