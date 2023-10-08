import React, { useState } from 'react'
import no_img from '../../assets/global/no_image.png'

const ProductCard = ({ title, image, description, variants }) => {

  const [hoverDesc, setHoverDesc] = useState(false);

  return (
    <div className="w-fit flex flex-col items-center cursor-pointer">
      <div className={`w-full max-w-[250px] transition-all duration-300 ease-out opacity-70 hover:opacity-100 relative rounded-[21px] shadow-md`} onMouseEnter={() => setHoverDesc(true)} onMouseLeave={() => setHoverDesc(false)}>
        {
          image ?
            <img src={image} className="w-full rounded-[21px]" alt="" />
            :
            <img src={no_img} className="w-full rounded-[21px]" alt="" />
        }
        {
          variants ?
            <div className='absolute w-fit rounded-full px-4 py-2 bottom-[5px] right-[5px] bg-[#F6F4EC] text-[#57AC49] text-sm font-[700]'>4 Variants</div>
            :
            null
        }
      </div>
      <div>
        <h1 className="text-center pt-5 text-[15px] font-bold min-w-[100%] h-[2px] leading-none">{title}</h1>
        <div className={`w-full hover:overflow-auto overflow-hidden transition-all duration-300 ease-out ${hoverDesc && description ? 'h-[100px] overflow-hidden' : 'h-0'}`}>
          <p className='text-[12px] text-center px-2 py-3 mt-2'>{description}</p>
        </div>
        <div className={`h-1 w-full max-w-[230px] mx-auto ${hoverDesc ? 'bg-[#d9f087]' : 'bg-[#EDF4D3]'} ${hoverDesc && description ? 'mt-2' : 'mt-8'} `}></div>
      </div>
    </div>
  )
}

export default ProductCard