let rtlTextFiled = () => {
  return {
    "& label": {
      transformOrigin: (props) =>
        `${props.palette.ltr ? "left !important" : "right !important"}`,
      right: (props) =>
        `${props.palette.ltr ? "inherit !important" : "1.75rem  !important"}`,
    },
    "& legend": {
      textAlign: (props) =>
        `${props.palette.ltr ? "left !important" : "right !important"}`,
    },
  };
};

export default rtlTextFiled;
