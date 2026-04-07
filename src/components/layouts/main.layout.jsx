import {ThemeProvider} from "@mui/material/styles";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider} from "react-helmet-async";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import {theme} from "../ui/theme";
import {Grid, Typography} from "@mui/material";
import Sidebar from "../ui/Sidebar";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
});

const MainLayout = ({children}) => {
  return (
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Grid container sx={{height: "100vh"}}>
              <Sidebar/>
              <Grid size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 10}} sx={{backgroundColor: "primary.main"}}>
                <Typography variant="h5" sx={{textAlign: "center"}}>main contain</Typography>
                {children}
              </Grid>
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
  )
};

export default MainLayout;