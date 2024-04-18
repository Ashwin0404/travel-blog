
import { useState } from 'react';
import './App.css'
import Home from './Home';
import Mumbai from './Mumbai';
import Delhi from './Delhi';
import Goa from './Goa';
import Shimla from './Shimla';
import Pondicherry from './Pondicherry';
import Kashmir from './Kashmir';
import Mauritius from './Mauritius';
import NorthEastIndia from './NorthEastIndia';

function App() {
  const [page, setPage] = useState("home");

  const pageArr = {
    home: <Home setPage={setPage} />,
    mumbai: <Mumbai setPage={setPage}/>,
    delhi: <Delhi setPage={setPage}/>,
    goa: <Goa setPage={setPage}/>,
    shimla: <Shimla setPage={setPage}/>,
    pondicherry: <Pondicherry setPage={setPage}/>,
    kashmir: <Kashmir setPage={setPage}/>,
    mauritius: <Mauritius setPage={setPage}/>,
    assam: <NorthEastIndia setPage={setPage}/>,
  }

  return (
    <div className="App">
     {pageArr[`${page}`]}
    </div>

  );
}

export default App;
