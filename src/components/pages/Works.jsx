import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Slide,
  Typography
} from "@mui/material";
import {useEffect, useState} from "react";
import {SettingsEthernetRounded} from "@mui/icons-material";
import {worksDetails} from "../../constants";
import {TitleHeader} from "../ui";


const Works = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
      <Card sx={{height: "100vh", backgroundColor: "background.default", overflow: "scroll"}}>
        <CardContent>
          <Slide direction="down" in={loading} timeout={500}>
            <Box>
              <TitleHeader color={"info"} icon={<SettingsEthernetRounded/>}>کارهای من</TitleHeader>
            </Box>
          </Slide>

          <Grid container sx={{mx: 3}}>
            {worksDetails.map((item, index) => (
                <Grid key={index} size={{xs: 12, sm: 6, md: 6, lg: 4, xl: 4}} sx={{px: 2, mt: 2}}>
                  <Slide direction="up" in={loading} timeout={(index + 1) * 150}>
                    <Card sx={{maxWidth: 345, backgroundColor: "steelblue"}}>
                      <CardActionArea>
                        <CardMedia component="img" height="250" width="200" image={item.image} alt={item.title}/>
                        <CardContent>
                          <Typography variant="h6" color="white" textAlign="left" gutterBottom>
                            {item.title}
                          </Typography>

                          {item.technologies && (
                              <Box sx={{mb: 1, display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                                {item.technologies.slice(0, 3).map((item, index) => (
                                    <Chip key={index} label={item} size="small"
                                          sx={{fontSize: '10px', height: '20px'}}/>
                                ))}
                                {item.technologies.length > 3 && (
                                    <Chip label={`+${item.technologies.length - 3}`} size="small"
                                          sx={{fontSize: '10px', height: '20px'}}/>
                                )}
                              </Box>
                          )}

                          <Typography variant="body2" color="text.secondary" textAlign="left" gutterBottom sx={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,  // Show 2 lines
                            WebkitBoxOrient: 'vertical',
                          }}
                          >
                            {item.description}
                          </Typography>

                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button href={item.link} size="small" color="primary" target="_blank">اطلاعات بیشتر</Button>
                      </CardActions>
                    </Card>
                  </Slide>
                </Grid>
            ))}
          </Grid>

        </CardContent>
      </Card>
  );
}

export default Works;