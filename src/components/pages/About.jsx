import {Box, Card, CardContent, Chip, Grid, Tooltip, Typography} from "@mui/material";
import {
  HomeRepairServiceRounded, SchoolRounded, LocationCityRounded,
  EmailRounded, PhoneRounded, Person4Rounded, CalendarMonthRounded
} from "@mui/icons-material";
import {DevInfo, SkillsProgress, TimelineCustom, TitleHeader} from "../ui";
import {aboutMeText, interestingDetails} from "../../constants";
import {useEffect, useState} from "react";
import CountUp from "react-countup";
import {educationTimeline} from "../../constants/details";
import AboutText from "../ui/AboutText";

const About = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);


  return (
      <Card sx={{height: "100vh", backgroundColor: "background.default", overflowY: "scroll"}}>
        <CardContent>
          <Grid container sx={{mx: 3}}>
            <Grid>

              <AboutText>{aboutMeText}</AboutText>

              <Grid container>
                <Grid size={{xs: 12, sm: 8, md: 9, lg: 9}} display={{xs: "none", sm: "block", md: "block"}}>
                  <DevInfo icon={Person4Rounded}>نام و نام خانوادگی: فرزاد دهقان منشادی</DevInfo>
                  <DevInfo icon={CalendarMonthRounded}>تاریخ تولد: ۱۳۸۴</DevInfo>
                  <DevInfo icon={LocationCityRounded}>شهر: یزد/تهران</DevInfo>
                  <DevInfo icon={EmailRounded}>آدرس ایمیل: farzad.d.m84@gmail.com</DevInfo>
                  <DevInfo icon={PhoneRounded}>شماره موبایل: ۰۹۳۰۵۵۸۴۱۴۹</DevInfo>
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

          </Grid>

          <Grid container sx={{mt: 4}}>
            <Grid size={{xs: 6}}>
              <TitleHeader color={"warning"} icon={<HomeRepairServiceRounded/>}>تجربیات</TitleHeader>
              <TimelineCustom loading={loading} data={educationTimeline} color="warning"/>
            </Grid>
            <Grid size={{xs: 6}}>
              <TitleHeader color={"info"} icon={<SchoolRounded/>}>تحصیلات</TitleHeader>
              <TimelineCustom loading={loading} data={educationTimeline} color="info"/>
            </Grid>
          </Grid>

          <SkillsProgress />

        </CardContent>
      </Card>
  )
}

export default About;