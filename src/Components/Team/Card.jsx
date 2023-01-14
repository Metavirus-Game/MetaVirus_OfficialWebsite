import { useState } from "react";
import { useSpring, a } from "@react-spring/web";

export default function Card({ name, title, describe }) {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  return (
    <div className={"container"} onClick={() => set((state) => !state)}>
      <a.div
        className={"c back"}
        style={{
          opacity: opacity.to((o) => 1 - o),
          transform,
          rotateY: "180deg",
        }}
      >
        <div>
          <h3>{name}</h3>
          <h4>{title}</h4>
        </div>
      </a.div>
      <a.div
        className={"c front"}
        style={{
          opacity,
          transform,
          // rotateY: "180deg",
        }}
      >
        <p>{describe}</p>
      </a.div>
    </div>
  );
}
