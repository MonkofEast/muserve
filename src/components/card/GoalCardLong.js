import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import GoalListLong from '../../components/listShow/GoalListLong.js';
import { IconButton } from '@mui/material';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function GoalCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ minWidth: 340, maxWidth: 340, maxHeight: 700 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Goals Here
                </Typography>

                <hr />

                <GoalListLong />
            </CardContent>
        </Card >
    );
}