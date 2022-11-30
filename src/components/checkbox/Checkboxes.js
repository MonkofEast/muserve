import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';

import './Checkboxes.css'

export default function Checkboxes() {
    return (
        <FormGroup>
            <div>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    className='center-item'
                >
                    <Grid item xs={6}>
                        <FormControl className='center-item'>
                            <FormLabel id="col-checkboxes-group-label">Utilities</FormLabel>
                            <FormControlLabel control={<Checkbox />} label="Piano" />
                            <FormControlLabel control={<Checkbox />} label="Stand" />
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <FormControl className='center-item'>
                            <FormLabel id="col-radio-buttons-group-label">Room Size</FormLabel>
                            <RadioGroup
                                column
                                aria-labelledby="col-radio-buttons-group-label"
                                name="col-radio-buttons-group"
                            >
                                <FormControlLabel value="big" control={<Radio />} label="Big" />
                                <FormControlLabel value="small" control={<Radio />} label="Small" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                </Grid>
            </div>
        </FormGroup>
    );
}