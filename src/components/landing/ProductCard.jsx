import React from 'react'

const ProductCard = ({ title, image }) => {
  return (
    <div className="w-fit">
      <div className="w-full max-w-[250px]">
        <img src={image} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-center pt-5 text-[15px] font-bold">{title}</h1>
        <div className="h-1 w-full bg-[#EDF4D3] mt-3"></div>
      </div>
    </div>
  )
}

export default ProductCard