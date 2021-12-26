import React from 'react';
import ImageSlider from '../../components/Slider/ImageSlider';
import { SliderData } from '../../components/Slider/SliderData';
import AboutMeBlock from './AboutMeBlock/AboutMeBlock';

function Main() {
    return(
        <div>
            <ImageSlider slides={SliderData}/>
            <AboutMeBlock/>
        </div>
    )
}

export default Main 