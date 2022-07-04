import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {Carousel} from 'react-responsive-carousel'
import styles from './Slider.module.css'
import Slider1 from '../../assets/Slider1.png'
import Slider2 from '../../assets/Slider2.png'
import Slider3 from '../../assets/Slider3.png'

const Slider = () => {

    const datas = [
        {
            id : 1,
            img : Slider1
        },
        {
            id : 2,
            img : Slider2
        },
        {
            id : 3,
            img : Slider3
        }
    ]

    return <div className={styles.SliderContainer}>
        <Carousel autoPlay interval={6000} transitionTime={3000} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true}> 
        {datas.map((slide) => {
            return <div key = {slide.id}>
                <img src={slide.img} alt=""/>
            </div>
        })}
    </Carousel>
    </div>
}

export{
    Slider
}