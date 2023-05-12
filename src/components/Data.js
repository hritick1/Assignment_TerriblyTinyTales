import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Data = ({data,setData}) => {
    

    useEffect(() => {
        const  fetchData=async()=>{
       return  axios.get('https://www.terriblytinytales.com/test.txt');
        }
        const getData=async()=>{
            const data1=await fetchData();
            // console.log(data1.data);
            setData(data1.data);
            // console.log(data);
        }
        getData();
          }, []);

        

          
      
  
  return (
    <div>Data</div>
  )
}

export default Data