import {Card, CardContent, Chip, Divider, Grid, Typography} from "@mui/material";
import {HomeRepairServiceRounded, SchoolRounded, SettingsEthernetRounded} from "@mui/icons-material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {educationDetails} from "../constants/details";


const Resume = () => {
  return (
      <Card sx={{height: "100vh", backgroundColor: "whitesmoke", overflowY: "scroll"}}>
        <CardContent>
          <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "error.main"}}}>
            <Chip color="error" icon={<SettingsEthernetRounded/>} sx={{p: 3}} label={
              <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                رزومه من
              </Typography>
            }/>
          </Divider>
          <Grid container sx={{mt:4}}>
            <Grid size={{xs:6}}>
              <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "warning.main"}}}>
                <Chip color="warning" icon={<HomeRepairServiceRounded/>} sx={{p: 3}} label={
                  <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                    تجربیات
                  </Typography>
                }/>
              </Divider>

              <Timeline position="right" sx={{direction: "ltr"}}>
                {educationDetails.map((item, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot color="warning" variant="outlined">
                          <HomeRepairServiceRounded color="warning"/>
                        </TimelineDot>
                        {index < educationDetails.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="grey">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                ))}
              </Timeline>


            </Grid>
            <Grid size={{xs:6}}>
              <Divider textAlign="center" sx={{"&::before, &::after": {borderColor: "info.main"}}}>
                <Chip color="info" icon={<SchoolRounded/>} sx={{p: 3}} label={
                  <Typography variant="body1" color="black" sx={{textAlign: "center"}}>
                    تحصیلات
                  </Typography>
                }/>
              </Divider>

              <Timeline position="right" sx={{direction: "ltr"}}>
                {educationDetails.map((item, index) => (
                    <TimelineItem key={index}>
                      <TimelineSeparator>
                        <TimelineDot color="info" variant="outlined">
                          <SchoolRounded color="info"/>
                        </TimelineDot>
                        {index < educationDetails.length - 1 && <TimelineConnector />}
                      </TimelineSeparator>
                      <TimelineContent>
                        <Typography variant="caption" color="grey">
                          {item.year}
                        </Typography>
                        <Typography variant="body1" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.cert}
                        </Typography>
                        <Typography variant="body2" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.major}
                        </Typography>
                        <Typography variant="body2" color="black" sx={{ wordBreak: 'break-word' }}>
                          {item.place}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                ))}
              </Timeline>

            </Grid>
          </Grid>
        </CardContent>
      </Card>
  );
}

export default Resume;