import Algo from "./components/Algo";
import Data from "./components/Data";
import { useEffect, useState } from 'react';
import Histogram from "./components/Histogram";
import Excel from "./components/Excel";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  const [name, setName] = useState([]);
  const [freq, setFreq] = useState([]);
  const [data, setData] = useState("");
  const [pname, setPname] = useState([])
  useEffect(() => {
    const getData = async () => {
      const result = await Data();
      setData(result);
    }
    getData();
  }, []);

  useEffect(() => {
    // console.log(data);
    if (name.length > 0 && freq.length > 0) {
      for (let i = 0; i < name.length; i++) {
        console.log(name[i] + ":" + freq[i]);
      }
    }
  }, [data, name, freq]);

  return (
    <div className="App">
      <Algo data={data} setName={setName} setFreq={setFreq} />
    
      {/* <Excel name={name} freq={freq}/> */}
      
     
      <Router>
        <Routes>
          <Route path="/" element={<Home pname={pname} setPname={setPname}/>}></Route>
          <Route path="/main" element={ <Main pname={pname} name={name} freq={freq}/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;