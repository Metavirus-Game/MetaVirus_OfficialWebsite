import gameVideo from "./gameVideo.mp4";
export default function MobileVideoPlayer() {
  return (
    <div className="mobileVideoPlayer">
      <video controls className="video">
        <source src={gameVideo} type="video/mp4" />
      </video>
    </div>
  );
}
