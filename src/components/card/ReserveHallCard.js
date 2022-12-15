import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import PianoIcon from '@mui/icons-material/Piano';

import ReserveHallCardSmall from '../../components/card/ReserveHallCardSmall.js';


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function ReserveHallCard() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="Schapiro Hall"
                height="100"
                image="https://www.housing.columbia.edu/sites/default/files/content/img/Buildings/Schapiro/SchapiroHall.jpg"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Schapiro
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography> */}

                <Demo>
                    <List dense={dense}>
                        {generate(
                            <ListItem>
                                <ListItemIcon>
                                    <PianoIcon fontSize='small' />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Piano"
                                    secondary={secondary ? 'Secondary text' : null}
                                />
                            </ListItem>,
                        )}
                    </List>
                </Demo>
            </CardContent>

            <CardActions>
                <Button size="small">Checkin</Button>
                <Button size="small">Cancel</Button>
            </CardActions>
        </Card>
    );
}