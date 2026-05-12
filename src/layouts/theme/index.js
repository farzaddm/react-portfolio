import {createTheme} from "@mui/material";

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#9e9e9e",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
    divider: "#2c2c2c",
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0, // Specifically for cards
          backgroundColor: "#121212",
          border: "1px solid #2c2c2c",
        },
      },
    },
  },
});

export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#666666",
    },
    background: {
      default: "#ffffff",
      paper: "#fafafa",
    },
    text: {
      primary: "#000000",
      secondary: "#666666",
    },
    divider: "#e0e0e0",
  },
  typography: {
    fontFamily: "vazir, roboto",
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: "1px solid #e0e0e0",
        },
      },
    },
  },
});
