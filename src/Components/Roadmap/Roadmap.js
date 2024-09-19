import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./style.scss";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Box, Stack, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import RoadmapMobile from "./RoadmapMobile";

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
    header:"TGE"
  },
  {
    time: "2024-12",
    header: "Official operation",
  },
];

export const TimelineItemLayout = ({ index, item }) => {
  const isHead = index == 0;
  const isTail = index == roadMapData.length - 1;
  return (
    <Box className="flex flex-col w-[100%] relative">
      <Typography
        variant="h6"
        className="absolute left-[50%] bottom-[25px] translate-x-[-50%]"
      >
        {item.header}
      </Typography>

      {isHead ? (
        <Box className="flex items-center gap-2 left-[50%] relative">
          <Box className="rounded-full w-[15px] h-[15px] bg-[#ff6854]" />
          <Box className="w-[50%] border-solid border-2 border-[#ff6854]" />
        </Box>
      ) : (
        <Box className="flex items-center gap-2 relative">
          <Box className="w-[50%] border-solid border-2 border-[#ff6854]" />
          <Box className="rounded-full w-[15px] h-[15px] bg-[#ff6854]" />
          {!isTail && (
            <Box className="w-[50%] border-solid border-2 border-[#ff6854]" />
          )}
        </Box>
      )}
      <Typography
        variant="h5"
        fontWeight={"bold"}
        className="absolute left-[50%] translate-x-[-50%] top-[25px]"
      >
        {item.time}
      </Typography>
      <Typography
        variant="h6"
        className="absolute left-[50%] translate-x-[-50%] top-[55px] w-[100%]"
      >
        {item.desc}
      </Typography>
      {item.optional}
    </Box>
  );
};

export default function Roadmap() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box className="bg-[#831858] relative overflow-hidden">
      {isMobile ? (
        <RoadmapMobile />
      ) : (
        <Box className="h-[100vh] flex flex-col items-center ">
          {/* <Typography
            variant="h4"
            className="absolute top-20 left-[50%] translate-x-[-50%]"
          >
            RoadMap
          </Typography> */}
          <h1 className="h-[25%] flex items-center">RoadMap</h1>
          <Swiper
            slidesPerView={"auto"}
            // spaceBetween={30}
            // centeredSlides={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="roadMapSwiper text-black bg-white h-[60%] w-[100%]"
          >
            {roadMapData.map((item, index) => (
              <SwiperSlide key={index}>
                <TimelineItemLayout index={index} item={item} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <Box className="pr-10">
                <Typography variant="h6" fontWeight={"bold"}>
                  Achievements & expectations:
                </Typography>
                <ol>
                  <li>
                    Beta test in December 2023, attracting over 350,000 user
                    registrations.
                  </li>
                  <li>
                    With 71,308 participants in the XP event, minting Genesis
                    pet NFTs.{" "}
                  </li>
                  <li>
                    The community has already achieved the IDO target of several
                    million subscriptions.
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
            </SwiperSlide>
          </Swiper>
        </Box>
      )}
    </Box>
  );
}
