import React from "react";
import { SliderData } from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import './ImageSlider.css'
import CardBlog from "./CardBlog";

const ImageSlider = ({slides}) => {
    const [current, setCurrent] = React.useState(0);
    const length = SliderData.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current+1);
    }

    console.log(current);

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current-1);
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
// make progress bar

    return(
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {SliderData.map((slide, index) => {
                return(
                    <div className={index === current ? 'slide active' : 'slide'} key=
                    {index} >
                        {index === current && (
                            <CardBlog to={slide.Link} src={slide.image} alt='foto' className='imageslide' key={index}/>
                            ) }

                    </div>
                    
                )
                })}
        </section>
    )
}

export default ImageSlider;