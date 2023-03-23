import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Card from "./Card";
import "./team.scss";
export default function Team() {
  return (
    <div className="teamContainer">
      <h2>Core Team</h2>
      <Swiper
        slidesPerView={
          window.innerWidth < 500 ? 2 : window.innerWidth < 1000 ? 3 : 4
        }
        // spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            name="Brice Bian"
            title="CEO"
            describe="19 years of game production experience. Responsible for online games with millions of revenue. His work 'Gods Killer Online' had  the highest monthly income in Chinese mobile game market."
            portrait="/img/portrait_brice.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Marco Tuo"
            title="CTO"
            describe="20 years of game development experience. Chief architect of millions of online mobile games. Technical director of large-scale travel VR games."
            portrait="/img/portrait_marco.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Belal Abdullah"
            title="CMO"
            describe="Has led marketing plans for several DeFi products, and NFT projects. Over 7 years of experience in crypto financial services."
            portrait="/img/portrait_belal.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Will Chen"
            title="Chief Architect"
            describe="22 years of game development experience. Developed KONAMI's first 3D mathlib. Works include 'Disney sport soccer', 'Disney All Star Sports: Skateboarding', 'Pro Evolution Soccer 8', 'Sakura Wars.' Graphics engine genius.'"
            portrait="/img/portrait_will.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Mendal Wang"
            title="Chief Designer"
            describe="21 years of game design experience, global Ubisoft senior concept designer, freelance tattoo artist, and designer of jewelry, props, and knives. Works include 'Assassin's Creed' series, 'League of Legends', 'Transformers', etc."
            portrait="/img/portrait_mendel.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Zeyu Zhang"
            title="Chief Planner"
            describe="20 years of game industry experience. Worked at Valve and participated in the 'Counter-Strike' series. A number of works reached millions of people online, with a monthly income of over $10 million."
            portrait="/img/portrait_Zeyu.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            name="Chris Horwood"
            title="Content Planner"
            describe="College teacher and basketball coach, produced long-form documentaries and several short films."
            portrait="/img/portrait_chris.png"
          />
        </SwiperSlide>
      </Swiper>
      {/* <div className="slide" dataAnchor="slide1">
        <div className="teamContainer">
          <h2>Core Team</h2>
          <Card
            name="Brice Bian"
            title="Founder and CEO"
            describe="19 years of game production experience. Responsible for online games with millions of revenue. His work 'Gods Killer Online' had  the highest monthly income in Chinese mobile game market."
            portrait="/img/portrait_1.jpg"
          />
          <Card
            name="Marco"
            title="Co-founder & CTO"
            describe="20 years of game development experience. Chief architect of millions of online mobile games. Technical director of large-scale travel VR games."
            portrait="/img/portrait_7.jpg"
          />
          <Card
            name="Lin"
            title="Core developer"
            describe="Author of China's first Flash3D engine zerO3D, co-developer of globally renowned engine Away3D."
            portrait="/img/portrait_3.jpg"
          />

          <Card
            name="Belal"
            title="Co-founder & CMO"
            describe="Has led marketing plans for several DeFi products, and NFT projects. Over 7 years of experience in crypto financial services."
            portrait="/img/portrait_4.jpg"
          />
        </div>
      </div>
      <div className="slide" dataAnchor="slide1">
        <div className="teamContainer">
          <h2>Core Team</h2>
          <Card
            name="Wei Chen"
            title="Chief Architect"
            describe="22 years of game development experience. Developed KONAMI's first 3D mathlib. Works include 'Disney sport soccer', 'Disney All Star Sports: Skateboarding', 'Pro Evolution Soccer 8', 'Sakura Wars.' Graphics engine genius.'"
            portrait="/img/portrait_5.jpg"
          />
          <Card
            name="Meng Wang"
            title="Chief Graphic Designer"
            describe="21 years of game design experience, global Ubisoft senior concept designer, freelance tattoo artist, and designer of jewelry, props, and knives. Works include 'Assassin's Creed' series, 'Mysterious Island 3', 'League of Legends', 'For Honor', 'Transformers', etc."
            portrait="/img/portrait_6.jpg"
          />
          <Card
            name="Zeyu Zhang"
            title="Chief Planner"
            describe="20 years of game industry experience. Worked at Valve and participated in the 'Counter-Strike' series. A number of works reached millions of people online, with a monthly income of over $10 million, and were simultaneously distributed to over 60 countries around the world."
            portrait="/img/portrait_2.jpg"
          />

          <Card
            name="Chris"
            title="Content Planner"
            describe="College teacher and basketball coach, produced long-form documentaries and several short films."
            portrait="/img/portrait_8.jpg"
          />
        </div>
      </div> */}
    </div>
  );
}
