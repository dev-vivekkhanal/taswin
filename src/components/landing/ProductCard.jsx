import React, { useState } from 'react'
import no_img from '../../assets/global/no_image.png'

const ProductCard = ({ title, image, image2, description, variants }) => {

  const [hoverDesc, setHoverDesc] = useState(false);

  return (
    <div className="w-fit flex flex-col items-center cursor-pointer">
      <div className={`w-full max-w-[250px] transition-all duration-300 ease-out relative border-secondary rounded-[21px] shadow-md`} onMouseEnter={() => setHoverDesc(true)} onMouseLeave={() => setHoverDesc(false)}>
        {
          image && image2 ?
            <div className='w-full relative'>
              <img
                src={image}
                className={`w-full absolute inset-0 rounded-[21px] transition-all duration-300 ease-out ${hoverDesc ? 'opacity-0 ' : 'opacity-100'
                  }`}
                alt=""
              />
              <img
                src={image2}
                className={`w-full  rounded-[21px] transition-all duration-300 ease-out ${hoverDesc ? 'opacity-100' : 'opacity-0 '
                  }`}
                alt=""
              />
            </div>
            :
            <img src={no_img} className="w-full rounded-[21px]" alt="" />
        }
        {
          variants ?
            <div className='absolute w-fit rounded-full px-4 py-2 bottom-[5px] right-[5px] bg-[#F6F4EC] text-tertiary text-sm font-[700]'>4 Variants</div>
            :
            null
        }
      </div>
      <div>
        <h1 className="text-center pt-5 text-primary text-[15px] font-bold min-w-[100%] h-[2px] leading-none">{title}</h1>
        <div className={`w-full overflow-hidden transition-all duration-300 ease-out ${hoverDesc && description ? 'h-[110px] overflow-hidden' : 'h-0'}`}>
          <p className='text-[12px] text-center px-2 py-3 mt-2'>{description}</p>
        </div>
        <div className={`h-1 w-full max-w-[230px] mx-auto ${hoverDesc ? 'bg-secondary bg-opacity-70' : 'bg-secondary'} ${hoverDesc && description ? 'mt-1' : 'mt-8'} `}></div>
      </div>
    </div>
  )
}

export default ProductCard