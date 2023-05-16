import React from "react";
import { Link } from 'react-router-dom';


function CardBlog(props) {
    return (
        <div className="CardBllog">    
            <Link to={props.to}>
                <img src={props.src} alt={props.alt} className={props.className}/>
            </Link>
        </div>
    );
}

export default CardBlog;