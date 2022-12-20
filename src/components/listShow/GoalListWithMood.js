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
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


import { Box } from '@mui/material';

import './GoalList.css'

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';

import { blue } from '@mui/material/colors';


const RenderSad = (props) => {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
      setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  React.useLayoutEffect(() => {
      if (hasFocus) {
          const input = buttonElement.current?.querySelector('input');
          input?.focus();
      } else if (rippleRef.current) {
          // Only available in @mui/material v5.4.1 or later
          rippleRef.current.stop({});
      }
  }, [hasFocus]);

  return (
      <strong>
   
          <IconButton
              component="button"
              ref={buttonElement}
              touchRippleRef={rippleRef}
              variant="contained"
              size="small"
              // style={{ marginLeft: 16 }}
              // Remove button from tab sequence when cell does not have focus
              tabIndex={hasFocus ? 0 : -1}
              onKeyDown={(event) => {
                  if (event.key === ' ') {
                      // Prevent key navigation when focus is on button
                      event.stopPropagation();
                  }
              }}
              onClick={handleMenu}
          >
              <SentimentVeryDissatisfiedIcon color="secondary" />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
              
              <MenuItem><InsertEmoticonIcon color='primary' /></MenuItem>
              <MenuItem><SentimentNeutralIcon color="action" /></MenuItem>
              <MenuItem><SentimentVeryDissatisfiedIcon color="secondary" /></MenuItem>
              
          </Menu>
      </strong>
  );
};

RenderSad.propTypes = {
  hasFocus: PropTypes.bool.isRequired,
  value: PropTypes.instanceOf(Date),
};

const RenderHappy = (props) => {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
      setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  React.useLayoutEffect(() => {
      if (hasFocus) {
          const input = buttonElement.current?.querySelector('input');
          input?.focus();
      } else if (rippleRef.current) {
          // Only available in @mui/material v5.4.1 or later
          rippleRef.current.stop({});
      }
  }, [hasFocus]);

  return (
      <strong>
         
          <IconButton
              component="button"
              ref={buttonElement}
              touchRippleRef={rippleRef}
              variant="contained"
              size="small"
              // style={{ marginLeft: 16 }}
              // Remove button from tab sequence when cell does not have focus
              tabIndex={hasFocus ? 0 : -1}
              onKeyDown={(event) => {
                  if (event.key === ' ') {
                      // Prevent key navigation when focus is on button
                      event.stopPropagation();
                  }
              }}
              onClick={handleMenu}
          >
              <InsertEmoticonIcon color='primary' />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
              
              <MenuItem><InsertEmoticonIcon color='primary' /></MenuItem>
              <MenuItem><SentimentNeutralIcon color="action" /></MenuItem>
              <MenuItem><SentimentVeryDissatisfiedIcon color="secondary" /></MenuItem>
              
          </Menu>
      </strong>
  );
};

RenderHappy.propTypes = {
  hasFocus: PropTypes.bool.isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.instanceOf(Date),
};

const RenderMid = (props) => {
  const { hasFocus, value } = props;
  const buttonElement = React.useRef(null);
  const rippleRef = React.useRef(null);

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
      setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  React.useLayoutEffect(() => {
      if (hasFocus) {
          const input = buttonElement.current?.querySelector('input');
          input?.focus();
      } else if (rippleRef.current) {
          // Only available in @mui/material v5.4.1 or later
          rippleRef.current.stop({});
      }
  }, [hasFocus]);

  return (
      <strong>
          
          <IconButton
              component="button"
              ref={buttonElement}
              touchRippleRef={rippleRef}
              variant="contained"
              size="small"
              // style={{ marginLeft: 16 }}
              // Remove button from tab sequence when cell does not have focus
              tabIndex={hasFocus ? 0 : -1}
              onKeyDown={(event) => {
                  if (event.key === ' ') {
                      // Prevent key navigation when focus is on button
                      event.stopPropagation();
                  }
              }}
              onClick={handleMenu}
          >
              <SentimentNeutralIcon color="action" />
          </IconButton>
          <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
              
              <MenuItem><InsertEmoticonIcon color='primary' /></MenuItem>
              <MenuItem><SentimentNeutralIcon color="action" /></MenuItem>
              <MenuItem><SentimentVeryDissatisfiedIcon color="secondary" /></MenuItem>
              
          </Menu>
      </strong>
  );
};

RenderMid.propTypes = {
  hasFocus: PropTypes.bool.isRequired,
  value: PropTypes.instanceOf(Date),
};


function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(8)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export default function GoalListWithMood() {
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
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingTop: 0, paddingBottom: 0 }} className='scroll-container'>
                {messages.map(({ primary, secondary, person, data }, index) => (
                    <ListItem button key={index + person} >
                        <ListItemAvatar>
                            {/* <Avatar alt="Profile Picture" src={person} /> */}
                            <RenderHappy/>
                        </ListItemAvatar>
                        
                        <ListItemText
                            primary={secondary}
                            // secondary={
                            //     <React.Fragment>
                            //         {/* {data} */}
                            //         <tr></tr>
                            //         <Typography
                            //             sx={{ display: 'inline' }}
                            //             component="span"
                            //             variant="body2"
                            //             color="text.primary"
                            //         >
                            //             {secondary}
                            //         </Typography>
                            //     </React.Fragment>}
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