import React, {useState, useEffect} from "react";
import {DataGrid} from '@material-ui/data-grid';
import axios from 'axios';


function UserTable() {

    const [rows, setRows] = useState([]);

    const columns = [
        { field: 'id', headerName: 'ID', width: 140 },
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
            editable: true,
        },
        {
            field: 'password',
            headerName: 'Password',
            width: 250,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 360,
            editable: true,
        },
    ]

    useEffect(() => {
        axios.get('http://localhost:5000/users/read').then(resp => {
            setRows(resp.data);
        })
    }, [rows]);

    const [check, setCheck] = useState([]);

    
    

    return (
        <div>
            <div style={{ height: 300, width: '100%', backgroundColor: '' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                    onSelectionModelChange={(itemIdSelected) => window.localStorage.setItem('id', itemIdSelected)}
                >
                </DataGrid>
            </div>
            <p></p>
        </div>

    )
}

export default UserTable;