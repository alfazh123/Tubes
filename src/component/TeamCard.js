import React from "react";
import './TeamCard.css';

function TeamCard(props) {

    return (
        <div className="teamCard">
            <div className="teamCard-img">
                <img src={props.img} alt="img"/>
            </div>
            <div className="teamCard-text">
                <h3>{props.name}</h3>
                <p>{props.content}</p>
                <p>{props.work}</p>
            </div>
        </div>
    );
}

export default TeamCard;