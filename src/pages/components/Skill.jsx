import {Badge, Box, Chip, Divider, LinearProgress, Typography} from "@mui/material";

const Skill = ({icon, color, name, value}) => {
  return (
      <>
      <Divider textAlign="left" sx={{
        "&::before, &::after": {
        borderColor: `${color}.main`
      },
        mt: 1
      }}>
        <Chip icon={
          <Box component="img" src={icon} sx={{height: 30}}/>
        } color={color} label={name} sx={{color: "black", p: 3}}/>
      </Divider>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ width: "100%", mr: 1 }}>
            <LinearProgress variant="determinate" value={value} color={color} sx={{height: 10, borderRadius: 2}} />
          </Box>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="body2" color="black">
              <Badge variant="standard" color={color} badgeContent={`${Math.round(value)}%`} sx={{ml:7}}/>
            </Typography>
          </Box>
        </Box>
      </>
  )
}

export default Skill;