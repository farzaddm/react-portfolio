import {Badge, Box, Chip, Divider, LinearProgress, Typography} from "@mui/material";

const Skill = ({icon, color, name, value}) => {
  return (
      <>
        <Divider textAlign="left" sx={{
          "&::before, &::after": {
            borderColor: color
          },
          mt: 1
        }}>
          <Chip icon={
            <Box component="img" src={icon} sx={{height: 30}}/>
          } label={name} sx={{
            p: 3, color: color,
            border: `1px solid ${color}`,
            backgroundColor: `${color}15`,
            fontWeight: 600,

            "& .MuiChip-icon": {
              ml: 1,
            },
          }}/>
        </Divider>
        <Box sx={{display: "flex", alignItems: "center"}}>
          <Box sx={{width: "100%", mr: 1}}>
            <LinearProgress variant="determinate" value={value} sx={{
              height: 10, borderRadius: 2, backgroundColor: `${color}60`,

              "& .MuiLinearProgress-bar": {
                backgroundColor: color,
                borderRadius: 5,
              },
            }}/>
          </Box>
          <Box sx={{minWidth: 35}}>
            <Typography variant="body2" color="black">
              <Badge variant="standard" color={color} badgeContent={`${Math.round(value)}%`} sx={{
                ml: 7,
                "& .MuiBadge-badge": {
                  backgroundColor: color,
                  fontWeight: 600,
                },
              }}
              />
            </Typography>
          </Box>
        </Box>
      </>
  )
}

export default Skill;