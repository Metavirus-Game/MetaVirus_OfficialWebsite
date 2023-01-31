import "./homePage.scss";
import { useState, useEffect, useRef } from "react";
import VideoPlayer from "./VideoPlayer";
import MobileVideoPlayer from "./MobileVideoPlayer";
export default function HomePage() {
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
  }, []);

  return (
    <div className="homeContainer">
      <div>
        <h1>Meta Virus</h1>
        <button style={{ marginRight: "1rem" }}>Try It</button>
        {window.innerWidth < 500 ? (
          <MobileVideoPlayer />
        ) : (
          <>
            <button id="playButton" onClick={playVideo}>
              Watch Video
            </button>
            {isPlayed && <VideoPlayer />}
          </>
        )}
      </div>
    </div>
  );
}
