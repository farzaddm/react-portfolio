import {Avatar, Box, Divider, Grid, Typography} from "@mui/material";
import {grey} from "@mui/material/colors";

const Sidebar = () => {
  return (
      <Grid size={{xs: 0, sm: 0, md: 3, lg: 3, xl: 2}} sx={{backgroundColor: grey[900]}}>
        <Box sx={{justifyContent: "center", textAlign: "center", mt: 2}}>
          <Avatar src={require("../../assets/avatar.png")} variant="rounded"
                  sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>
          <Typography variant="h6" color="whitesmoke">فرزاد دهقان منشادی</Typography>
          <Typography variant="caption" color="whitesmoke">
            دانشجوی مهندسی کامپیوتر دانشگاه علم و صنعت ایران
          </Typography>
          <Divider variant="middle" color={grey[900]}/>
        </Box>
      </Grid>
  );
};

export default Sidebar;