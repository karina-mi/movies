import React, {FC} from "react";

import {IHeroSliderProps} from './type'

import Slider from 'react-slick'

import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

import './styles.scss'
import {Button} from "@/components";
import {v4} from "uuid";

const HeroSlider: FC<IHeroSliderProps> = ({classname}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: 'hero-slider-dots',
        className: `hero-slider ${classname}`
    }

    return (
        <Slider {...settings}>

            {
                Array(3).fill(3).map(_ => {
                    return (
                        <div className='hero-slider-item' key={v4()}>
                            <h2 className='hero-slider-item__title'>Avatar
                                <span className='hero-slider-item__part'> 2</span></h2>
                            <div className='hero-slider-item__img'>
                                <img src={require('../../assets/images/avatar.jpg')} alt=''/>
                            </div>
                            <div className='hero-slider-item__actions'>
                                <Button size={'large'} color={'primary'} text={'Watch Now'}/>

                            </div>
                        </div>
                    )
                })
            }
        </Slider>
    )
}
export default HeroSlider