import "./homePage.scss";
export default function HomePage() {
  return (
    // <div className="homePageContainer">

    //   <div className="cardContainer">
    //     <div className="card"></div>
    //     <div className="card"></div>
    //     <div className="card"></div>
    //   </div>
    // </div>
    <>
      <model-viewer
        alt="shiba"
        src="assets/shiba/scene.gltf"
        ar
        // ios-src="assets/shiba/scene.gltf"
        // environment-image="shared-assets/environments/moon_1k.hdr"
        // poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        touch-action="pan-y"
        camera-controls
        auto-rotate
        style={{ width: "400px", height: "500px" }}
      ></model-viewer>
    </>
  );
}
