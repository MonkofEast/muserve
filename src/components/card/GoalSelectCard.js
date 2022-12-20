import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GoalSelectList from '../listShow/GoalSelectList.js';
import ShareIcon from '@mui/icons-material/Share';
import AddIcon from '@mui/icons-material/Add';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import { Padding } from '@mui/icons-material';

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


export default function GoalSelectCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Card sx={{ minWidth: 300, maxWidth: 340, minHeight: 277, maxHeight: 300, display: "flex", flexDirection: "column"}}>

            
            <CardContent >
                
                <Typography variant="h7" component="div" xs={4}>
                
                            
                            {/* <TrackChangesIcon fontSize='small' /> */}
                       
                  Add Goals for Practice Session 
                </Typography>

                <hr />

                <GoalSelectList />
            </CardContent>
            
            <CardActions  sx={{marginTop: "auto", justifyContent: "space-between",  paddingLeft: 0, paddingRight: 0}}>
                {/* <Button size="small">Learn More</Button> */}
                
                <IconButton aria-label="add to favorites">
                    <AddIcon />
                </IconButton>

                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
        </Card >
    );
}