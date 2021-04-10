import React from 'react';
import Card from './T22_Card_Component_Netflix';
import Sdata from './T22_Sdata';

// console.log(Sdata[1].sname);


// // Ye function banaya hai data ko aise hi display karane ke liye....isme sabka data paas karna pad rha ahi or vo card ke through render ho rha hai.
// // lekin agar hame ye chaaiye ki data mei kitne bhi file ho vo sabko render kare apne-aap hi to ham use karenge map() method.
// // ye method ham dekhnege next step mei

// function ncard(data,index,arr) {
//   // data mei data mil rha hai jo ki Sdata.jsx se aa rha hai
//   // index mei uski index value mil rahi hai
//   // or array mei ham kis array se khel rahe hai voh
//   // to ab mai isme card pass karunga jo ki mujhe data fill karke dega jo Sdata se aa rha hai 1-1 karke
// //   console.log(Sdata[1]);
// //   console.log(index);
//   return (
//       <>
//         <Card
//         imgsrc={Sdata[0].imgscr}
//         title={Sdata[0].title}
//         sname={Sdata[0].sname}
//         link={Sdata[0].links}
//         />,
//         <Card
//         imgsrc={Sdata[1].imgscr}
//         title={Sdata[1].title}
//         sname={Sdata[1].sname}
//         link={Sdata[1].links}
//         />,
//         <Card
//         imgsrc={Sdata[2].imgscr}
//         title={Sdata[2].title}
//         sname={Sdata[2].sname}
//         link={Sdata[2].links}
//         />
//     </>
//   );
// }


// // now we will see how to simplify it more



const TopNetflixSeries = () =>  {
    return <>
      <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
      {Sdata.map((data) => {
            return (
              <Card
                key={data.id}
                imgsrc={data.imgscr}
                title={data.title}
                sname={data.sname}
                link={data.links}
              />
            );
        })};
        {/* {ncard()}; */}
      
  
    </>
}
  
  
export default TopNetflixSeries;
  