import "./homePage.scss";
import { useState, useEffect } from "react";
import VideoPlayer from "./VideoPlayer";
import { gsap } from "gsap";
import MobileVideoPlayer from "./MobileVideoPlayer";
export default function HomePage({ isLoaded }) {
  const [isPlayed, setIsPlayed] = useState(false);
  function playVideo() {
    setIsPlayed(true);
  }

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (
        event.target.id === "playButton" ||
        event.target.className === "video"
      ) {
        return;
      }
      setIsPlayed(false);
    });
    gsap.set("#bg_main", { y: "-50%" });
    // if (isLoaded) {
    gsap.fromTo(
      "#bg_tl",
      { y: "-100%", x: "-100%" },
      {
        duration: 2,
        x: "0%",
        y: "0%",
        ease: "power2",
      }
    );
    gsap.fromTo(
      "#bg_tr",
      { y: "-100%", x: "100%" },
      {
        duration: 2,
        x: "0%",
        y: "0%",
        ease: "power2",
      }
    );
    gsap.fromTo(
      "#bg_bl",
      { y: "100%", x: "-100%" },
      {
        duration: 2,
        x: "0%",
        y: "0%",
        ease: "power2",
      }
    );
    gsap.fromTo(
      "#bg_br",
      { y: "100%", x: "100%" },
      {
        duration: 2,
        x: "0%",
        y: "0%",
        ease: "power2",
      }
    );
    gsap.fromTo(
      "#bg_main",
      { scale: 0 },
      {
        duration: 2,
        scale: 1,
        ease: "power2",
      }
    );
  }, []);

  return (
    <>
      <div className="homeContainer">
        <img
          id="bg_tl"
          src={process.env.PUBLIC_URL + "/img/bg_tl.png"}
          alt="tl"
        />
        <img
          id="bg_tr"
          src={process.env.PUBLIC_URL + "/img/bg_tr.png"}
          alt="tr"
        />
        <img
          id="bg_bl"
          src={process.env.PUBLIC_URL + "/img/bg_bl.png"}
          alt="bl"
        />
        <img
          id="bg_br"
          src={process.env.PUBLIC_URL + "/img/bg_br.png"}
          alt="br"
        />

        <img
          id="bg_main"
          src={process.env.PUBLIC_URL + "/img/bg_main.png"}
          alt="main"
        />
        <div style={{ zIndex: "2" }}>
          <h1>Meta Virus</h1>
          <button style={{ marginRight: "1rem" }}>Try It</button>
          {window.innerWidth > 500 && (
            <>
              <button id="playButton" onClick={playVideo}>
                Watch Video
              </button>
              {isPlayed && <VideoPlayer />}
            </>
          )}
        </div>
      </div>
      {window.innerWidth < 500 && <MobileVideoPlayer />}
    </>
  );
}
