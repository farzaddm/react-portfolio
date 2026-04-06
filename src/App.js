import './App.css';
import {Button} from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "vazir, roboto",
  }
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin]
});


function App() {
  return (
      <CacheProvider value={cacheRTL}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Helmet>
              <title>وب سایت شخصی فرزاد</title>
            </Helmet>
            <div className="App">
              <Button variant="contained">کلیک کن</Button>
            </div>
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
  );
}

export default App;
