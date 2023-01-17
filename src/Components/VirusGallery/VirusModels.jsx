export function VirusModel({ index }) {
  const models = [
    "/assets/shiba/scene.gltf",
    "/assets/low_poly_mccree/scene.gltf",
    "/assets/matilda/scene.gltf",
    "/assets/shiba/scene.gltf",
    "/assets/low_poly_mccree/scene.gltf",
  ];
  const arModels = [
    "/assets/shiba/Shiba.usdz",
    "/assets/low_poly_mccree/Low_poly_McCree.usdz",
    "/assets/matilda/Matilda.usdz",
    "/assets/shiba/Shiba.usdz",
    "/assets/low_poly_mccree/Low_poly_McCree.usdz",
  ];
  // return <img className="modelImg" src={imgs[index]} alt="model" />;
  return (
    <div className="model">
      <model-viewer
        alt="shiba"
        src={process.env.PUBLIC_URL + models[index]}
        ar
        ios-src={process.env.PUBLIC_URL + arModels[index]}
        // environment-image="shared-assets/environments/moon_1k.hdr"
        // poster="shared-assets/models/NeilArmstrong.webp"
        shadow-intensity="1"
        touch-action="pan-y"
        camera-controls
        auto-rotate
        style={{ width: "300px", height: "400px" }}
      ></model-viewer>
    </div>
  );
}
