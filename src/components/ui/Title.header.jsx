import {Chip, Divider, Typography} from "@mui/material";


const TitleHeader = ({icon, color, position="center", children}) => {
  return (
      <Divider textAlign={position} sx={{"&::before, &::after": {borderColor: `${color}.main`}, mx: 0.5}}>
        <Chip color={color} icon={icon} sx={{p: 3}} label={
          <Typography variant="body1" color="whitesmoke" sx={{textAlign: "center"}}>{children}</Typography>
        }/>
      </Divider>
  );
};

export default TitleHeader;