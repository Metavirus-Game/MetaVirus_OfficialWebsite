import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import GameCore from "./Components/GameCore/GameCore";
import VirusGallery from "./Components/VirusGallery/VirusGallery";
import Process from "./Components/Process/Process";
import Chart from "./Components/Charts/Chart";
import Team from "./Components/Team/Team";
import FinTarget from "./Components/FinTarget/FinTarget";
import HomePage from "./Components/HomePage/HomePage";
import MobileProcess from "./Components/Process/MobileProcess";
import "animate.css";
import Navigation from "./Components/Navigation/Navigation";
import { useEffect, useContext } from "react";
const anchors = [
  "Home",
  "Gallery",
  "Core",
  "Process",
  "Token&Liquidity",
  "Target",
  "Team",
];

const App = () => {
  const sectionLoaded = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];

  // useEffect(()=>{

  // },[])
  // const test = useContext(authContext);

  return (
    <>
      <Navigation />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        navigat
        scrollingSpeed="1200"
        responsiveWidth={450}
        easing="easeInOutCubic"
        sectionsColor={[
          "#201633",
          "#201633",
          "#201633",
          "#201633",
          "#201633",
          "#201633",
          "#201633",
          "#201633",
        ]}
        normalScrollElements=".scrollable-content"
        // onLeave={(origin, destination, direction) => {
        //   console.log("onLeave event", { origin, destination, direction });
        // }}
        afterLoad={(section, origin, destination, direction, trigger) => {
          sectionLoaded[origin.index] = true;
        }}
        render={({ state, fullpageApi }) => {
          // console.log("render prop change", state, fullpageApi);
          return (
            <div>
              <div className="section">
                <HomePage isLoaded={sectionLoaded[0]} />
                <h1>Meta Virus</h1>
                <button>Download</button>
                <button>Watch Video</button>
              </div>
              <div className="section">
                <VirusGallery isLoaded={sectionLoaded[1]} />
              </div>
              <div className="section">
                <GameCore isLoaded={sectionLoaded[2]} />
              </div>
              <div className="section">
                {window.innerWidth < 500 ? (
                  <MobileProcess isLoaded={sectionLoaded[3]} />
                ) : (
                  <Process isLoaded={sectionLoaded[3]} />
                )}
              </div>
              <div className="section">
                <Chart isLoaded={sectionLoaded[4]} />
              </div>
              <div className="section">
                <FinTarget isLoaded={sectionLoaded[5]} />
              </div>
              <div className="section">
                <Team isLoaded={sectionLoaded[6]} />
              </div>
            </div>
          );
        }}
      />
    </>
  );
};

export default App;
