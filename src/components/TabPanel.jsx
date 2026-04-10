import {Box, Typography} from "@mui/material";
import {useContext} from "react";
import MainContext from "../context/"


const TabPanel = ({children, index, ...others}) => {
  const {pageNumber} = useContext(MainContext);
  return (
      <div role="tabpanel" hidden={pageNumber !== index} id={`tabpanel-${index}`}
           aria-labelledby={`sidebar-tab-${index}`} {...others}>
        {pageNumber === index && (
            <Box sx={{p: 3}}>
              <Typography component="div">{children}</Typography>
            </Box>
        )}
      </div>
  );
};

export default TabPanel;