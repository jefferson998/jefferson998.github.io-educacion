import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

//imagenes 
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'

const CarouselItem =({cover,title,year,contentRating,duration}) =>(
    <article className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={play} alt="Play"/>
                <img className="carousel-item__details--img" src={plus} alt="Plus"/>
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle"> {`${year} ${contentRating} ${duration}`}</p>
        </div>
    </article>


)

export default CarouselItem;