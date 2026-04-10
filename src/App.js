import MainLayout from "./layouts/main.layout";
import {Sidebar} from "./components/sidebar";
import PagesContainer from "./containers/Pages.container";
import {useState} from "react";
import Page from "./pages/components/Page";
import {Box, Typography} from "@mui/material";
import SidebarContainer from "./containers/Sidebar.container";
import MainContext from "./context/";
import {DrawerActionButton} from "./components/drawer";

import pic3 from "./assets/pictures/background/pic3.jpg";


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
          <DrawerActionButton/>
          <PagesContainer>
            <Page index={0}>
              <Box sx={{
                backgroundImage: `url(${pic3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: '100vh'
              }}>
                <Typography variant="h5" sx={{textAlign: "center"}}>Home</Typography>
              </Box>
            </Page>
            <Page index={1}>
              <Typography variant="h5" sx={{textAlign: "center"}}>About me</Typography>
            </Page>
            <Page index={2}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Resume</Typography>
            </Page>
            <Page index={3}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Works</Typography>
            </Page>
            <Page index={4}>
              <Typography variant="h5" sx={{textAlign: "center"}}>Contacts me</Typography>
            </Page>
          </PagesContainer>
        </MainLayout>
      </MainContext.Provider>
  );
}

export default App;
