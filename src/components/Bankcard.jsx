import chipcardWhite from ".././images/Chip_Card-1.svg";
import group1 from ".././images/Group-1.svg";
import group2 from ".././images/Group2.svg";
import chipcardBlack from ".././images/chipcardblack.svg";

const Bankcard = (props) => {
  let {name,balance} = props.item;
  const validity = props.validity;
  const card_number = props.card_number;
  const index = props.index;
// console.log(validity)
const newBalance = balance.toLocaleString();



  return (
   
    <div className={`w-[325px] h-[214px] md:w-[350px] md:h-[235px] flex flex-col justify-between rounded-3xl ${index % 2 == 0 & index === 0 ? "bg-gradient-to-l from-[#0A06F4] to-[#4C49ED]" : "bg-white shadow-sm " } `} >
      <div className="w-full h-full flex flex-col justify-between px-7 pt-7 pb-5 md:p-8">
        {/* first part */}
        <div className="flex items-start justify-between">
          <div className=" md:leading-2">
            <h4 className={`text-[12px] ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#718EBF]"} `} >Balance</h4>
            <h2 className={`text-[16px] md:text-xl font-semibold ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#343C6A]"}`}>
              ${newBalance}
            </h2>
          </div>
          <div>
            {index % 2 == 0 & index === 0 ?  <img src={chipcardWhite} alt="chipcard" className="w-[30] md:w-[35px]" />:  <img src={chipcardBlack} alt="chipcard" className="w-[30] md:w-[35px]" />}
           
          </div>
        </div>
        {/* second part */}
        <div className="flex items-center justify-between gap-4">
          <div className="w-[50%]">
            <h4 className={`text-[10px] md:text-[12px] uppercase ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#718EBF]"}`}>
              card holder
            </h4>
            <h2 className={`text-[13px] md:text-[15px] font-semibold ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#343C6A]"}`}>
              {name}
            </h2>
          </div>
          <div className="w-[50%]">
            <h4 className={`text-[10px] md:text-[12px] uppercase  ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#718EBF]"}`}>
              valid thru
            </h4>
            <h2 className={`text-[13px] md:text-[15px] font-semibold ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#343C6A]"}`}>
              {validity}
            </h2>
          </div>
        </div>
      </div>
      {/* third part */}

      <div className="w-full h-[55px] md:h-[70px] flex items-center justify-between p-7 md:p-8 rounded-b-3xl bg-gradient-to-b from-white/15 to-white/0">
        <div className={`text-[15px] md:text-[22px] ${index % 2 == 0 & index === 0 ? "text-white" : "text-[#343C6A]"}`} >
          {card_number}
        </div>
        <div>
          {index % 2 == 0 & index === 0 ? <img src={group1} alt="grouplogo" className="w-[27px] md:w-[44px] " /> : <img src={group2} alt="grouplogo" className="w-[27px] md:w-[44px] " /> }
          
        </div>
      </div>
    </div>
  );
};

export default Bankcard;
