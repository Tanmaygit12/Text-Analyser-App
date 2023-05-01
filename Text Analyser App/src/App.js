import logo from './logo.svg';
import './App.css';
// import NavBar from './component/Navbar';
import Textform from './component/Textform'
// import About from './component/About';
// import React, { useState } from 'react'
import NavBar from './component/Navvbar';
function App() {

  // const [mode, setmode] = useState('dark');//shows whether dark mode is enabled 
  // //or not (because this is default State)

  // const toggleMod =()=>{
  //   if(mode==='light'){
  //     setmode = 'dark'
  //   }
  //   else{
  //     setmode='light'
  //   }
  // }
  return (
    <div>
   <NavBar title="TextUtils"/>
   <div className="container">
    <div className='container my-3'></div>
   <Textform heading='Enter the text to analyse'/>
   </div>
   
    
    {/* <About/> */}
    </div>
  )
}

export default App;
