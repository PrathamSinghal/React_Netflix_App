import React from 'react';
import Images from './T22_Images_Component_Netflix';


function Card(props) {
    // console.log(props);
    return (
        <div className="cards">
            <div className="card">
                <Images imgsrc={props.imgsrc}/>
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card__title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button type="submit">Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;

// Now we will see how props in useful
// jab hum pehle work karte the to agar hame jitne card chaaiye sabke liye alag-alag card banane padte the lekin react mei aisa nahi hai hum ek card ka template define karenge isme or usko re-use karenge usme template mei data fill kar-karke 
// ye work hum karenge props ke through....
// "props" (which stands for properties)
// React Props are like function arguments in JavaScript and attributes in HTML.
// card hum component create karke karenge taaki hum uaka use kar sake baar-baar
// abhi agar hum ek card ko baar-baar call kar rahe hai to voh ek hi data dikha rha hai baar-baar but hame to alag-alag data chaaiye card mei..to vo kaise karenge

// ye power hame props deta hai card ko re-use karne ki alag-alag data se.
// ab mai jha par card ko call kiya hai vh apar ek custom attributes declare kar rha hu.
// custom attributes de to diye lekin access kaise karenge...
// access karne ke liye hame isko pass karna padega...us particular component mei
// us function mei component ke liye ham isko acces karenge by writing props(hum vha par kuch bhi likh sakte hai ...but props likhenge)
// vha par props likhte hi jitne bhi hmare custom attributes the vo sab as an object mil chuke hai

// Now add that css file to get that magical effect
