import {Avatar, Box, Typography} from "@mui/material";
import avatar from "../../assets/pictures/avatar/coat.jpg";
import {RandomReveal} from "react-random-reveal";
import {persianAlphabets, socialMedias} from "../../constants";
import {useState} from "react";
import SocialMedia from "../data/SocialMedia";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  return (
      <>
        <Avatar src={avatar} variant="rounded"
                sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>

        <Typography variant="h6" color="whitesmoke">
          <RandomReveal isPlaying characters="فرزاد دهقان منشادی" duration={1.5} characterSet={persianAlphabets}
                        onComplete={() => setStart(true)}/>
        </Typography>

        {start && (
            <Typography variant="caption" color="gray">
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