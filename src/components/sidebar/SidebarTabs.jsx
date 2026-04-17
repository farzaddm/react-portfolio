import {Tab, Tabs, useTheme} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContent from "../../context/";
import {tabsData} from "../data/tabsData.sidebar";


const SidebarTabs = () => {
  const {setDrawerOpen, pageNumber, handlePageNumber} = useContext(MainContent);
  const tabs = tabsData();
  const theme = useTheme();

  return (
      <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={pageNumber}
            indicatorColor={theme.palette.mode === "dark" ? "secondary" : "primary"} textColor={theme.palette.mode === "dark" ? "secondary" : "primary"}
            onChange={handlePageNumber}>
        {tabs.map((tab, index) => (
            <Tab label={tab.label} icon={tab.icon} iconPosition="start" key={index}
                 sx={{
                   "&.MuiTab-root": {minHeight: 50},
                   backgroundColor: theme.palette.mode === "dark" ? grey[800] : grey[500],
                   my: 0.5,
                   mx: 1,
                   borderRadius: 2,
                   color: "text.primary",
                 }}
                 onClick={() => setDrawerOpen(false)} {...tab}/>
        ))}
      </Tabs>
  )
}

export default SidebarTabs;