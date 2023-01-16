import "./process.scss";
import { useRef, useState } from "react";
export default function Process({ isLoaded }) {
  const paperPlaneAnimate = useRef(null);
  const [animated, setAnimated] = useState(false);
  if (isLoaded && !animated) {
    paperPlaneAnimate.current.beginElement();
    setAnimated(true);
  }

  return (
    <div>
      <div className="processContainer">
        <svg
          viewBox="0 -140 1800 1000"
          width="100%"
          height="90vh"
          fill="none"
          // xmlns="http://www.w3.org/2000/svg"
        >
          <g id="processGraph">
            <path
              id="planePath"
              d="M61 751C235.667 747 459.164 729.844 433 635C417 577 253.078 536.513 333 447C433 335 581 447 761 483C921 515 941 447 941 447C941 447 957.802 409.582 917 331C809 123 1117 -17 1269 43C1390.6 91 1425 75 1521 3"
              stroke="white"
              strokeWidth="7"
            />
            <g id="Group 19">
              <circle
                id="Ellipse 7"
                cx="61"
                cy="748"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle id="Ellipse 10" cx="61" cy="748" r="43" fill="#FFDE67" />
            </g>

            <g id="Group 20">
              <circle
                id="Ellipse 7_2"
                cx="61"
                cy="748"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_2"
                cx="61"
                cy="748"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 21">
              <circle
                id="Ellipse 7_3"
                cx="356"
                cy="426"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_3"
                cx="356"
                cy="426"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 22">
              <circle
                id="Ellipse 7_4"
                cx="941"
                cy="449"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_4"
                cx="941"
                cy="449"
                r="43"
                fill="#FFDE67"
              />
            </g>
            <g id="Group 23">
              <circle
                id="Ellipse 7_5"
                cx="938"
                cy="120"
                r="59"
                stroke="white"
                strokeWidth="4"
                strokeDasharray="15 15"
              />
              <circle
                id="Ellipse 10_5"
                cx="938"
                cy="120"
                r="43"
                fill="#FFDE67"
              />
            </g>
          </g>
          <foreignObject
            x="-10"
            y="400"
            width={"20rem"}
            height={"15rem"}
            style={{ color: "white" }}
          >
            <div className={isLoaded ? "context_1" : "beforeLoaded"}>
              <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                03/22-09/22
              </h3>
              <ul
                style={{
                  listStyle: "inside",
                  fontSize: "1.5em",
                  textAlign: "left",
                }}
              >
                <li>Token contract</li>
                <li>Cornerstone round</li>
                <li>VIRU exchange</li>
                <li>Seed round</li>
                <li>Demo</li>
                <li>First pre-sale</li>
              </ul>
            </div>
          </foreignObject>
          <foreignObject
            x="250"
            y="100"
            width={"20rem"}
            height={"15rem"}
            style={{ color: "white" }}
          >
            <div className={isLoaded ? "context_2" : "beforeLoaded"}>
              <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                10/22-12/22
              </h3>
              <ul
                style={{
                  listStyle: "inside",
                  fontSize: "1.5em",
                  textAlign: "left",
                }}
              >
                <li>Trailer</li>
                <li>Virul marketing</li>
                <li>Petri dish</li>
                <li>Second pre-sale</li>
                <li>Playable demo</li>
                <li>IDO</li>
              </ul>
            </div>
          </foreignObject>
          <foreignObject
            x="750"
            y="540"
            width={"30rem"}
            height={"20rem"}
            style={{ color: "white" }}
          >
            <div className={isLoaded ? "context_3" : "beforeLoaded"}>
              <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                01/23-01/24
              </h3>
              <ul
                style={{
                  listStyle: "inside",
                  fontSize: "1.5em",
                  textAlign: "left",
                }}
              >
                <li>Exchanges</li>
                <li>Asset pre-sale</li>
                <li>Closed test</li>
                <li>Game platform warm-up</li>
                <li>Public test & game platform release</li>
                <li>Official operation</li>
              </ul>
            </div>
          </foreignObject>
          <foreignObject
            x="1150"
            y="100"
            width={"30rem"}
            height={"40rem"}
            style={{ color: "white" }}
          >
            <div className={isLoaded ? "context_4" : "beforeLoaded"}>
              <h3 style={{ fontSize: "2rem", textAlign: "left" }}>
                01/23-01/24
              </h3>
              <ul
                style={{
                  listStyle: "inside",
                  fontSize: "1.5em",
                  textAlign: "left",
                }}
              >
                <li>
                  Open the editor to encourage other game developers to join the
                  MetaVirus game ecosystem.
                </li>
                <li>
                  Launch online and offline interaction, and virtual reality
                  interacts with reality.
                </li>
                <li>
                  Introduce real-world brands and establish a link between
                  gameplay and advertising that serves as a mechanism to
                  encourage the community to be the main body of brand
                  interaction and cooperation.
                </li>
                <li>
                  Launch augmented reality (AR) technology that has been
                  strengthened by expected technical advances in the industry.
                </li>
              </ul>
            </div>
          </foreignObject>
          {isLoaded && (
            <path
              transform="translate(-35,-140)"
              id="paperPlane"
              d="M51 81L7 5C55 13.9623 181.2 48.2981 258 41.9434M51 81L26 133M51 81L258 41.9434M26 133L106 143M26 133L84 110.485M258 41.9434L263 41L84 110.485M258 41.9434C190.8 71.4981 144.333 144.962 134 183L106 143M106 143L84 110.485"
              stroke="white"
              strokeWidth="7"
            />
          )}

          <animateMotion
            href="#paperPlane"
            dur="3s"
            repeatCount="1"
            fill="freeze"
            begin="indefinite"
            ref={paperPlaneAnimate}
          >
            <mpath href="#planePath" />
          </animateMotion>
        </svg>
      </div>
    </div>
  );
}
