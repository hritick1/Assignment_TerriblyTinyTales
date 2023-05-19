import React,{useRef} from 'react'
import "./Histogram.css"
import {
    Chart as ChartJs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2' 
ChartJs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,Legend  
)
const Histogram = ({name,freq}) => {
    const data={
        labels:name,
        datasets:[{
            label:'Words',
            data:freq,      
            backgroundColor:['#FF068D',
            '#1815BB','#BC44CF'
          ],

            borderWidth:1,
        }]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }]
        }
      };
  return (
    <div className="outer">
        <div className="Histogram" >
      <p className='freq'>Frequency</p>
            <Bar data={data} options={options}>

            </Bar> </div>
            <p className='word'>Words</p>
       
      
    </div>
  )
}

export default Histogram