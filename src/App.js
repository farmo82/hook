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
  const [timeArr, setTimeArr] = useState(["00 : 00 : 00", "00 : 00 : 11"]);

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
      <Timer handleSetTitle={handleSetTitle} isLight={isLight} handleSetIsLight={handleSetIsLight}/>
      <TimeList>{timeArr}</TimeList>  {/* ارسال به صورت children */}  {/*******نباید فاصله باشد. باید همه در یک خط نوشته شوند*********/}
    </div>
  )
}

export default App;