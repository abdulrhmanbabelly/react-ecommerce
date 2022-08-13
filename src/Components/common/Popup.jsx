import React, { forwardRef, useState } from 'react';
import { Alert, Snackbar, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const CustomAlert = forwardRef((props, ref) => {
  let { content, severity, handleClose } = props;
  return (
    <>
      <Alert severity={severity} elevation={6} ref={ref} variant="filled" style={{ display : 'flex', alignItems : 'center' }}>
      {content} 
      <IconButton onClick={handleClose} color='inherit' size='small'>
          <Close/>
      </IconButton>
      </Alert>
    </>

  ) 
});

let Popup = (props) => {
  const [open, setOpen] = useState(true);
  let { content, type, title, setPopup } = props;

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => { setPopup('');  if (props.then) props.then(); } , 100);
  };

  let renderContent = () => {

    if (type === "error") return <CustomAlert content={content} severity='error' handleClose={handleClose} />;
    else if (type === "warning") return <CustomAlert content={content} severity='warning' handleClose={handleClose} />;
    else if (type === "info") return <CustomAlert content={content} severity='info' handleClose={handleClose} />;
    else if (type === "success") return <CustomAlert content={content} severity='success' handleClose={handleClose} />;

  }

  return (
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={title}>
                {renderContent()}
      </Snackbar>
  );
}

export default Popup;