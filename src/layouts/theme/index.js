import {createTheme} from "@mui/material";


export const index = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark",
    primary: {
      main: "#8be9fd"
    }
  },
  typography: {
    fontFamily: "vazir, roboto",
    button: {
      fontFamily: "tahoma",
    }
  }
});