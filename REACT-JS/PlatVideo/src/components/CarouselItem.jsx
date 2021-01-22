import React from 'react';
import '../assets/styles/components/CarouselItem.scss'

//imagenes 
import play from '../assets/static/play-icon.png'
import plus from '../assets/static/plus-icon.png'

const CarouselItem =() =>(
    <article className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=126" alt=""/>
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={play} alt="Play"/>
                <img className="carousel-item__details--img" src={plus} alt="Plus"/>
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">2019 17+ 100 minutos</p>
        </div>
    </article>


)

export default CarouselItem;