import {createTheme} from "@mui/material";


export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light",
    primary: {
      main: "#8be9fd"
    }
  },
  typography: {
    fontFamily: "vazir, roboto",
  }
});

export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd"
    }
  },
  typography: {
    fontFamily: "vazir, roboto",
  }
});