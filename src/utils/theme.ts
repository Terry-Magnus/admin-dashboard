import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6C5DD3",
      light: "#EFE5FF",
      dark: "#5B05E7",
    },
    secondary: {
      main: "#444444",
      light: "#8f8f8f",
      dark: "#1e1e1e",
    },
    error: {
      main: "#eb5757",
      light: "#ffcdcd",
      dark: "#d81515",
    },
    success: {
      main: "#2e7d32",
      light: "#E7F6EC",
      dark: "#036B26",
    },
  },
  typography: {
    fontFamily: "Inter",
    subtitle2: {
      color: "#718096",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          // Set text transform to none for all Button components
        },
      },
    },
  },
});

export default theme;
