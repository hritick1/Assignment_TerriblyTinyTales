import axios from 'axios'


 const  Data=async()=>{
       return  axios.get('https://www.terriblytinytales.com/test.txt');
        }
        
        export default async function getData(){
            const data1=await Data();
            // console.log(data1.data);
            return data1.data;
            // console.log(data);
        }
      
  


