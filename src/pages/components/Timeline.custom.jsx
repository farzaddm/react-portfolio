import {Slide, Typography} from "@mui/material";
import {Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {HomeRepairServiceRounded} from "@mui/icons-material";

const TimelineCustom = ({loading, data, color}) => {
  return (
      <Timeline position="right" sx={{direction: "ltr"}}>
        {data.map((item, index) => (<Slide direction="up" in={loading} timeout={(index + 1) * 150}>
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color={color} variant="outlined">
                <HomeRepairServiceRounded color={color}/>
              </TimelineDot>
              {index < data.length - 1 && <TimelineConnector/>}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="caption" color="grey">
                {item.year}
              </Typography>
              <Typography variant="body1" color="black" sx={{wordBreak: 'break-word'}}>
                {item.cert}
              </Typography>
              <Typography variant="body2" color="black" sx={{wordBreak: 'break-word'}}>
                {item.major}
              </Typography>
              <Typography variant="body2" color="black" sx={{wordBreak: 'break-word'}}>
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>))}
      </Timeline>
  );
};

export default TimelineCustom;