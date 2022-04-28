import React from "react";
import { Button } from "@material-ui/core";

function ButtonComponent(props) {

    const type = props.type;
    const text = props.text;
    const func = props.func;
    const disable = props.disable;
    
    return (
        <Button color="primary" variant="contained" disabled={disable} type={type} style={{maxWidth: '130px', maxHeight: '50px', minWidth: '130px', minHeight:'50px', marginRight: '20px'}} onClick={func}>{text}</Button>
    )
}

export default ButtonComponent;