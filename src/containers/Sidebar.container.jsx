import {Grid} from "@mui/material";
import {grey} from "@mui/material/colors";


const SidebarContainer = ({children}) => {
  return (
      <Grid size={{xs: 0, sm: 0, md: 3, lg: 3, xl: 2}}
            sx={{backgroundColor: grey[900], height: "100vh", overflowY: "auto", overflowX: "hidden"}}>
        {children}
      </Grid>
  );
}

export default SidebarContainer;