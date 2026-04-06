import './App.css';
import {ThemeProvider} from "@mui/material/styles";
import rtlPlugin from "stylis-plugin-rtl";
import {CacheProvider} from "@emotion/react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import createCache from "@emotion/cache";
import {prefixer} from "stylis";
import Header from "./components/ui/Header";
import {theme} from "./components/ui/theme";

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
            <Header />
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
  );
}

export default App;
