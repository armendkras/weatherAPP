import React from 'react';
import './tedhenat.css'
const teDhenat = (props) => {
    const dateBuilder = (d) =>{
        let months = ["January","February","March","April","May","June","July",
        "August","September","October","November","December"];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
        'Thursday', 'Friday', 'Saturday'];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${date} ${month} ${year}`
      }
    return(
        <div>
        <div className="location-box">
          <div className="location">
            {props.emriIqytetit}  {props.emriIshtetit}
            
            
            </div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">{Math.round(props.temperatura)}°c</div>
          <div className="weather">{props.qielli}</div>
        </div>
          </div>
    );
}

export default teDhenat;