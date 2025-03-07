import React from 'react';
import person1 from '.././images/person1.svg'

const Avatar = (props) => {
  // console.log(props.name)
  return (
    <div onClick={()=> props.setIsActive(props.index)} key={props.index} className='flex flex-col justify-between items-center gap-2 cursor-pointer ' >
       <img src={props.imgurl} alt="person1" className='w-[50px] md:w-[70px]' />
       <div className='text-center' >
        <h3 className={`text-[14px] md:text-[16px] font-semibold text-[#232323] ${props.isActive === props.index ? "md:font-bold" : "md:font-medium"}`} >{props.name}</h3>
        <h3 className='text-[12px] md:text-[15px] font-semibold text-[#718EBF] '>{props.position}</h3>
       </div>
    </div>
  )
}

export default Avatar