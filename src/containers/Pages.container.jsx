import {Grid} from "@mui/material";


const PagesContainer = ({children}) => {
  return (
      <Grid size={{xs: 12, sm: 12, md: 9, lg: 9, xl: 10}} sx={{backgroundColor: "secondary.main"}}>
        {children}
      </Grid>
  )
}

export default PagesContainer;