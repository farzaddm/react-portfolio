import {useEffect, useState} from "react";
import {
  Box,
  Button,
  Card, CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  InputAdornment,
  Slide,
  TextField,
  Typography,
  useTheme
} from "@mui/material";
import {AccountCircle, EmailRounded, Face6Rounded, SubjectRounded} from "@mui/icons-material";
import worldMap from "../assets/pictures/background/map.svg"

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);

  return (
      <Card sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
      }}>
        <CardContent>
          <Slide direction="down" in={loading} timeout={500}>
            <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "success.main"}}}>
              <Chip color="success" icon={<AccountCircle/>} sx={{p: 3}} label={
                <Typography variant="body1" color="whitesmoke" sx={{textAlign: "center"}}>
                  ارتباط با من
                </Typography>
              }/>
            </Divider>
          </Slide>

          <Grid container justifyContent="center">
            <Grid size={{xs: 12, sx: 12, md: 8}}>
              <Card sx={{justifyContent: "center", alignItems: "center", mt: 4}}>
                <form autoComplete="off">
                  <CardContent>
                    <Grid container>
                      <Grid size={{xs: 12}} sx={{direction: "ltr"}}>
                        <Grid container spacing={2}>
                          <Grid size={{xs: 12, md: 6}}>
                            <TextField fullWidth size="small" color="warning" label="نام و نام خانوادگی"
                                       name="fullname" variant="outlined" slotProps={{
                              input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                      <Face6Rounded/>
                                    </InputAdornment>
                                )
                              }
                            }}
                            />
                          </Grid>
                          <Grid size={{xs: 12, md: 6}}>
                            <TextField fullWidth size="small" color="warning" label="ادرس ایمیل"
                                       name="email" variant="outlined" slotProps={{
                              input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                      <EmailRounded/>
                                    </InputAdornment>
                                )
                              }
                            }}/>
                          </Grid>
                          <Grid size={{xs: 12, md: 12}}>
                            <TextField fullWidth size="small" color="warning" label="عنوان"
                                       name="subject" variant="outlined" slotProps={{
                              input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                      <SubjectRounded/>
                                    </InputAdornment>
                                )
                              }
                            }}/>
                          </Grid>
                          <Grid size={{xs: 12, md: 12}}>
                            <TextField fullWidth multiline rows={6} size="small" color="warning" label="متن پیام"
                                       name="message" variant="outlined"/>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions sx={{alignItems: "end", flexDirection: "column"}}>
                    <Button type="submit" variant="contained" fullWidth color="success" sx={{mt: 2}}>کلیک کن</Button>
                  </CardActions>
                </form>

              </Card>
            </Grid>
          </Grid>

          <Box
              sx={{
                position: "relative",
                width: "80%",
                margin: "0 auto",
                minHeight: "400px",
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: 0,
                mt: 5
              }}
          >
            <Slide direction="up" in={loading} timeout={500}>
              <Box sx={{textAlign: "center", p: 4}}>
                <Typography variant="h6" sx={{
                  textAlign: "center",
                  mb: 2,
                  color: "black",
                  fontWeight: "bold",
                  display: {xs: "none", sm: "none", md: "block"}
                }}
                >
                  بیا در مورد همه چی باهم صحبت کنیم
                </Typography>
                <Typography variant="body1" sx={{color: "black", display: {xs: "none", sm: "none", md: "block"}}}>
                  <a href="mailto:farzad.d.m84@gmail.com" style={{color: "tomato", fontWeight: "bold"}}>
                    ایمیل
                  </a>{" "}
                  به من بزن 👋🏻
                </Typography>
              </Box>
            </Slide>
          </Box>

        </CardContent>


      </Card>
  );
};

export default Contact;