import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import { Box } from '@mui/material';

import './GoalList.css'

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(8)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function GoalList() {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        <Box sx={{
            pb: 7,
            maxHeight: 10
        }} ref={ref}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} className='scroll-container'>
                {messages.map(({ primary, secondary, person, data }, index) => (
                    <ListItem button key={index + person}>
                        <ListItemAvatar>
                            {/* <Avatar alt="Profile Picture" src={person} /> */}
                            <TrackChangesIcon fontSize='large' />
                        </ListItemAvatar>
                        <ListItemText
                            primary={primary}
                            secondary={
                                <React.Fragment>
                                    {data}
                                    <tr></tr>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {secondary}
                                    </Typography>
                                </React.Fragment>}
                        />
                    </ListItem>
                ))}
            </List>
        </Box >
    );
}

const messageExamples = [
    {
        primary: 'Haydn',
        secondary: "Run through the Haydn without stopping",
        person: '/static/images/avatar/5.jpg',
        data: '2022/11/01',
    },
    {
        primary: '3h',
        secondary: `Practice for 3 hours a day`,
        person: '/static/images/avatar/1.jpg',
        data: '2022/11/02',
    },
    {
        primary: 'M',
        secondary: 'Mediate before practice?',
        person: '/static/images/avatar/2.jpg',
        data: '2022/11/03',
    },
    {
        primary: 'Concert',
        secondary: 'Conert on December 12th!',
        person: '/static/images/avatar/3.jpg',
        data: '2022/11/03',
    },
    {
        primary: "Record",
        secondary: 'Work on section in measures 3 to 10',
        person: '/static/images/avatar/4.jpg',
        data: '2022/11/04',
    },
    {
        primary: 'Overtone',
        secondary: `Overtone practive?`,
        person: '/static/images/avatar/5.jpg',
        data: '2022/11/05',
    },
    {
        primary: 'Collab',
        secondary: `Email teacher about possible colab?`,
        person: '/static/images/avatar/1.jpg',
        data: '2022/11/06',
    },
    {
        primary: 'HC',
        secondary: `Transcribe the riff in Hotel California`,
        person: '/static/images/avatar/1.jpg',
        data: '2022/11/07',
    },
];