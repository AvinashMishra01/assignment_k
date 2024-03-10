
import { useState } from 'react';
import RandomPassword from './component/RandomPassword';
import './App.css';
// import GeneratedContent from './component/GenerateComponent';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container } from '@mui/material';
function App() {
  let [color, setColor]= useState("olive")
  let [dis_feed, setdis_feed]=useState(false)
 
let [reportIssu, setReportIssu]=useState(false);
let [shareFeedBack, setShareFeedBack]=useState(false);

  const [changeColor, setChangeColor]= useState("black")
  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor: color}}>
<br></br>
  <RandomPassword color={changeColor}/> 
     </div>




{ /* footer */}
{/* <div className='footer'> */}
   <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
  
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: 'red'}} onClick={()=>{setColor('red'); setChangeColor('yellow')}} >Red</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: 'green'}} onClick={()=>{setColor("green"); setChangeColor('orange')}} >Green</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: 'black'}} onClick={()=>{setColor("black"); setChangeColor('white')}}  >Black</button>
  <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: 'yellow'}} onClick={()=>{setColor("yellow"); setChangeColor('black')}} >Yellow</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: 'blue'}} onClick={()=>{setColor("blue"); setChangeColor('white')}} >Blue</button>
  <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg ' style={{backgroundColor: 'pink'}} onClick={()=>{setColor("pink"); setChangeColor('black')}} >Pink</button>
  <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg ' style={{backgroundColor: 'white'}} onClick={()=>{setColor("white"); setChangeColor('blue')}} >White</button>
  </div>
   </div>

   {/* <Container maxWidth="sm" fixed>
   <div className='fixed flex flex-wrap justify-end bottom-15 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>  */}
 {reportIssu==true ?
 <Container maxWidth="lg">

<h2>Leta Us know the problem </h2>
 </Container>
 
 :null}

{/* 
  </div>
  </div>
  
</Container> */}






 <div className='container'>
 <div className='fixed flex flex-wrap justify-end bottom-12 inset-x-0 px-2'>
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'> 
 <div className='directoin_control_main'>
 {dis_feed==true? 
 <div className='container'> 
  <div className='directon_control_option'> 
    <IconButton aria-label="delete" size="small" 
  onClick={()=>{setReportIssu(!reportIssu)}}
  >
  <DeleteIcon fontSize="inherit" />
</IconButton>

<IconButton aria-label="delete" size="small" 
  onClick={()=>{setdis_feed(true)}}
  >
  <DeleteIcon fontSize="inherit" />report issu
</IconButton>

<IconButton aria-label="delete" size="small" 
  onClick={()=>{setdis_feed(true)}}
  >
  <DeleteIcon fontSize="inherit" />
</IconButton>

</div>
 </div> 
 
 : null}


<IconButton aria-label="delete" size="small" 
  onClick={()=>setdis_feed(!dis_feed)}
  >
  <DeleteIcon fontSize="inherit" />
</IconButton>

 </div>
 </div>
 </div>
   </div>
    </>

  );
}

export default App;
