import React, { useState } from "react";
import logo from ".././images/logo2.svg";
import { RxCross2 } from "react-icons/rx";
import home1 from ".././images/home1.svg";
import home2 from ".././images/home2.svg";
import transfer1 from ".././images/transfer1.svg";
import transfer2 from ".././images/transfer2.svg";
import accounts1 from ".././images/user1.png";
import accounts2 from ".././images/user2.png";
import investment1 from ".././images/investment1.png";
import investment2 from ".././images/investment2.png";
import creditcard1 from ".././images/creditcard1.svg";
import creditcard2 from ".././images/creditcard2.svg";
import loan1 from ".././images/loan1.svg";
import loan2 from ".././images/loan2.svg";
import service1 from ".././images/service1.svg";
import service2 from ".././images/service2.svg";
import econometrics1 from ".././images/econometrics1.svg";
import econometrics2 from ".././images/econometrics2.svg";
import settings1 from ".././images/settings1.svg";
import settings2 from ".././images/settings2.svg";

const allMenu = [
  { id: 1, name: "dashboard", activeImg: home1, deactiveImg: home2 },
  { id: 2, name: "transaction", activeImg: transfer1, deactiveImg: transfer2 },
  { id: 3, name: "accounts", activeImg: accounts2, deactiveImg: accounts1 },
  {
    id: 4,
    name: "investment",
    activeImg: investment2,
    deactiveImg: investment1,
  },
  {
    id: 5,
    name: "credit card",
    activeImg: creditcard2,
    deactiveImg: creditcard1,
  },
  { id: 6, name: "loans", activeImg: loan2, deactiveImg: loan1 },
  { id: 7, name: "services", activeImg: service2, deactiveImg: service1 },
  {
    id: 8,
    name: "my privileges",
    activeImg: econometrics2,
    deactiveImg: econometrics1,
  },
  { id: 9, name: "setting", activeImg: settings2, deactiveImg: settings1 },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  // const [isActive, setIsActive] = useState("home");
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="">
      {/* modal */}
      <div
        onClick={() => setIsOpen(false)}
        className={`  inset-0 bg-black z-30 transition-opacity duration-300 md:hidden md:sticky md:top-0 ${
          isOpen ? "opacity-50 visible " : "opacity-0 invisible "
        } `}
      ></div>
      <aside
        className={`sidebar_aside_main ${
          isOpen ? "translate-x-0 " : "-translate-x-full"
        } `}
      >
        <button
          className="absolute top-5 right-3 p-1 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <RxCross2 size={20} />
        </button>

        {/* sidebar header */}
        <div className="sidebar_header">
          <div className="w-[183px] h-9 flex items-center  gap-2 ">
            <img src={logo} alt="logo" />
            <h2 className="text-[#343C6A] text-[25px] font-extrabold">
              BankDash.
            </h2>
          </div>
        </div>

        {/* side navbar start */}
        <nav className="mt-3">
          <ul className="space-y-2">
            {allMenu.map((item, index) => (
              <li
                key={index}
                onClick={() => setIsActive(item.id)}
                className={`  ${
                  isActive === item.id ? "nav_item_active" : "nav_item_deActive"
                } `}
              >
                <span
                  className={`w-[6px] h-full  
             rounded-tr-full rounded-br-full ${
               isActive === item.id ? "bg-[#2D60FF]" : "bg-transparent"
             }`}
                ></span>
                <div className="flex w-full items-center gap-6">
                  {isActive === item.id ? (
                    <img src={item.activeImg} alt={item.name} />
                  ) : (
                    <img src={item.deactiveImg} alt={item.name} />
                  )}

                  <h4 className="text-[18px] font-semibold capitalize ">
                    {item.name}
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* side navbar end */}
      </aside>
    </div>
  );
};

export default Sidebar;
