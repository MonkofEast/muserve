import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

export default function ReserveButton() {
    let navigate = useNavigate();

    const routeReserve = () => {
        let path = `/reserve`;
        navigate(path);
    }

    return (
        <Stack spacing={2} direction="row" >
            <Button
                variant="contained"
                sx={{ minWidth: 340, maxWidth: 340 }}
                onClick={routeReserve}
            >
                Reserve a Practice Room
            </Button>
            {/* <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button> */}
        </Stack>
    );
}