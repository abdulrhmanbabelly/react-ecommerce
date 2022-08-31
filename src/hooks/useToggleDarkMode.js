import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/features/darkMode/darkModeSlice";

const useToggleDarkMode = () => {
  const dispatch = useDispatch();

  let toggle = () => {
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "false") darkMode = true;
    else darkMode = false;
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
    dispatch(toggleDarkMode())
  }

  return { toggle };

};
export default useToggleDarkMode;
