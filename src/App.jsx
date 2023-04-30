import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Carousel from './components/dumb/Carousel';
import { Outlet } from 'react-router-dom';

function App() {
  const title = useRef();
  const [position, setPosition] = useState(0);

  const handleButtonClick = () => {
    // console.log(title.current.classList);
    setPosition(position+10);
  };
  useEffect(()=>{
    console.log(position);
  },[position])


  return (
    <div className='font-monts'>
      <Outlet></Outlet>
    </div>
  );
}


export default App
