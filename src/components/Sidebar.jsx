import {Box, Drawer, Fab, Grid} from "@mui/material";
import {grey, red} from "@mui/material/colors";
import {useState} from "react";
import DrawerContent from "./ui/DrawerContent";
import {MenuRounded} from "@mui/icons-material";

const Sidebar = ({value, handleChange}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  }

  return (
      <Grid size={{xs: 0, sm: 0, md: 3, lg: 3, xl: 2}} sx={{backgroundColor: grey[900]}}>
        <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" }}} >
          <Fab aria-label="sidbar" size="small" sx={{m:2, backgroundColor: red[500]}} onClick={handleDrawerToggle}>
            <MenuRounded/>
          </Fab>
        </Box>
        <DrawerContent value={value} handleChange={handleDrawerToggle}/>
        <Drawer open={drawerOpen} onClose={handleDrawerToggle} sx={{
          "& .MuiDrawer-paper": {width: 300},
          display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none"},
        }}>
          <DrawerContent value={value} handleChange={handleDrawerToggle}/>
        </Drawer>
      </Grid>
  );
};

export default Sidebar;