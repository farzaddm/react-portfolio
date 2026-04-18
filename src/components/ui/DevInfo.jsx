import {Box, Typography} from "@mui/material";

const DevInfo = ({ icon: Icon, children }) => {
  return (
      <Box sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        py: 1.5,
        borderBottom: "1px solid rgba(0,0,0,0.06)",
      }}>
        <Icon sx={{color: "black"}}/>
        <Typography variant="body1" color="black">
          {children}
        </Typography>
      </Box>
  );
};

export default DevInfo;