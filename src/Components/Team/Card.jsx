import { useState } from "react";
import { useSpring, a } from "@react-spring/web";

export default function Card({ name, title, describe, portrait }) {
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
        <div className="backInfo">
          <h2 className="name">{name}</h2>
          <div className="title">{title}</div>
        </div>
      </a.div>
      <a.div
        className={"c front"}
        style={{
          opacity,
          transform,
          // rotateY: "180deg",
          // backgroundImage: `url(${process.env.PUBLIC_URL + portrait})`,
        }}
      >
        {/* <div className="portrait"></div> */}
        <div
          className="portrait"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + portrait})`,
          }}
        ></div>
        <p>{describe}</p>
      </a.div>
    </div>
  );
}
