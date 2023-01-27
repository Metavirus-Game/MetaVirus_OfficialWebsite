// import gameVideo from "./gameVideo.mp4";
import { CloseCircleFilled } from "@ant-design/icons";
export default function VideoPlayer() {
  return (
    <div className="videoPlayer">
      <video controls autoPlay className="video">
        <source
          src={process.env.PUBLIC_URL + "/assets/gameVideo.mp4"}
          type="video/mp4"
        />
      </video>
      <CloseCircleFilled className="closeButton" />
    </div>
  );
}
