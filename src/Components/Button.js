import React from "react";
import { Button } from "@material-ui/core";

function ButtonComponent(props) {
    
    return (
        <Button color="primary" variant="contained" style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px'}} onClick={props.function}>{props.text}</Button>
    )
}

export default ButtonComponent;