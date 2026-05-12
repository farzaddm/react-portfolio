import {Box, Card, CardContent, Chip, Grid, Tooltip, Typography} from "@mui/material";
import {
  HomeRepairServiceRounded, SchoolRounded, SelfImprovementRounded, LocationCityRounded,
  EmailRounded, PhoneRounded, Person4Rounded, CalendarMonthRounded
} from "@mui/icons-material";
import {DevInfo, Skill, TimelineCustom, TitleHeader} from "../ui";
import {devSkills, interestingDetails} from "../../constants";
import {useEffect, useState} from "react";
import CountUp from "react-countup";
import {educationTimeline} from "../../constants/details";
import AboutText from "../ui/AboutText";

const About = () => {
  const {htmlSkill, nodeSkill, gitSkill, pythonSkill, reactSkill, golangSkill, javascriptSkill, postgresSkill, tailwindSkill, typescriptSkill} = devSkills;
  const [node, setNode] = useState(0);
  const [html, setHtml] = useState(0);
  const [git, setGit] = useState(0);
  const [python, setPython] = useState(0);
  const [react, setReact] = useState(0);
  const [golang, setGolang] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [postgres, setPostgres] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  const [typescript, setTypescript] = useState(0);


  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => setLoading(false);
  }, []);


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

      setReact(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, reactSkill.value);
      });

      setPython(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, pythonSkill.value);
      });

      setGolang(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, golangSkill.value);
      });

      setTailwind(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, tailwindSkill.value);
      });

      setJavascript(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, javascriptSkill.value);
      });

      setTypescript(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, typescriptSkill.value);
      });

      setPostgres(oldProgress => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, postgresSkill.value);
      });






    }, 100);
    return () => clearInterval(timer);
  });
  const mm = `
فرزادم. از کودکی به دلیل شغل پدرم مدام در حال جابه‌جایی بودیم و این باعث شد قدرت تطبیق و مدیریت شرایط در من تقویت بشه. علاقه به کامپیوتر از دوران راهنمایی شروع شد؛ از یادگیری فتوشاپ و SketchUp و طراحی نقشه‌های سه‌بعدی برای پروژه‌های معماری خاله‌ام تا شرکت در دوره‌های فنی‌حرفه‌ای. در دانشگاه متوجه فاصله‌ بین درس و بازار کار شدم و از ترم دوم یادگیری JavaScript و Node.js را شروع کردم. تجربه فریلنسری هم داشتم(ربات تلگرام با پایتون) که با وجود سختی‌ها، دید خوبی از فضای کار واقعی بهم داد. حالا آماده‌ام در محیط یک شرکت، مهارت‌هام رو توسعه بدم و چالش‌های جدی‌تری رو تجربه کنم.


`


  return (
      <Card sx={{height: "100vh", backgroundColor: "background.default", overflowY: "scroll"}}>
        <CardContent>
          <Grid container sx={{mx: 3}}>
            <Grid>

              <AboutText>{mm}</AboutText>

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

          <Grid container>
            <Grid sx={{width: 1, mt: 1}}>
              <TitleHeader color={"success"} icon={<SelfImprovementRounded/>}>مهارت های من</TitleHeader>

              <Skill name={nodeSkill.name} icon={nodeSkill.icon} color={nodeSkill.color} value={node}/>
              <Skill name={pythonSkill.name} icon={pythonSkill.icon} color={pythonSkill.color} value={python}/>
              <Skill name={gitSkill.name} icon={gitSkill.icon} color={gitSkill.color} value={git}/>
              <Skill name={postgresSkill.name} icon={postgresSkill.icon} color={postgresSkill.color} value={postgres}/>
              <Skill name={javascriptSkill.name} icon={javascriptSkill.icon} color={javascriptSkill.color} value={javascript}/>
              <Skill name={typescriptSkill.name} icon={typescriptSkill.icon} color={typescriptSkill.color} value={typescript}/>
              <Skill name={htmlSkill.name} icon={htmlSkill.icon} color={htmlSkill.color} value={html}/>
              <Skill name={reactSkill.name} icon={reactSkill.icon} color={reactSkill.color} value={react}/>
              <Skill name={tailwindSkill.name} icon={tailwindSkill.icon} color={tailwindSkill.color} value={tailwind}/>
              <Skill name={golangSkill.name} icon={golangSkill.icon} color={golangSkill.color} value={golang}/>

            </Grid>
          </Grid>

        </CardContent>
      </Card>
  )
}

export default About;