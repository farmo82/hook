import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'

import Text from './Text'
import Timer from './Timer'
import TimeList from './TimeList';

const App = ()=>{
  const [title, setTitle] = useState('hello counter...'); //setTitle همون setState هست
  // خروجی تابع useState یک آرایه است:
  //let a
  //let b
  // [a, b] = [0, 1]      ----->     a=0 & b=1
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  const handleSetTitle = ()=>{
    setTitle("کدیاد")
  }

  useEffect(()=> {
    console.log("useEffect")

    return ()=>{

    }

  }, [isLight])

  const handleSetIsLight = ()=>{
    setIsLight(!isLight)
  }

  return(
    <div className='main' style={{background: isLight ? "white" : "black"}}>  
      <Text title = {title}/>  {/* self closing tag */}
      <Timer handleSetTitle={handleSetTitle} 
      isLight={isLight} handleSetIsLight={handleSetIsLight} 
      timeArr={timeArr} setTimeArr={setTimeArr}/>
    </div>
  )
}

export default App;