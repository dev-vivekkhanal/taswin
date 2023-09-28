import React, { useState } from 'react'

const ProductCard = ({ title, image, description }) => {

  const [hoverDesc, setHoverDesc] = useState(false);

  return (
    <div className="w-fit flex flex-col items-center cursor-pointer">
      <div className={`w-full max-w-[250px] transition-all duration-300 ease-out opacity-70 hover:opacity-100`} onMouseEnter={() => setHoverDesc(true)} onMouseLeave={() => setHoverDesc(false)}>
        <img src={image} className="w-full" alt="" />
      </div>
      <div>
        <h1 className="text-center pt-5 text-[15px] font-bold">{title}</h1>
        {
          description && hoverDesc ? 
          <p className='text-[12px] text-center px-2 py-2'>{description}</p>
          :
          null
        }
        <div className={`h-1 w-full ${hoverDesc ? 'bg-[#d9f087]' : 'bg-[#EDF4D3]'} mt-3`}></div>
      </div>
    </div>
  )
}

export default ProductCard