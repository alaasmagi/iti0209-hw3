import "./App.css";
import LatestGraduatesPerFieldChart from "./components/LatestGraduatesPerFieldChart";
import AcceptedPerYearChart from "./components/AcceptedPerYearChart";
import GraduatesPerYearChart from "./components/GraduatesPerYearChart";
import LatestAcceptedPerFieldChart from "./components/LatestAcceptedPerFieldChart";
import IctPopularityPerYearChart from "./components/IctPopularityPerYearChart";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-2xl text-white font-bold">Hariduslikud andmed</h1>
      <div className="flex flex-row gap-5">
        <AcceptedPerYearChart />
        <GraduatesPerYearChart />
      </div>
      <LatestAcceptedPerFieldChart />
      <LatestGraduatesPerFieldChart />
      <IctPopularityPerYearChart />
    </div>
  );
}

export default App;
