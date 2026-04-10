import {Drawer} from "@mui/material";
import {useContext} from "react";
import MainContext from "../../context/";
import {SidebarContent} from "../sidebar";

const SidebarDrawer = () => {
  const {drawerOpen, setDrawerOpen} = useContext(MainContext);
  return (
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} sx={{
        "& .MuiDrawer-paper": {width: 300},
        display: {xs: "block", sm: "block", md: "none", lg: "none", xl: "none"},
      }}>
        <SidebarContent/>
      </Drawer>
  )
}

export default SidebarDrawer;