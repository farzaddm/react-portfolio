import {Avatar, Box, Typography, useTheme} from "@mui/material";
import avatar from "../../assets/pictures/avatar/coat.jpg";
import {RandomReveal} from "react-random-reveal";
import {persianAlphabets, socialMedias} from "../../constants";
import {useState} from "react";
import SocialMedia from "../data/SocialMedia";
import ThemeActionButton from "../ThemeActionButton";
import {grey} from "@mui/material/colors";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);
  const theme = useTheme();


  return (
      <>
        <ThemeActionButton/>

        <Avatar src={avatar} variant="rounded"
                sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>

        <Typography variant="h6" color="text.primary">
          <RandomReveal isPlaying characters="فرزاد دهقان منشادی" duration={1.5} characterSet={persianAlphabets}
                        onComplete={() => setStart(true)}/>
        </Typography>

        {start && (
            <Typography variant="caption" color={theme.palette.mode === "dark" ? grey[500] : grey[800]}>
              دانشجوی کامپیوتر علم و صنعت ایران
            </Typography>
        )}

        <Box component="div" sx={{m: "0 auto", textAlign: "center"}}>
          {socialMedias.map((media, index) => (
              <SocialMedia key={index} media={media}/>
          ))}
        </Box>
      </>
  )
}

export default SidebarHeader;