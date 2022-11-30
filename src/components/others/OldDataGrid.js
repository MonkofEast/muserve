import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomUpdatedDate,
} from '@mui/x-data-grid-generator';

import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function MoodDateGrid() {
    return (
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                experimentalFeatures={{ newEditingApi: true }}
            />
        </div>
    );
}

const columns = [
    { field: 'sun', headerName: 'Sun', width: 30, editable: true },
    { field: 'mon', headerName: 'Mon', width: 30, editable: true },
    { field: 'tue', headerName: 'Tue', width: 30, editable: true },
    { field: 'wed', headerName: 'Wed', width: 30, editable: true },
    { field: 'thu', headerName: 'Thu', width: 30, editable: true },
    { field: 'fri', headerName: 'Fri', width: 30, editable: true },
    { field: 'sat', headerName: 'Sat', width: 30, editable: true },
    // { field: 'name', headerName: 'Name', width: 180, editable: true },
    // { field: 'age', headerName: 'Age', type: 'number', editable: true },
    // {
    //     field: 'dateCreated',
    //     headerName: 'Date Created',
    //     type: 'date',
    //     width: 180,
    //     editable: true,
    // },
    // {
    //     field: 'lastLogin',
    //     headerName: 'Last Login',
    //     type: 'dateTime',
    //     width: 220,
    //     editable: true,
    // },
];

const rows = [
    {
        id: 1,
        sun: InsertEmoticonIcon,
        mon: '1',
        tue: '2',
        wed: '3',
        thu: '4',
        fri: '5',
        sat: '6',

        name: randomTraderName(),
        age: 25,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    // {
    //     id: 1,
    //     name: randomTraderName(),
    //     age: 25,
    //     dateCreated: randomCreatedDate(),
    //     lastLogin: randomUpdatedDate(),
    // },
    {
        id: 2,
        name: randomTraderName(),
        age: 36,
        dateCreated: randomCreatedDate(),
        lastLogin: randomUpdatedDate(),
    },
    // {
    //     id: 3,
    //     name: randomTraderName(),
    //     age: 19,
    //     dateCreated: randomCreatedDate(),
    //     lastLogin: randomUpdatedDate(),
    // },
    // {
    //     id: 4,
    //     name: randomTraderName(),
    //     age: 28,
    //     dateCreated: randomCreatedDate(),
    //     lastLogin: randomUpdatedDate(),
    // },
    // {
    //     id: 5,
    //     name: randomTraderName(),
    //     age: 23,
    //     dateCreated: randomCreatedDate(),
    //     lastLogin: randomUpdatedDate(),
    // },
];