import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function DropBox() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ minWidth: 85, minHeight: 15, maxHeight: 15 }} size="small">
            <InputLabel id="demo-select-small">Room</InputLabel>
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>211</MenuItem>
                <MenuItem value={20}>301</MenuItem>
                <MenuItem value={30}>432</MenuItem>
            </Select>
        </FormControl>
    );
}