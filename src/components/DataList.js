import React, {useState, useMemo} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DataList({data, type}) {
    const [rows, setRows] = useState(data)
    const columns = useMemo(() =>
        [
            {
                field: 'name',
                headerName: 'Name',
                width: 150,
                sortable: true,
                editable: true,
            },
            {
                field: 'logo',
                headerName: 'Logo',
                width: 150,
                sortable: true,
                editable: false,
            },
            {
                field: 'tag_line',
                headerName: 'Tag line',
                width: 150,
                sortable: true,
                editable: false,
            },
            {
                field: 'created_by',
                headerName: 'Created By',
                sortable: true,
                width: 200,
                renderCell: (data) => (
                    data.row.created_by.username
                ),
            },
            {
                field: ' ',
                headerName: 'Action',
                width: 200,
                renderCell: (data) => (
                    <div>
                        <EditIcon style={{cursor: 'pointer'}} onClick={() => handleEdit(data.row.id)}/>
                        <DeleteIcon style={{cursor: 'pointer'}} onClick={() => handleDelete(data.row.id)}/>
                    </div>
                ),
            },
        ], []);
    const handleEdit = (id) => {
        console.log("++++++++++++++++++++iiiiddddd", id)
    };
    const handleDelete = (id) => {
        console.log("--------------------", id)
    };
    return (
        <div style={{height: 400, width: '100%', backgroundColor: 'white'}}>
            <h2>{type}</h2>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[10]}
                // checkboxSelection
                disableSelectionOnClick
            />
        </div>
    );
}
