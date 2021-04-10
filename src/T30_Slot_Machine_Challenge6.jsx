import React from 'react';


const SlotM = (props) => {
    // let x = '😊';
    // let y = '😊';
    // let z = '🎅';

    let x = props.x;
    let y = props.y;
    let z = props.z;

    // with object destructuring we can write this as:
    // let {x,y,z} = props;

    if( (x===y) && (y===z) ) {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z} </h1>
                    <h1> This is Matching. </h1>
                    <hr/>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="slot_inner">
                    <h1> {x} {y} {z} </h1>
                    <h1> This is not Matching. </h1>
                    <hr/>
                </div>
            </>
        )
    }


}


const SlotMachine = () => {
    return (
        <>
            <h1 className="heading_style">
                 🎰 Welcome to  <span style={{ fontWeight: "bold" }}>Slot Machine Game</span> 🎰 
            </h1>
            <SlotM x='😊' y='😊' z='😊'/>
            <SlotM x='😊' y='👍' z='😊'/>
            <SlotM x='😊' y='😊' z='🎅'/>
            <SlotM x=' ❤️ ' y=' 🙄 ' z=' 🌹 '/>
        </>
    )
}

export default SlotMachine;


// How to type emoji in VScode.
