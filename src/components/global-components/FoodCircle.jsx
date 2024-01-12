import React from 'react'
import food from '../../assets/landing/foodcircle.webp'

const FoodCircle = () => {
    return (
        <div className="absolute w-full flex inset-0 overflow-hidden z-[10]">
            <div className="w-full max-w-[95vw] flex items-center -tanslate-y-[200px] justify-between ">
                <div className="w-full max-w-[1000px] -translate-x-[500px]">
                    <img src={food} alt="" className=" animation-spin" />
                </div>
                <div className="w-full max-w-[1000px] translate-x-[500px]">
                    <img src={food} alt="" className=" animation-spin" />
                </div>
            </div>
        </div>
    )
}

export default FoodCircle