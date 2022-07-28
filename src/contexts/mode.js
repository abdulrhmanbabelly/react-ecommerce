const themes = {
    light: {
        foreground: "#000000",
        background: "#fff",
        background2 : "#fff",
        dark : false
      },
      dark: {
        foreground: "#ffffff",
        background: "#222222",
        background2 : "#999999",
        dark : true
      }
}

const toggleTheme = (darkMode, setDarkMode) => {
  if (!darkMode) setDarkMode(true);
  else setDarkMode(false);
}

export { themes, toggleTheme };