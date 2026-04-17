import {Avatar, Box, Card, CardContent, Chip, Divider, Grid, Tooltip, Typography} from "@mui/material";
import {CodeRounded, SelfImprovementRounded} from "@mui/icons-material";
import casual from "../assets/pictures/avatar/casual.jpg";
import DevInfo from "./components/DevInfo";
import Skill from "./components/Skill";
import {devSkills, interestingDetails} from "../constants";
import {useEffect, useState} from "react";
import CountUp from "react-countup";

const About = () => {
  const {htmlSkill, nodeSkill, gitSkill} = devSkills;
  const [node, setNode] = useState(0);
  const [html, setHtml] = useState(0);
  const [git, setGit] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNode(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, nodeSkill.value);
      });

      setHtml(oldProgress => {
        const diff = Math.min(Math.random() * 10, 4);
        return Math.min(oldProgress + diff, htmlSkill.value);
      });

      setGit(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, gitSkill.value);
      });

    }, 100);
    return () => clearInterval(timer);
  });


  return (
      <Card sx={{height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll"}}>
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

              <Grid container>
                <Grid size={{xs: 12, sm: 8, md: 9, lg: 9}} display={{xs: "none", sm: "block", md: "block"}}>
                  <DevInfo>نام و نام خانوادگی: فرزاد دهقان منشادی</DevInfo>
                  <DevInfo>سن: ۲۱</DevInfo>
                  <DevInfo>شهر: یزد/تهران</DevInfo>
                  <DevInfo>آدرس ایمیل: farzad.d.m84@gmail.com</DevInfo>
                  <DevInfo>شماره موبایل: ۰۹۳۰۵۵۸۴۱۴۹</DevInfo>
                </Grid>

                <Grid size={{xs: 4, sm: 4, md: 3, lg: 3}}
                      display={{xs: "none", sm: "block", md: "block"}}>
                  {interestingDetails.map((item, index) => (
                      <Box key={index} component="div" sx={{width: 1, mb: 2, mt: 3}}>
                        <Tooltip title={item.toolTipTitle} placement="right" arrow>
                        <Chip icon={item.icon}
                              label={
                                <Typography variant="body1" color="whitesmoke">
                                  <CountUp end={item.total} start={0} duration={2}/>
                                </Typography>
                              }
                              sx={{p: 2, backgroundColor: item.color, width: 1}}/>
                        </Tooltip>
                      </Box>
                  ))}
                </Grid>

              </Grid>


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
              <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html}/>
              <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={node}/>
              <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git}/>
            </Grid>
          </Grid>

        </CardContent>
      </Card>
  )
}

export default About;