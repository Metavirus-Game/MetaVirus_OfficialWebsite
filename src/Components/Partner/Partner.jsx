"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

import "./partner.scss";
import PartnerData from "./PartnerData";
import { Grid } from "@mui/material";

export default function Partner() {
  const partnershipList = [
    new PartnerData(
      "NEXG",
      "/img/partner/nexgami.png",
      "https://www.nexgami.com/"
    ),
    // new PartnerData(
    //   "Kucoin",
    //   "/img/partner/kucoin.png",
    //   "https://www.kucoin.com/"
    // ),
    // new PartnerData(
    //   "GateIO",
    //   "/img/partner/gateio.png",
    //   "https://www.gate.io/"
    // ),
    // new PartnerData(
    //   "bitgit",
    //   "/img/partner/bitgit.png",
    //   "https://www.bitget.com/"
    // ),
    new PartnerData("htx", "/img/partner/htx.png", "https://www.htx.com/", 100),

    new PartnerData(
      "Mexc",
      "/img/partner/mexc.png",
      "https://www.mexc.com/"
    ),

    new PartnerData(
      "ProBit Global",
      "/img/partner/probit.jpg",
      "https://www.probit.com/"
    ),

    new PartnerData(
      "Coinstore",
      "/img/partner/coinstore.png",
      "https://www.coinstore.com/home?ts=1718223161232"
    ),
    // new PartnerData("xtcom", "/img/partner/xtcom.png", "https://www.xt.com/"),

    // new PartnerData("Bingx", "/img/partner/bingx.png", "https://bingx.com/en/"),
    // new PartnerData(
    //   "BTSE",
    //   "/img/partner/btse.png",
    //   "https://www.btse.com/en/home",
    //   130
    // ),
    new PartnerData(
      "Skyland Ventures",
      "/img/partner/skylandVentures.png",
      "https://skyland.vc/",
      250
    ),
    new PartnerData(
      "Ledger Capital",
      "/img/partner/ledger.jpeg",
      "https://ledgercap.co/"
    ),
    new PartnerData(
      "HTX Ventures",
      "/img/partner/htxVentures.png",
      "https://www.htx.com/ventures",
      200
    ),
    
    new PartnerData("DMail", "/img/partner/dmail.png", "https://dmail.ai/"),
    new PartnerData("KEKKAI", "/img/partner/kekkai.png", "https://kekkai.io/"),

    new PartnerData(
      "Metalpha",
      "/img/partner/metalpha.png",
      "https://www.metalpha.net/"
    ),

    new PartnerData(
      "DWF Labs",
      "/img/partner/dwflabs.png",
      "https://www.dwf-labs.com/"
    ),

    new PartnerData(
      "IBC",
      "/img/partner/ibc.png",
      "https://www.ibcgroup.io/",
      120
    ),
    new PartnerData(
      "Tide",
      "/img/partner/tide.png",
      "https://www.tidegroups.com/"
    ),

    new PartnerData(
      "AScoin",
      "/img/partner/ascoin-wallet.png",
      "https://www.ascoin.pro/ "
    ),

    new PartnerData(
      "Nabox",
      "/img/partner/nabox.svg",
      "https://nabox.io"
    ),
    new PartnerData(
      "Glaxe",
      "/img/partner/galxe.png",
      "https://www.galxe.com/"
    ),
    new PartnerData(
      "TaskOn",
      "/img/partner/taskon.png",
      "https://taskon.xyz/ "
    ),
    new PartnerData(
      "PoolzBoost",
      "/img/partner/poolz.png",
      "https://www.poolz.finance/",
      200
    ),
  ];

  const PartnerLogo = ({ name, icon, link, style }) => {
    return (
      <div className="flex justify-center">
        <a
          href={process.env.PUBLIC_URL + link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={icon}
            alt="logo"
            height={"auto"}
            width={style ? style : 175}
          />
        </a>
      </div>
    );
  };

  const renderPartnerSlides = () => {
    let slides = [];
    let i = 0;
    while (i < partnershipList.length) {
      slides.push(
        <SwiperSlide key={i}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            {partnershipList.slice(i, i + 5).map((item, index) => (
              <Grid item lg={4} key={index}>
                <PartnerLogo
                  key={index}
                  name={item.name}
                  icon={item.icon}
                  link={item.link}
                  style={item.style}
                />
              </Grid>
            ))}
          </Grid>
        </SwiperSlide>
      );
      i += 5;
    }
    return slides;
  };

  return (
    <div className="partnerSection">
      <div className="h-[20%] flex justify-center items-center pt-[5%]">
        {/* <Typography variant="h4" fontWeight={"bold"}>
          Strategic Partnership
        </Typography> */}
        <h2>Strategic Partnership</h2>
      </div>
      <div className="partnerContainer">
        <Swiper
          // navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          loop={true}
        >
          {renderPartnerSlides()}
        </Swiper>
      </div>
    </div>
  );
}
