import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const actions = [
   
];

export default function MultiDial() {

    const [open, setOpen] = React.useState(false);
    const [openSpeedDial, setOpenSpeedDial] = React.useState(false);

  const handleClickOpen = () => {
    console.log("foooo");
        setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenSpeedDial(false);
  };
    return (
        <Box sx={{ height: 50, transform: 'translateZ(0px)', flexGrow: 1, position: 'absolute', bottom: 16, right: 16 }}>
            <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Goal</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add a music practice goal to keep track of your progress.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Goal"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
            
            <SpeedDial
            open={openSpeedDial}
                 onClick={handleClickOpen}
                ariaLabel="Multi Dial"
                icon={<SpeedDialIcon />}
                sx={{ position: 'fixed', bottom: 70, right: 16 }}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}


            </SpeedDial>
            
        </Box>
    );
}