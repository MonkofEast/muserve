import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function Checkboxes() {
    return (
        <FormGroup>
            <div>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Piano" />
                <FormControlLabel control={<Checkbox defaultChecked />} label="Stand" />
            </div>

            <div>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Room Size</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="big" control={<Radio />} label="Big" />
                        <FormControlLabel value="big" control={<Radio />} label="Small" />
                    </RadioGroup>
                </FormControl>
            </div>
        </FormGroup>
    );
}