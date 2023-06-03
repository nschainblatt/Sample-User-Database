import React from "react";
import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img alt='robot' src={`https://robohash.org/${props.id}`}/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}

export default Card;