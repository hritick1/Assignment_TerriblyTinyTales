import React,{useState} from 'react'
import './Home.css'
import { Button } from '@mui/material';
import {  TextField } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Home = ({pname,setPname}) => {
  const navigate=useNavigate();
  const [email, setEmail] = useState([]);
    const handleSubmit=(e)=>{
      e.preventDefault();
  console.log(pname);
    navigate('/main');
    }
    
  return (
    <div className='container'>
      <div className="box">
      <p className="welcome">Welcome!</p> 
    
    <TextField label="Name" variant="outlined" value={pname} className='name'
        onChange={(e)=>setPname(e.target.value)}/>
    <TextField label="Email" variant="outlined" value={email} className='email'
        onChange={(e)=>setEmail(e.target.value)}/>
      <Button variant='contained'size='large' className='button'
    style={{color:'#5B07E3'}} onClick={handleSubmit} href="/">Submit</Button>
</div>
</div>
    
  )
}

export default Home