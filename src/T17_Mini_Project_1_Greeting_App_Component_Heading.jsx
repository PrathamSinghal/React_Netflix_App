import React from 'react';
import './index.css';

let time = new Date(2020, 4, 8, 14);

time = time.getHours();
let cssStyle = { };


const greeting = () => {
  if(time>=1 && time<=11 ){
    cssStyle.color = 'green';
    return 'Good Morning';
  } else if (time>=12 && time<= 19 ) {
    cssStyle.color = 'orange';
    return 'Good AfterNoon';
  } else {
    cssStyle.color = 'Black';
    return 'Good Night';
  }
}




const heading = {
    fontSize: '45px',
    color: 'burlywood',
    padding : '20px 20px',
    backgroundColor : '#ffe9c5',
    color : '#fa9191',
    borderRadius : '20px'
}
  


function Heading() {
    return (
        <div>
            <h1 style={heading}>Hello Sir, <span style={cssStyle}>{greeting()}</span></h1>
        </div>
    )
}

export default Heading;