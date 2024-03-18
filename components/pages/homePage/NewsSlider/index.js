import React from 'react';
import Slider from "react-slick";
import NewsItemComponent from "../NewsItem/NewsItemComponent";
import {newsList} from "@/data/newsList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: true,
    arrows: false,
    style: {maxWidth: '100%'},
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
};
const NewsSlider = () => {
    return (
        <Slider {...settings}>
            {
                newsList.map((item, index) => (
                    <div key={index}>
                        <NewsItemComponent href={`/news/${item.slug}`} {...item} />
                    </div>
                ))
            }
        </Slider>
    );
};

export default NewsSlider;