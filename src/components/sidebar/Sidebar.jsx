import {SidebarContent} from "./";
import SidebarDrawer from "../drawer/SidebarDrawer";
import DrawerActionButton from "../drawer/DrawerActionButton";

const Sidebar = () => {
  return (
      <>
        <DrawerActionButton/>
        <SidebarContent/>
        <SidebarDrawer/>
      </>
  );
};

export default Sidebar;