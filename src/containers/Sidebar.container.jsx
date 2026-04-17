import {Grid, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";


const SidebarContainer = ({children}) => {
  const theme = useTheme();
  return (
      <Grid size={{xs: 0, sm: 0, md: 3, lg: 3, xl: 2}}
            sx={{
              backgroundColor: theme.palette.mode === "dark" ? grey[900] : grey[400],
              height: "100vh", overflowY: "auto", overflowX: "hidden"
            }}>
        {children}
      </Grid>
  );
}

export default SidebarContainer;