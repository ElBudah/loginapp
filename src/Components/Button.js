import React from "react";
import { Button } from "@material-ui/core";

function ButtonComponent(props) {
    
    return (
        <Button color="primary" variant="contained" type={props.type} style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px', marginRight: '20px'}} onClick={props.function}>{props.text}</Button>
    )
}

export default ButtonComponent;