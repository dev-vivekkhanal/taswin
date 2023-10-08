import React from 'react'

const PrimaryButton = ({ buttonText }) => {
  return (
    <button className='shadow-md transition-all active:scale-95 text-[13px] text-white flex justify-center items-center px-8 py-2.5 bg-[#07260E] rounded-[5px]'>{buttonText}</button>
  )
}

export default PrimaryButton