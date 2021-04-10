import React from 'react';
// import Card from './Card';
// import Sdata from './T22_Sdata';
import Netflix from './T29_Option_Favourite_Component_Netflix';
import Amazon from './T29_Option_Favourite_Component_Amazon';




// if-else condition ki agar user ko netflix pasand hai to koi series dikhao or agar amazom pasand hai to koi aur



let favSeries = "Netflix";

// A way without ternary operator to render components.

// const Fseries = () => {
//     if(favSeries === "Netflix") {
//       return (
//         <Netflix/>
//       );
//     } else {
//       return (
//         <Amazon/>
//       );
//     }

// }



const Netflix_Option = () =>  {
    return <>
      <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
      {/* <Fseries/> */}
      { (favSeries === "Netflix") ? <Netflix/> : <Amazon/> }
      
      
  
    </>
  }
  
  
  export default Netflix_Option;
  