import { Box, Typography, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

const roadMapData = [
  {
    time: "2023-03",
    header: "DEMO",
    desc: "Cornerstone Round",
  },

  { time: "2023-06", header: "Playable DEMO" },
  { time: "2023-09", header: "Closed Test" },
  { time: "2024-03", header: "Seed Round" },
  { time: "2024-06", header: "IDO" },
  {
    time: "2024-09",
    header: "Public Test",
    desc: "IGO",
  },
  {
    time: "2024-10",
    header: "TGE"
  },
  {
    time: "2024-12",
    header: "Official operation",
  },
];

const MobileTimelineLayout = ({ item }) => (
  <TimelineItem>
    <TimelineOppositeContent>
      <h4>{item.time}</h4>
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineDot sx={{ backgroundColor: "white" }} />
      <TimelineConnector sx={{ backgroundColor: "white" }} />
    </TimelineSeparator>
    <TimelineContent>
      <h4>{item.header}</h4>
      <h4>{item.desc}</h4>
      {item.optional}
      {/* {item.desc} */}
    </TimelineContent>
  </TimelineItem>
);

export default function RoadmapMobile() {
  return (
    <Box sx={{ overflow: "hidden", height: "auto", py: "10%", color: "white" }}>
      {/* <Typography variant="h4" className="">
        RoadMap
      </Typography> */}
      <h1 className="">RoadMap</h1>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.4,
          },
        }}
      >
        {roadMapData.map((item, index) => (
          <MobileTimelineLayout key={index} item={item} />
        ))}
      </Timeline>
      <Box className="">
        <Typography variant="h6" fontWeight={"bold"}>
          Achievements & expectations:
        </Typography>
        <ol>
          <li>
            Beta test in December 2023, attracting over 350,000 user
            registrations.
          </li>
          <li>
            With 71,308 participants in the XP event, minting Genesis pet NFTs.{" "}
          </li>
          <li>
            The community has already achieved the IDO target of several million
            subscriptions.
          </li>

          {/* <li>
                    Have established connections with many CEXs listing: KuCoin,
                    Gate, HTX, Bitget, MEXC, XT, BTSE, BingX, Coinstore{" "}
                  </li> */}
          <li>
            Have established connections with many CEXs listing: HTX, Mexc, Prrobit, Coinstore{" "}
          </li>
        </ol>
      </Box>
    </Box>
  );
}
