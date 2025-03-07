import React, { useEffect, useState } from "react";
import Bankcard from "../components/Bankcard";
import RecentTransaction from "../components/RecentTransaction";
import WeeklyChart from "../components/WeeklyChart";
import ExpenseStats from "../components/ExpenseStats";
import BalanceHistory from "../components/BalanceHistory";
import QuickTransfer from "../components/QuickTransfer";
import { BankCardList } from "../api/ApiCall";

const Home = () => {
  const [allCards, setAllCards] = useState(null);
  // console.log(allCards)
  useEffect(() => {
    (async () => {
      const res = await BankCardList();
      setAllCards(res.data);
    })();
  }, []);

  // console.log(allCards)

  return (
    <main className=" mx-auto my-7 lg:w-[1120px] grid grid-cols-1 lg:grid-cols-12 gap-7 ">
      <div className=" h md:w-[730px] md:h-[282px] lg:col-span-8 space-y-5 mx-auto ">
        {/* text and see all card link */}
        <div className=" flex justify-between items-center">
          <h1 className="text-[16px] md:text-[22px] text-[#343C6A] font-semibold">
            My Cards
          </h1>
          <h4 className="text-[14px] md:text-[17px] text-[#343C6A] font-semibold">
            See All
          </h4>
        </div>
        {/* cards start */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-8">
          {allCards &&
            allCards.map((item, index) => {
              // <div key={index} >{item}</div>
              if (index > 1) {
                return null;
              }
              const formatValidity = item.validity
                ? item.validity.split("-")
                : ["", ""];
              const validThru = `${formatValidity[1]}/${formatValidity[0].slice(
                2
              )}`;

              const hideCardNumber = item.card_number
                ? item.card_number.slice(0, 2) +
                  "*".repeat(item.card_number.length - 4) +
                  item.card_number.slice(-2)
                : "";

              return (
                <Bankcard
                  key={index}
                  item={item}
                  index={index}
                  validity={validThru}
                  card_number={hideCardNumber}
                />
              );
            })}

          {/* <Bankcard allCards={allCards} />
           */}
        </div>
        {/* card end */}
      </div>
      {/* transaction */}
      <div className=" lg:col-span-4 space-y-5 mx-auto">
        <h2 className="text-[22px] text-[#343C6A] font-semibold ">
          Recent Transaction
        </h2>
        <RecentTransaction />
      </div>

      {/* weekly activitty */}
      <div className="  md:w-[730px] md:h-[367px] lg:col-span-8 space-y-5 mx-auto">
        <h2 className="text-[22px] text-[#343C6A] font-semibold ">
          Weekly Activity
        </h2>
        <WeeklyChart />
      </div>

      {/* expense statistics*/}
      <div className=" md:w-[350px] md:h-[367px] lg:col-span-4 space-y-5 mx-auto">
        <h2 className="text-[22px] text-[#343C6A] font-semibold ">
          Expense Statistics
        </h2>
        <ExpenseStats />
      </div>

      {/* quick transfer*/}
      <div className=" md:w-[445px] md:h-[323px] lg:col-span-5 space-y-5 mx-auto">
        <h2 className="text-[22px] text-[#343C6A] font-semibold ">
          {" "}
          Quick Transfer
        </h2>
        <QuickTransfer />
      </div>

      {/* balance history*/}
      <div className="  md:w-[635px] md:h-[323px] lg:col-span-7 space-y-5 mx-auto">
        <h2 className="text-[22px] text-[#343C6A] font-semibold ">
          Balance History
        </h2>
        <BalanceHistory />
      </div>
    </main>
  );
};

export default Home;
