import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SickIcon from '@mui/icons-material/Sick';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

import PropTypes from 'prop-types';
import { pink } from '@mui/material/colors';

import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function MoodToday() {
    return (
        <Box sx={{ flexGrow: 1 }}>

            {/* <Typography variant="h6" component="div">
                How did your practice go today?
            </Typography> */}

            <Grid container spacing={1} rowSpacing={0} sx={{padding:0, paddingBottom:0, paddingTop:0}}>
                
                <Grid xs>
                    <InsertEmoticonIcon color='primary' fontSize='large' />
                </Grid>
                <Grid xs>
                    <SentimentNeutralIcon color="action" fontSize='large' />
                </Grid>
                <Grid xs>
                    <SentimentVeryDissatisfiedIcon color="secondary" fontSize='large' />
                </Grid>
                
            </Grid>
        </Box>
    );
}