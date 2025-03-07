import { useEffect, useState } from "react";
import group313 from ".././images/Group-313.svg";
import { RecentTrans } from "../api/ApiCall";

const RecentTransaction = () => {
  const ImgURL = import.meta.env.VITE_IMG_URL;

  const [info, setInfo] = useState(null);

  // console.log(info)
  useEffect(() => {
    (async () => {
      const res = await RecentTrans();
      // console.log(res.data)
      setInfo(res.data);
    })();
  }, []);

  return (
    <div className="w-[325px] h-[214px] md:w-[350px] md:h-[235px] bg-white  rounded-3xl px-5 pt-5 pb-3 md:p-7">
      {/* first row */}
      <ul className="space-y-3 md:space-y-4">
        {info &&
          info.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <div className="flex gap-3 items-center ">
                <div>
                  <img src={ImgURL+item.image} alt="transaction" className="w-[50px] h-[50px] md:w-[55px] md:h-[50px] rounded-full " />
                </div>
                <div>
                  <h3 className="text-[14px] md:text-[16px] text-[#343C6A] font-semibold">
                    {item.name}
                  </h3>
                  <h5 className="text-[12px] md:text-[15px] text-[#718EBF] ">
                    {item.date}
                  </h5>
                </div>
              </div>
              <div>
                <h5 className="text-[14px] md:text-[16px] text-[#41D4A8] ">
                  +${item.amount.toLocaleString()}
                </h5>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RecentTransaction;
