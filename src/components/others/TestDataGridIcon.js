import React, { useState, useEffect } from "react";
import { FormControlLabel, IconButton } from '@mui/core';
import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons/Edit';
import { blue } from '@mui/core/colors';

const MatEdit = ({ index }) => {

    const handleEditClick = () => {
        // some action
    }


    return <FormControlLabel
        control={
            <IconButton color="secondary" aria-label="add an alarm" onClick={handleEditClick} >
                <EditIcon style={{ color: blue[500] }} />
            </IconButton>
        }
    />
};

const IconCell = () => {
    const rows = [{ id: 1, name: "ABC", email: "xyz@gmail.com" }];
    const columns = [
        { field: "name", headerName: "Name" },
        { field: "email", headerName: "Email" },
        {
            field: "actions",
            headerName: "Actions",
            sortable: false,
            width: 140,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                return (
                    <div className="d-flex justify-content-between align-items-center" style={{ cursor: "pointer" }}>
                        <MatEdit index={params.row.id} />
                    </div>
                );
            }
        }
    ];

    return (
        <div style={{ height: 500, width: 500 }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
};

export default IconCell;