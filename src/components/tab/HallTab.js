import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import TimeScroll from '../time/TimeScroll';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material';

import './HallTab.css'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function CardShow(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="cardshow"
            hidden={value !== index}
            id={`card-show-${index}`}
            aria-labelledby={`card-show-${index}`}
            {...other}
        >
            {value === index && (
                <Card
                    sx={{
                        minWidth: 340,
                        maxWidth: 340,
                        minHeight: 500,
                    }}
                    className='scroll-container'
                >
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function HallTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>

            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="halls"
                >
                    <Tab label="Scapiro" />
                    <Tab label="Broadway" />
                    <Tab label="East Campus" />
                    <Tab label="Hogan" />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <CardShow>
                    <TimeScroll />
                </CardShow>
            </TabPanel >

            <TabPanel value={value} index={1}>
                <CardShow>
                    <TimeScroll />
                </CardShow>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <CardShow>
                    <TimeScroll />
                </CardShow>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <CardShow>
                    <TimeScroll />
                </CardShow>
            </TabPanel>

        </Box >
    );
}