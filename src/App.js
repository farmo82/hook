import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'

import Text from './Text'
import Timer from './Timer'


// class App extends React.Component{  //component
//   constructor(){
//     super();
//     this.state = {
//       title: 'hello counter...'
//     }
//     // this.handleSetTitle = this.handleSetTitle.bind(this)  //|..|
//   }

//   handleSetTitle = ()=>{  //event handler
//     this.setState({
//       title: "کدیاد"
//     })
//   }
//   // ==
//   // handleSetTitle(){  //|..|
//   //   this.setState({
//   //     title: "کدیاد"
//   //   })
//   // }

//   render(){
//     return(
//       // * class --> className
//       // حتما باید یک تگ باز و بسته باشد. میتواند تگ بی نام باشد
//       <div className='main'>  
//         <Text title = {this.state.title}/> 
//         <Timer handleSetTitle = {this.handleSetTitle}/>
//       </div>

//       // <>    با بالا برابر است
//       //   <Text/>
//       //   <Timer/>
//       // </>
//     )
//   }
// }


const App = ()=>{
  const [title, setTitle] = useState('hello counter...') //setTitle همون setState هست
  // خروجی تابع useState یک آرایه است:
  //let a
  //let b
  // [a, b] = [0, 1]      ----->     a=0 & b=1
  const [isLight, setIsLight] = useState(false)

  const handleSetTitle = ()=>{
    setTitle("کدیاد")
  }

  const handleSetIsLight = ()=>{
    setIsLight(!isLight)
  }

  return(
    <div className='main' style={{background: isLight ? "white" : "black"}}>  
      <Text title = {title}/> 
      <Timer handleSetTitle={handleSetTitle} isLight={isLight} handleSetIsLight={handleSetIsLight}/>
    </div>
  )
}

export default App;