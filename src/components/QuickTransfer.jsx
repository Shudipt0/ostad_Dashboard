import React, { useState } from 'react'
import Avatar from './Avatar';
import { RiArrowRightSLine } from "react-icons/ri";
import send from '.././images/send.svg';
import person1 from '.././images/person1.svg';
import person2 from '.././images/person2.svg';
import person3 from '.././images/person3.svg';


const avatar = [
  {name: "Livia Bator", position: "Ceo", imgUrl: person1 },
  {name: "Randy Press", position: "Director", imgUrl: person2 },
  {name: "Workman", position: "Designer", imgUrl: person3 }
]

const QuickTransfer = () => {
  const [isActive,setIsActive] = useState(0)
  // const handleActive =()=> {
  //   setIsActive(isActive);
  // }
 
  return (
    <div className='w-[325px] h-[195px] md:w-[445px] md:h-[276px] bg-white rounded-3xl flex flex-col justify-center items-center gap-2 md:gap-6'>
       {/* avatar part*/}
       <div className='w-full md:w-[394px] md:h-[127px] flex justify-center gap-4 md:gap-0 md:justify-between items-center '>

        {avatar.map((item, index)=>(
          <Avatar name={item.name} position={item.position} imgurl={item.imgUrl} index={index} key={index} setActive={setIsActive} isActive={isActive} />
        ))}

         <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] flex justify-center items-center bg-white rounded-full shadow text-[#718EBF] '>
            <RiArrowRightSLine size={28}/>
         </div>

       </div>
       {/* amount part */}
      <div className='w-[289px] h-[40px] md:w-[394px] md:h-[50px] flex justify-between items-center '>
        <h3 className='text-[12px] md:text-[16px] text-[#718EBF] font-normal' >Write Amount</h3>
        {/* 2nd part */}
        <div className='w-[187px] md:w-[265px] h-full flex justify-between items-center rounded-full bg-[#EDF1F7] focus-within:bg-[#f2f2f2] '>
        <input type='text' placeholder='525.50' className='w-[100px] text-[12px] md:text-[16px] text-[#718EBF] px-3 md:pl-8 outline-none '/> 
        <button className='w-[100px] md:w-[125px] h-full rounded-full text-white bg-[#1814F3] text-[12px] md:text-[16px] flex justify-center items-center gap-3 cursor-pointer ' >
          Send 
          <div > <img src={send} alt="send" className='md:w-[26px]' /></div>
        </button>
        </div>

      </div>
    </div>
  )
}

export default QuickTransfer