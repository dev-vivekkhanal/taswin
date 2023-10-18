import React from 'react'
import Slider from "react-slick";

const PrimaryCarousal = ({ carousalData }) => {

    const settings = {
        dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        speed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
    };

    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings} className="">
                {
                    carousalData?.map((slide) => (
                        <div key={slide?.id} className="h-screen overflow-hidden">
                            <img src={slide?.image} className="w-full object-cover h-full" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default PrimaryCarousal