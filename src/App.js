import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import GameCore from "./Components/GameCore/GameCore";
import VirusGallery from "./Components/VirusGallery/VirusGallery";
import Process from "./Components/Process/Process";
import Chart from "./Components/Charts/Chart";
import Team from "./Components/Team/Team";
import FinTarget from "./Components/FinTarget/FinTarget";
import HomePage from "./Components/HomePage/HomePage";
const anchors = [
  "firstPage",
  "secondPage",
  "thirdPage",
  "fourthPage",
  "fifthPage",
];

const App = () => (
  <ReactFullpage
    anchors={anchors}
    navigation
    navigationTooltips={anchors}
    navigat
    sectionsColor={[
      "#7fff00",
      "#00ffff",
      "#551E57",
      "#7fff00",
      "#29ab87",
      "#29ab87",
      "#29ab87",
      "#29ab87",
    ]}
    // onLeave={(origin, destination, direction) => {
    //   console.log("onLeave event", { origin, destination, direction });
    // }}
    render={({ state, fullpageApi }) => {
      // console.log("render prop change", state, fullpageApi);
      return (
        <div>
          <div className="section">
            <HomePage />
          </div>
          <div className="section">
            <h2>Game Basics</h2>
          </div>
          <div className="section">
            <GameCore />
          </div>
          <div className="section">
            <VirusGallery />
          </div>
          <div className="section">
            <Process />
          </div>
          <div className="section">
            <Chart />
          </div>
          <div className="section">
            <FinTarget />
          </div>
          <div className="section">
            <Team />
          </div>
        </div>
      );
    }}
  />
);

export default App;
