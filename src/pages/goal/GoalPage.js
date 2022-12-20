import * as React from 'react';

import NaviBar from '../../components/bottomNavigation/NaviBar';
import TopBar from '../../components/topBar/TopBar';
import GoalCardLong from '../../components/card/GoalCardLong.js';
import MultiDial from '../../components/interaction/MultiDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function GoalPage() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="App">
            <TopBar />

            <header className="App-header">

                <p>
                    Goal
                </p>

                <hr />

                <GoalCardLong />
                
                <p>
                    You got me!
                </p>
            </header>

            <NaviBar />
            <MultiDial onClick={handleClickOpen}/>
          
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
        </div>
    );
}

export default GoalPage;
