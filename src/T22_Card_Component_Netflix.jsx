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
