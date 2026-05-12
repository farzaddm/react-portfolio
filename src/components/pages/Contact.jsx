import {useEffect, useState} from "react";
import {Box, Card, CardContent, Slide, Typography, useTheme} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import worldMap from "../../assets/pictures/background/map.svg"
import {ContactForm, TitleHeader} from "../ui";

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
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      }}>
        <CardContent>
          <Slide direction="down" in={loading} timeout={500}>
            <Box>
              <TitleHeader color={"success"} icon={<AccountCircle/>}>ارتباط با من</TitleHeader>
            </Box>
          </Slide>

          <ContactForm/>

          <Box
              sx={{
                position: "relative",
                width: "80%",
                margin: "0 auto",
                minHeight: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                zIndex: 0,
                mt: 4,
                "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url(${worldMap})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                filter: theme.palette.mode === "dark" ? "invert(1)" : "none",
                zIndex: -1,
              }
              }}
          >
            <Slide direction="up" in={loading} timeout={500}>
              <Box sx={{textAlign: "center", p: 4}}>
                <Typography variant="h6" sx={{
                  textAlign: "center",
                  mb: 2,
                  color: "text.primary",
                  fontWeight: "bold",
                }}
                >
                  بیا در مورد همه چی باهم صحبت کنیم
                </Typography>
                <Typography variant="body1" sx={{color: "text.secondary"}}>
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