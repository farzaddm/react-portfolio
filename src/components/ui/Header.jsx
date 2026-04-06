import {AppBar, Toolbar, Button, useScrollTrigger} from "@mui/material";
import React from "react";

const Header = () => {
  function ElevationScroll(props) {
    const {children} = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    })

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0
    });
  }

  return (
      <>
        <ElevationScroll>
          <AppBar position="absolute">
            <Toolbar>
              <Button variant="primary">کلیک کن</Button>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
      </>
  )
}

export default Header;