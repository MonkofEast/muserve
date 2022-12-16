import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ConfirmButton() {
    return (
        <div>
            {/* <Stack spacing={2} direction="row"> */}
            {/* <Button variant="text">Confirm</Button> */}
            < Button
                variant="contained"
                sx={{
                    width: 100, height: 60
                }}
                href='/confirm'
            >
                Confirm
            </Button >
            {/* <Button variant="outlined">Confirm</Button> */}
            {/* </Stack> */}
        </div>
    );
}