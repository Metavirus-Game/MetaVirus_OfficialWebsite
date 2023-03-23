import gameVideo from "./gameVideo.mp4";
export default function MobileVideoPlayer() {
  return (
    <div className="mobileVideoPlayer">
      <video
        controls
        className="video"
        poster={process.env.PUBLIC_URL + "/img/poster.png"}
      >
        <source src={gameVideo} type="video/mp4" />
      </video>
    </div>
  );
}
