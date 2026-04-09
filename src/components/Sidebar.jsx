import {Avatar, Box, Divider, Grid, Tab, Tabs, Typography} from "@mui/material";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  ConnectWithoutContactRounded,
  TerminalRounded, FavoriteRounded, CopyrightRounded
} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

const Sidebar = ({value, handleChange}) => {

  const tabParams = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    }
  }
  return (
      <Grid size={{xs: 0, sm: 0, md: 3, lg: 3, xl: 2}} sx={{backgroundColor: grey[900]}}>
        <Box sx={{justifyContent: "center", textAlign: "center", mt: 2}}>
          <Avatar src={require("../assets/avatar.png")} variant="rounded"
                  sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>
          <Typography variant="h6" color="whitesmoke">فرزاد دهقان منشادی</Typography>
          <Typography variant="caption" color="whitesmoke">
            دانشجوی مهندسی کامپیوتر دانشگاه علم و صنعت ایران
          </Typography>

          <Divider variant="middle" color={grey[900]}/>
          <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={value}
                onChange={handleChange} >
            <Tab label="خانه" icon={<HomeRounded/>} iconPosition="start" {...tabParams(0)}/>
            <Tab label="درباره من" icon={<FaceRounded/>} iconPosition="start" {...tabParams(1)}/>
            <Tab label="رزومه من" icon={<TextSnippetRounded/>} iconPosition="start" {...tabParams(2)}/>
            <Tab label="نمونه کارها" icon={<TerminalRounded/>} iconPosition="start" {...tabParams(3)}/>
            <Tab label="ارتباط با من" icon={<ConnectWithoutContactRounded/>} iconPosition="start" {...tabParams(4)}/>
          </Tabs>

          <Divider variant="middle" color={grey[900]}/>
          <Box sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "center",
            height: 100
          }}>
            <Typography variant="subtitle2" color="whitesmoke">
              طراحی شده با{" "} <FavoriteRounded sx={{verticalAlign: "middle", color: "tomato", height: 20}}/>
            </Typography>
            <Typography variant="caption" color="whitesmoke" sx={{mt: 2}}>
              کپی رایت ۱۴۰۵{" "}<CopyrightRounded sx={{verticalAlign: "middle", height: 20}}/>
            </Typography>
          </Box>
        </Box>
      </Grid>
  );
};

export default Sidebar;