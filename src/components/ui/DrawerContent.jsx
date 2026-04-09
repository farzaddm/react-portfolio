import {Avatar, Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import {
  ConnectWithoutContactRounded, CopyrightRounded,
  FaceRounded, FavoriteRounded,
  HomeRounded,
  TerminalRounded,
  TextSnippetRounded
} from "@mui/icons-material";
import {grey} from "@mui/material/colors";

const DrawerContent = ({value, handleChange, setDrawerOpen}) => {
  const tabParams = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    }
  }

  return (
      <Box sx={{justifyContent: "center", textAlign: "center", mt: 2}}>
        <Avatar src={require("../../assets/avatar.png")} variant="rounded"
                sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>
        <Typography variant="h6" color="whitesmoke">فرزاد دهقان منشادی</Typography>
        <Typography variant="caption" color="whitesmoke">
          دانشجوی مهندسی کامپیوتر دانشگاه علم و صنعت ایران
        </Typography>

        <Divider variant="middle" color={grey[900]}/>
        <Tabs orientation="vertical" variant="scrollable" scrollButtons="auto" allowScrollButtonsMobile value={value}
              onChange={handleChange}>
          <Tab label="خانه" icon={<HomeRounded/>}
               sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
               iconPosition="start" {...tabParams(0)} onClick={() => setDrawerOpen(false)}/>
          <Tab label="درباره من" icon={<FaceRounded/>}
               sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
               iconPosition="start" {...tabParams(1)} onClick={() => setDrawerOpen(false)}/>
          <Tab label="رزومه من" icon={<TextSnippetRounded/>}
               sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
               iconPosition="start" {...tabParams(2)} onClick={() => setDrawerOpen(false)}/>
          <Tab label="نمونه کارها" icon={<TerminalRounded/>}
               sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
               iconPosition="start" {...tabParams(3)} onClick={() => setDrawerOpen(false)}/>
          <Tab label="ارتباط با من" icon={<ConnectWithoutContactRounded/>}
               sx={{"&.MuiTab-root": {minHeight: 50, my: 0.5, mx: 1, backgroundColor: grey[800], borderRadius: 2}}}
               iconPosition="start" {...tabParams(4)} onClick={() => setDrawerOpen(false)}/>
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
  )
}

export default DrawerContent;