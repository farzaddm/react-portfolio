import {Avatar, Card, CardContent, Chip, Divider, Grid, Typography} from "@mui/material";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import casual from "../assets/pictures/avatar/casual.jpg";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import {devSkills} from "../constants";

const About = () => {
  const {html, node} = devSkills;
  return (
      <Card sx={{height: "100vh", backgroundColor: "whitesmoke"}}>
        <CardContent>
          <Grid container sx={{mx: 3}}>
            <Grid size={{xs: 12, sm: 12, md: 8, lg: 8, xl: 8}}>
              <Divider textAlign="left" sx={{
                "&::before, &::after": {
                  borderColor: "primary.main"
                }
              }}>
                <Chip color="primary" icon={<CodeRounded/>} label={
                  <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                    دانشجوی مهندسی کامپیوتر و توسعه دهنده فول استک
                  </Typography>
                } sx={{p: 3}}></Chip>
              </Divider>

              <DevInfo>نام و نام خانوادگی: فرزاد دهقان منشادی</DevInfo>
              <DevInfo>سن: ۲۱</DevInfo>
              <DevInfo>شهر: یزد/تهران</DevInfo>
              <DevInfo>آدرس ایمیل: farzad.d.m84@gmail.com</DevInfo>
              <DevInfo>شماره موبایل: ۰۹۳۰۵۵۸۴۱۴۹</DevInfo>

            </Grid>
            <Grid size={{xs: 0, sm: 0, md: 4, lg: 4, xl: 4}}>
              <Avatar src={casual} variant="rounded" sx={{
                height: 300, width: 250, margin: "0 auto", display: {
                  xl: "block", lg: "block", md: "block", sm: "none", xs: "none"
                }
              }}>FD</Avatar>
            </Grid>
          </Grid>

          <Grid container>
            <Grid sx={{width: 1, mt: 1}}>
              <Divider textAlign="center" sx={{
                "&::before, &::after": {
                  borderColor: "secondary.main"
                }
              }}>
                <Chip color="secondary" icon={<SelfImprovementRounded/>} label={
                  <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                    مهارت های من
                  </Typography>
                } sx={{p: 3}}></Chip>
              </Divider>
              <Skill name={html.name} icon={html.icon} color={html.color} value={60}/>
              <Skill name={node.name} icon={node.icon} color={node.color} value={95}/>

            </Grid>


          </Grid>

        </CardContent>
      </Card>
  )
}

export default About;