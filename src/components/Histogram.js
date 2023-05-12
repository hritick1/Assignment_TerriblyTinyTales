import React from 'react'
// import "./Histogram.css"
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
           backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
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
        },
        title: {
          display: true,
          text: 'Histogram of Data',
          fontSize: 20,
          fontColor: '#333'
        },
        legend: {
          display: true,
          position: 'top',
          labels: {
            fontSize: 14,
            fontColor: '#333'
          }
        }
      };
  return (
    <div className="outer">Histogram
        <div className="Histogram" >
            <Bar data={data} options={options}>

            </Bar>
        </div>
    </div>
  )
}

export default Histogram