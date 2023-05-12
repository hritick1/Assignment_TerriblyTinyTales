import Algo from "./components/Algo";
import Data from "./components/Data";
import { useEffect,useState } from 'react'

function App() {
  const [data, setData] = useState("");
  const [name, setName] = useState([]);
  const [freq, setFreq] = useState([]);
  
useEffect(() => {
  // if (name.length > 0 && freq.length > 0)
    for(let i=0;i<name.length;i++){
      console.log(name[i]+":"+freq[i]);
    }
}, [name])



  return (
    <div className="App">
      <Data data={data} setData={setData}/>
      <Algo data={data} setName={setName} setFreq={setFreq} name={name} freq={freq}/>
    </div>
  );
}

export default App;
