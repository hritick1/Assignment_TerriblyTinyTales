import Algo from "./components/Algo";
import Data from "./components/Data";
import { useEffect, useState } from 'react';
import Histogram from "./components/Histogram";
import Excel from "./components/Excel";

function App() {
  const [name, setName] = useState([]);
  const [freq, setFreq] = useState([]);
  const [data, setData] = useState("");

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
      <Histogram name={name} freq={freq}/>
      <Excel name={name} freq={freq}/>
    </div>
  );
}

export default App;