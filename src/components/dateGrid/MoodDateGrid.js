import * as React from 'react';
import PropTypes from 'prop-types';
import { pink } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SickIcon from '@mui/icons-material/Sick';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

const RenderHappy = (props) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

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
            {value?.getDate() ?? '1'}
            <IconButton
                component="button"
                ref={buttonElement}
                touchRippleRef={rippleRef}
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                // Remove button from tab sequence when cell does not have focus
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        // Prevent key navigation when focus is on button
                        event.stopPropagation();
                    }
                }}
            >
                <InsertEmoticonIcon color='primary' />
            </IconButton>
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

const RenderSad = (props) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

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
            {value?.getDate() ?? ''}
            <IconButton
                component="button"
                ref={buttonElement}
                touchRippleRef={rippleRef}
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                // Remove button from tab sequence when cell does not have focus
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        // Prevent key navigation when focus is on button
                        event.stopPropagation();
                    }
                }}
            >
                <SentimentVeryDissatisfiedIcon color="secondary" />
            </IconButton>
        </strong>
    );
};

RenderSad.propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    value: PropTypes.instanceOf(Date),
};

const RenderMid = (props) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

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
            {value?.getDate() ?? ''}
            <IconButton
                component="button"
                ref={buttonElement}
                touchRippleRef={rippleRef}
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                // Remove button from tab sequence when cell does not have focus
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        // Prevent key navigation when focus is on button
                        event.stopPropagation();
                    }
                }}
            >
                <SentimentNeutralIcon color="action" />
            </IconButton>
        </strong>
    );
};

RenderMid.propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    value: PropTypes.instanceOf(Date),
};

const RenderSuperSad = (props) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

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
            {value?.getDate() ?? ''}
            <IconButton
                component="button"
                ref={buttonElement}
                touchRippleRef={rippleRef}
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                // Remove button from tab sequence when cell does not have focus
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        // Prevent key navigation when focus is on button
                        event.stopPropagation();
                    }
                }}
            >
                <SickIcon sx={{ color: pink[500] }} />
            </IconButton>
        </strong>
    );
};

RenderSuperSad.propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    value: PropTypes.instanceOf(Date),
};

const RenderSuperHappy = (props) => {
    const { hasFocus, value } = props;
    const buttonElement = React.useRef(null);
    const rippleRef = React.useRef(null);

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
            {value?.getDate() ?? ''}
            <IconButton
                component="button"
                ref={buttonElement}
                touchRippleRef={rippleRef}
                variant="contained"
                size="small"
                style={{ marginLeft: 16 }}
                // Remove button from tab sequence when cell does not have focus
                tabIndex={hasFocus ? 0 : -1}
                onKeyDown={(event) => {
                    if (event.key === ' ') {
                        // Prevent key navigation when focus is on button
                        event.stopPropagation();
                    }
                }}
            >
                <FaceRetouchingNaturalIcon color="success" />
            </IconButton>
        </strong>
    );
};

RenderSuperHappy.propTypes = {
    hasFocus: PropTypes.bool.isRequired,
    value: PropTypes.instanceOf(Date),
};

const columns = [
    {
        field: 'sun',
        headerName: 'Sun',
        width: 80,
        renderCell: RenderHappy,
    },
    {
        field: 'mon',
        headerName: 'Mon',
        width: 80,
        renderCell: RenderSuperSad,
    },
    {
        field: 'tue',
        headerName: 'Tue',
        width: 80,
        renderCell: RenderSad,
    },
    {
        field: 'wed',
        headerName: 'Wed',
        width: 80,
        renderCell: RenderSad,
    },
    {
        field: 'thu',
        headerName: 'Thu',
        width: 80,
        renderCell: RenderMid,
    },
    {
        field: 'fri',
        headerName: 'Fri',
        width: 80,
        renderCell: RenderSuperHappy,
    },
    {
        field: 'sat',
        headerName: 'Sat',
        width: 80,
        renderCell: RenderHappy,
    },
];

const rows = [
    {
        id: 1,
        sun: new Date(2022, 9, 30),
        mon: new Date(2022, 9, 31),
        tue: new Date(2022, 10, 1),
        wed: new Date(2022, 10, 2),
        thu: new Date(2022, 10, 3),
        fri: new Date(2022, 10, 4),
        sat: new Date(2022, 10, 5),
    },
    {
        id: 2,
        sun: new Date(2022, 10, 6),
        mon: new Date(2022, 10, 7),
        tue: new Date(2022, 10, 8),
        wed: new Date(2022, 10, 9),
        thu: new Date(2022, 10, 10),
        fri: new Date(2022, 10, 11),
        sat: new Date(2022, 10, 12),
    },
    {
        id: 3,
        sun: new Date(2022, 10, 13),
        mon: new Date(2022, 10, 14),
        tue: new Date(2022, 10, 15),
        wed: new Date(2022, 10, 16),
        thu: new Date(2022, 10, 17),
        fri: new Date(2022, 10, 18),
        sat: new Date(2022, 10, 19),
    },
    {
        id: 4,
        sun: new Date(2022, 10, 20),
        mon: new Date(2022, 10, 21),
        tue: new Date(2022, 10, 22),
        wed: new Date(2022, 10, 23),
        thu: new Date(2022, 10, 24),
        fri: new Date(2022, 10, 25),
        sat: new Date(2022, 10, 26),
    },
    {
        id: 5,
        sun: new Date(2022, 10, 27),
        mon: new Date(2022, 10, 28),
        tue: new Date(2022, 10, 29),
        wed: new Date(2022, 10, 30),
        thu: new Date(2022, 11, 1),
        fri: new Date(2022, 11, 2),
        sat: new Date(2022, 11, 3),
    },
];

export default function RenderCellGrid() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}