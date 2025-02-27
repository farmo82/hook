import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css'
import TimeList from './TimeList';


var interval;


class Timer extends React.Component{  //component
    constructor(){
      super();
      this.state = {
        hour: 0,
        minute: 0,
        seconde:0, 
        isStart: false
      }
    }

    startInterval = ()=>{
      if (this.state.isStart == false) {
        this.setState({
          isStart: true
        })
        interval = setInterval(()=>{ //interval برای تغییر state
          this.setState({
            seconde: this.state.seconde + 1
          })
          if (this.state.seconde == 60) {
            this.setState({
              seconde: 0,
              minute: this.state.minute + 1
            })
          }
          if (this.state.minute == 60) {
            this.setState({
              minute: 0,
              hour: this.state.hour + 1
            })
          }
        }, 1000)
      }
    }

    stopInterval = ()=>{
      this.setState({
        isStart: false
      })
      clearInterval(interval);
    }

    resetInterval = ()=>{
      this.stopInterval();
      this.setState({
        hour: 0,
        minute: 0,
        seconde:0
      })
    }

    handelSaveTime = ()=>{
      let h = this.state.hour;
      let m = this.state.minute;
      let s = this.state.seconde;
      let newTime = `${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`
      this.props.setTimeArr([...this.props.timeArr, newTime]) // 'sepread operator' with adding a new string
    }

    render(){
      let h = this.state.hour;
      let m = this.state.minute;
      let s = this.state.seconde;

      return(
        <>
          <h2 className='timer' onClick={this.handelSaveTime}>
            {/* {this.state.hour + ":" + this.state.minute + ":" + this.state.seconde} */}
            {`${h > 9 ? h : "0"+h} : ${m > 9 ? m : "0"+m} : ${s > 9 ? s : "0"+s}`}
          </h2>
          
          <div className='botton_box'>
            <span className='action_button start_button' onClick={this.startInterval}>start</span>
            <span className='action_button stop_button' onClick={this.stopInterval}>stop</span>
            <span className='action_button reset_button' onClick={this.resetInterval}>reset</span>
            <span className='action_button reset_button' onClick={this.props.handleSetTitle}>changeName</span>
            <span className='action_button reset_button'
             onClick={this.props.handleSetIsLight}
             style={{
              background: this.props.isLight ? "black" : "white",
              color: this.props.isLight ? "white" : "black"
             }}
             >
              {this.props.isLight ? "dark" : "light"}
             </span>
          </div>

          <TimeList>{this.props.timeArr}</TimeList> {/* ارسال به صورت children */}  {/*******نباید فاصله باشد. باید همه در یک خط نوشته شوند*********/}
        </>
      )
    }
  }

export default Timer;