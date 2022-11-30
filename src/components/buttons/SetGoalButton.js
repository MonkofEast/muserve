import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom";

export default function SetGoalButton() {
    let navigate = useNavigate();

    const routeGoal = () => {
        let path = `/goal`;
        navigate(path);
    }

    return (
        <Stack spacing={2} direction="row" >
            <Button
                variant="contained"
                sx={{ minWidth: 310, maxWidth: 180 }}
                onClick={routeGoal}
            >
                Check Goals
            </Button>
        </Stack>
    );
}