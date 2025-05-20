import './App.css'
import LatestGraduatesPerFieldChart from './components/LatestGraduatesPerFieldChart';
import AcceptedPerYearChart from './components/AcceptedPerYearChart';
import GraduatesPerYearChart from './components/GraduatesPerYearChart';
import LatestAcceptedPerFieldChart from './components/LatestAcceptedPerFieldChart';

function App() {
  return (
    <div className='flex-col'>
      <h1 className='text-2xl text-white font-bold'>Hariduslikud andmed</h1>
      <div className='flex flex-row py-20 gap-15'>
        <AcceptedPerYearChart/>
        <GraduatesPerYearChart/>  
      </div>
      <div className='flex flex-row py-15 gap-15'>
        <LatestAcceptedPerFieldChart />
        <LatestGraduatesPerFieldChart />
      </div>
    </div>
  );
}

export default App
