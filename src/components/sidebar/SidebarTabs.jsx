import {Tab, Tabs} from "@mui/material";
import {grey} from "@mui/material/colors";
import {useContext} from "react";
import MainContent from "../../context/";
import {tabsData} from "../data/tabsData.sidebar";


const SidebarTabs = () => {
  const {setDrawerOpen, pageNumber, handlePageNumber} = useContext(MainContent);
  const tabs = tabsData();
  return (
      <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={pageNumber}
            onChange={handlePageNumber}>
        {tabs.map((tab, index) => (
            <Tab label={tab.label} icon={tab.icon} iconPosition="start" key={index}
                 sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
                 onClick={() => setDrawerOpen(false)} {...tab}/>
        ))}
      </Tabs>
  )
}

export default SidebarTabs;