import MainLayout from "./layouts/main.layout";
import {Sidebar} from "./components/sidebar";
import ContentContainer from "./containers/Content.container";
import {useState} from "react";
import TabPanel from "./components/TabPanel";
import {Typography} from "@mui/material";
import SidebarContainer from "./containers/Sidebar.container";
import MainContext from "./context/";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handlePageNumber = (event, newValue) => {
    setPageNumber(newValue);
  }

  return (
      <MainContext.Provider value={{pageNumber, drawerOpen, setDrawerOpen, handlePageNumber}}>
        <MainLayout>
          <SidebarContainer>
            <Sidebar/>
          </SidebarContainer>
          <ContentContainer>
            <TabPanel index={0}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Home</Typography>
            </TabPanel>
            <TabPanel index={1}>
              <Typography variant="h5" sx={{textAlign: "center"}}>About me</Typography>
            </TabPanel>
            <TabPanel index={2}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Resume</Typography>
            </TabPanel>
            <TabPanel index={3}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Works</Typography>
            </TabPanel>
            <TabPanel index={4}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Contacts me</Typography>
            </TabPanel>
          </ContentContainer>
        </MainLayout>
      </MainContext.Provider>
  );
}

export default App;
