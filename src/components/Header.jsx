import { IoSearchOutline } from "react-icons/io5";
import { RxGear } from "react-icons/rx";
import { LuBellDot } from "react-icons/lu";
import { FaBars } from "react-icons/fa6";
import proImage from ".././images/Mask.svg";

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <div className="header_main">
      {/* left part */}
      {/* icon for mobile screen */}
      <button
        onClick={() => setIsOpen(true)}
        className=" text-[14px] text-[#343C6A] md:hidden "
      >
        <FaBars />
      </button>
      <div className=" header_title">
        <h2 className=" text-[20px] md:text-[28px] text-[#343C6A] font-semibold ">
          Overview
        </h2>
      </div>

      {/* middle part start */}
      <div className="header_middle_main">
        <div className=" header_middle_inputdiv ">
          <IoSearchOutline className="text-[#718EBF] " size={20} />
          <input
            type="text"
            name="search"
            placeholder="Search for something"
            className="text-[15px] bg-transparent font-semibold text-[#8BA3CB] outline-none   "
          />
        </div>

        <button className="middle_btn text-[#718EBF]">
          <RxGear />
        </button>
        <button className="middle_btn text-[#FE5C73] ">
          <LuBellDot />
        </button>
      </div>
      {/* middle part end */}

      {/* right part start */}
      <div className="right_avatar">
        <button className="right_btn">
          <img src={proImage} />
        </button>
      </div>
      {/* right part end */}
    </div>
  );
};

export default Header;
