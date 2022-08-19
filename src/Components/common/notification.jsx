import { AlertTitle, Alert as MuiAlert, Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { AlertContext } from "../../contexts/alertContext";

const styles = {
  root: {
    
  },
  alert: {
    marginBottom: '2vw',
  }
}

export default function Notification(props) {

  const { state, actions } = useContext(AlertContext);
  const handleClose = (alert) => {
    actions.removeAlert(alert);
  };
  return (
    <Box sx={{
      position: "fixed",
      right: '2vw',
      bottom: '2vw',
      zIndex: 2000
    }}>
      {state?.alerts.length > 0 &&
        state.alerts.map((alert, index) => (
          <SnackbarProvider
            key={alert.id + index}
            alert={alert}
            actions={actions}
            handleClose={handleClose}
            {...props}
          />
        ))}
    </Box>
  );
}

function SnackbarProvider({ duration = 1500, alert, handleClose }) {
  useEffect(() => {
    const timer = setTimeout(() => handleClose(alert), duration);
    return () => {
      clearTimeout(timer);
    };
  }, [alert, duration, handleClose]);

  return (
    <MuiAlert
      sx={{
        marginBottom: '1vw',
      }}
      onClose={() => handleClose(alert)}
      id={alert.id}
      elevation={6}
      variant="filled"
      severity={alert.type}
    >
      <AlertTitle>{alert.title}</AlertTitle>
      {alert.text}
    </MuiAlert>
  );
}
