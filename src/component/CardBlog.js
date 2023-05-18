import React from "react";
import { Link } from 'react-router-dom';


function CardBlog(props) {

    function handleClick() {
        window.scrollTo(0, 0);
    }
    return (
        <div className="CardBllog">    
            <Link onClick={handleClick} to={props.to}>
                <img src={props.src} alt={props.alt} className={props.className}/>
            </Link>
        </div>
    );
}

export default CardBlog;