export function VirusModel({ index }) {
  const models = [
    "/assets/EarthWorm.gltf",
    "/assets/GrimReaper.gltf",
    "/assets/PlantChewer.gltf",
    "/assets/Gloom.gltf",
    "/assets/Scorpion.gltf",
    "/assets/GolemEarth.gltf",
    "/assets/GolemFire.gltf",
    "/assets/GolemIce.gltf",
  ];
  const arModels = [
    "/assets/EarthWorm.usdz",
    "/assets/GrimReaper.usdz",
    "/assets/PlantChewer.usdz",
    "/assets/Gloom.usdz",
    "/assets/Scorpion.usdz",
    "/assets/GolemEarth.usdz",
    "/assets/GolemFire.usdz",
    "/assets/GolemIce.usdz",
  ];
  // return <img className="modelImg" src={imgs[index]} alt="model" />;
  return (
    <div className="model scrollable-content">
      <model-viewer
        alt="shiba"
        src={process.env.PUBLIC_URL + models[index]}
        ar
        ar-scale="auto"
        ios-src={process.env.PUBLIC_URL + arModels[index]}
        // environment-image="shared-assets/environments/moon_1k.hdr"
        // poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        touch-action="none"
        camera-controls
        auto-rotate
        autoplay
        disable-zoom
        disable-pan
        style={{ width: "300px", height: "300px" }}
      ></model-viewer>
    </div>
  );
}
