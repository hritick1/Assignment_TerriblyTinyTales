import React from 'react'
import Histogram from '../components/Histogram'
import './Main.css'

const Main = ({pname,name,freq}) => {
   
  return (
    <div className="maincon">
    <div className="container1">
        <p className='head'>Top 20 Words</p>
        <Histogram name={name} freq={freq}/>
    </div>
    <div className="table">
    </div>
    </div>
  )
}

export default Main