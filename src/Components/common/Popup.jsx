import React, { forwardRef, useState } from 'react';
import { Alert, DialogContent, DialogActions, Dialog, Button, DialogContentText, DialogTitle, Slide } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let Popup = (props) => {
  const [open, setOpen] = useState(true);
  let { content, type, title, setPopup } = props;

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setPopup('');  if (props.fn) props.fn(); } , 100);
  };

  let renderContent = () => {

    if (type === "error") return <Alert severity="error">{content}</Alert>;
    else if (type === "warning") return <Alert severity="warning">{content}</Alert>;
    else if (type === "info") return <Alert severity="info">{content}</Alert>;
    else if (type === "success") return <Alert severity="success">{content}</Alert>;

  }

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
                {renderContent()}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Popup;