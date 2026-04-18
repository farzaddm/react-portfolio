import {Box, Fab, useTheme} from "@mui/material";
import {useContext} from "react";
import MainContext from "../../context";
import {NightlightOutlined, WbSunnyOutlined} from "@mui/icons-material";


const ThemeActionButton = () => {
  const theme = useTheme();
  const {handelThemeChange} = useContext(MainContext);

  return (
      <Box sx={{position: "absolute", display: {xs: "none", md: "block"}}}>
        <Fab aria-label="ThemeChange" variant="extended" size="small" color="secondary" onClick={handelThemeChange}
        sx={{ml:2, color: "whitesmoke"}}>
          {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{mr: 1}}/> : <NightlightOutlined sx={{mr: 1}}/>}
          {theme.palette.mode === "dark" ? "Light" : "Dark"}
        </Fab>
      </Box>
  );
};

export default ThemeActionButton;