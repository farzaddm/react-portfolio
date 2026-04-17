import {ThemeProvider} from "@mui/material/styles";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider} from "react-helmet-async";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import {lightTheme, darkTheme} from "./theme";
import {Grid} from "@mui/material";

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
});

const MainLayout = ({children, mode}) => {
  return (
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
          <HelmetProvider>
            <Grid container sx={{height: "100vh"}}>
              {children}
            </Grid>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
  )
};

export default MainLayout;