import {Avatar, Typography} from "@mui/material";
import avatar from "../../assets/pictures/avatar/avatar.png";

const SidebarHeader = () => {
  return (
      <>
        <Avatar src={avatar} variant="rounded"
                sx={{height: 200, width: 200, margin: "0 auto", display: {xs: 'none', md: 'block', lg: 'block'}}}/>
        <Typography variant="h6" color="whitesmoke">فرزاد دهقان منشادی</Typography>
        <Typography variant="caption" color="whitesmoke">
          دانشجوی مهندسی کامپیوتر دانشگاه علم و صنعت ایران
        </Typography>
      </>
  )
}

export default SidebarHeader;