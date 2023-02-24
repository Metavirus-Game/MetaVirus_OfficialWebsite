export function VirusModel({ index }) {
  const models = [
    "/assets/GrimReaper.gltf",
    "/assets/Gloom.gltf",
    "/assets/Scorpion.gltf",
    "/assets/EarthWorm.gltf",
    "/assets/DragonFire.gltf",
    "/assets/PlantChewer.gltf",
    "/assets/Beem.gltf",
    "/assets/GolemEarth.gltf",
    "/assets/GolemFire.gltf",
    "/assets/GolemIce.gltf",
  ];
  const arModels = [
    "/assets/GrimReaper.usdz",
    "/assets/Gloom.usdz",
    "/assets/Scorpion.usdz",
    "/assets/EarthWorm.usdz",
    "/assets/DragonFire.usdz",
    "/assets/PlantChewer.usdz",
    "/assets/Beem.usdz",
    "/assets/GolemEarth.usdz",
    "/assets/GolemFire.usdz",
    "/assets/GolemIce.usdz",
  ];
  // return <img className="modelImg" src={imgs[index]} alt="model" />;
  return (
    <div className="model scrollable-content">
      <model-viewer
        alt="model"
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
        style={{ maxWidth: "250px", maxHeight: "250px", height: "35vh" }}
      ></model-viewer>
    </div>
  );
}
