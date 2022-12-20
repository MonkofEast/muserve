import * as React from 'react';
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';
import { MonthPicker } from '@mui/x-date-pickers/MonthPicker';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { YearPicker } from '@mui/x-date-pickers/YearPicker';

import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';

import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';

import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { CalendarPickerSkeleton } from '@mui/x-date-pickers/CalendarPickerSkeleton';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';


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

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function fakeFetch(date, { signal }) {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            const daysInMonth = date.daysInMonth();
            const daysToHighlight = [1, 2, 3, 4, 5].map(() => getRandomNumber(1, daysInMonth));

            console.log(date.get('date'));
            console.log(typeof(date.get('date')));

            let happy_days = [];
            let sad_days = [];
            let neutral_days = [];

            for (let i = 1; i <= date.get('date'); i++) {

                
                let r = getRandomNumber(0, 4);
                if (i%3 == 0)
                happy_days.push(i);
                else if (i%3 == 1)
                sad_days.push(i);
                else if (i%3 == 2)
                neutral_days.push(i);

                console.log(i, r);

            }
            console.log(happy_days, sad_days, neutral_days);

            resolve({ happy_days, sad_days, neutral_days  });
        }, 500);

        signal.onabort = () => {
            clearTimeout(timeout);
            reject(new DOMException('aborted', 'AbortError'));
        };
    });
}

const initialValue = dayjs('2022-12-20');


const minDate = dayjs('2020-01-01T00:00:00.000');
const maxDate = dayjs('2034-01-01T00:00:00.000');




export default function RenderCellGrid() {
    const [date, setDate] = React.useState(dayjs('2022-12-20'));

    const requestAbortController = React.useRef(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [happyHighlightedDays, setHappyHighlightedDays] = React.useState([]);
    const [sadHighlightedDays, setSadHighlightedDays] = React.useState([]);
    const [neutralHighlightedDays, setNeutralHighlightedDays] = React.useState([]);
    const [value, setValue] = React.useState(initialValue);


    const fetchHighlightedDays = (date) => {
        const controller = new AbortController();
        
    
        

       
        fakeFetch(date, {
            signal: controller.signal,
        })
            .then(({ happy_days, sad_days, neutral_days  }) => {

                console.log(happy_days)
                setHappyHighlightedDays(happy_days);
                setSadHighlightedDays(sad_days);
                setNeutralHighlightedDays(neutral_days);
                setIsLoading(false);
            })
            .catch((error) => {
                // ignore the error if it's caused by `controller.abort`
                if (error.name !== 'AbortError') {
                    throw error;
                }
            });

            
    

        requestAbortController.current = controller;
    };

    React.useEffect(() => {
        fetchHighlightedDays(initialValue);
        // abort request on unmount
        return () => requestAbortController.current?.abort();
    }, []);

    const handleMonthChange = (date) => {
        if (requestAbortController.current) {
            // make sure that you are aborting useless requests
            // because it is possible to switch between months pretty quickly
            requestAbortController.current.abort();
        }

        setIsLoading(true);
        setHappyHighlightedDays([]);
        fetchHighlightedDays(date);
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid container spacing={1} rowSpacing={0} sx={{padding:0}}>
                <Grid item xs={12} md={6}>
                    <CalendarPicker  date={date}  onChange={(newDate) => setDate(newDate)}
                        renderDay={(day, _value, DayComponentProps) => {
                            const isHappy =
                                !DayComponentProps.outsideCurrentMonth &&
                                happyHighlightedDays.indexOf(day.date()) > 0;

                                const isSad =
                                !DayComponentProps.outsideCurrentMonth &&
                                sadHighlightedDays.indexOf(day.date()) > 0;

                                const isNeutral =
                                !DayComponentProps.outsideCurrentMonth &&
                                neutralHighlightedDays.indexOf(day.date()) > 0;
                            return (
                                <Badge
                                
                                    key={day.toString()}
                                    overlap="circular"
                                    
                                    badgeContent={isHappy ?  <RenderHappy/> : (isSad ? <RenderSad/> : isNeutral ? <RenderMid/> : undefined) }
                                    // badgeContent={isHappy ?  <InsertEmoticonIcon color='primary' /> : (isSad ? <SentimentVeryDissatisfiedIcon color="secondary" /> : isNeutral ? <SentimentNeutralIcon color="action" /> : undefined) }
                                >
                                    <PickersDay {...DayComponentProps} />
                                    
                                </Badge>
                            );
                        }}


                    />
                </Grid>

            </Grid>
        </LocalizationProvider>
    );
}