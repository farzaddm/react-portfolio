import MainLayout from "./layouts/main.layout";
import {Sidebar} from "./components/sidebar";
import PagesContainer from "./containers/Pages.container";
import {useEffect, useState} from "react";
import Page from "./pages/components/Page";
import {Typography, useMediaQuery, useTheme} from "@mui/material";
import SidebarContainer from "./containers/Sidebar.container";
import MainContext from "./context/";
import {DrawerActionButton} from "./components/drawer";
import {Home, About, Resume} from "./pages";


function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);

  useEffect(() => {
    const titles = {
      0: "خانه",
      1: "درباره من",
      2: "رزومه",
      3: "نمونه کارها",
      4: "تماس با من"
    };
    document.title = `وب سایت شخصی | ${titles[pageNumber]}`;
  }, [pageNumber]);

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
              <Home/>
            </Page>
            <Page index={1}>
              <About/>
            </Page>
            <Page index={2}>
              <Resume/>
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
