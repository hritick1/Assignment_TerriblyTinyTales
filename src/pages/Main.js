import React from 'react'
import Histogram from '../components/Histogram'
import './Main.css'
import Excel from '../components/Excel'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Main = ({pname,name,freq}) => {
  toast('Welcome ' + pname, {
    position: 'top-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light', toastId: 'success1',
  })
  return (
  
    <div className="maincon">  <ToastContainer/>
    <div className="container1">
        <p className='head'>Top 20 Words</p>
        <Histogram name={name} freq={freq}/>
    </div>
    <div className="container2">
    <table className='table' >
     <thead>
     <tr className='thd'>
<th>Rank</th>
<th>Word</th>
<th>Occurence</th>
</tr>
     </thead>

{name.map((word,i)=>{return(
  <tr className='data' key={i}>
    <td>{i+1}</td>
    <td>{word}</td>
    <td>{freq[i]}</td>
  </tr>)
})}

    </table>
    <div className="excel">
    <Excel name={name} freq={freq}/></div>
    
    </div>
    
    </div>
  )
}

export default Main