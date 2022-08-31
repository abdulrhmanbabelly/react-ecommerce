import { useContext } from "react";
import { AlertContext } from "../contexts/alertContext";

let useNotification = () => {
  const { actions } = useContext(AlertContext);
  const triggerNotification = (text, type) => {
    actions.addAlert({
      text: text,
      type: type,
      id: Date.now(),
    });
  };

  return { triggerNotification };
};

export default useNotification;
