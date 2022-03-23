import { Typography, Button } from "@material-ui/core";
import React from "react";
import {Link} from 'react-router-dom'
import ButtonComponent from "../Components/Button";

function Home(){
    return(
        <div className="main">
            <Typography>Your are at Home Page</Typography>
            <p></p>
            <Link to="/signin" style={{ textDecoration: 'none'}}><ButtonComponent text="Sign In"></ButtonComponent></Link>
            <p></p>
            <Link to="/create" style={{ textDecoration: 'none'}}><ButtonComponent text="Sign Up"></ButtonComponent></Link>
            <p></p>
            <Link to="/delete" style={{ textDecoration: 'none'}}><ButtonComponent text="Delete"></ButtonComponent></Link>
            <p></p>
            <Link to="/read" style={{textDecoration: 'none'}}><ButtonComponent text="Show"></ButtonComponent></Link>
            <p></p>
            <Link to="/update" style={{textDecoration: 'none'}}><ButtonComponent text="Update"></ButtonComponent></Link>
        </div>
    )
}

export default Home;