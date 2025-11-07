import bgImage from "../../../assets/rewardimage.png";
import userImage from "../../../assets/0.png";

import { FaRegEdit } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import Balance from "./Balance";
import vipImage from "../../../assets/VIP Image.png";
import smallDeviceImage from "../../../assets/mall-bg.c29e722c.png";

const RewardBalance = () => {
  return (
    <div className="lg:py-2 relative ">
      <div >
       
      <img src={smallDeviceImage} alt="" className="lg:hidden w-full h-[200px]  " />
       
      </div>
      <div className="absolute rounded-md lg:bottom-0 -bottom-4 left-1/2 lg:left-0  lg:-translate-x-0  -translate-x-1/2 w-[80%] lg:w-auto text-center  lg:static">
      
      <div
        className="bg-cover   bg-vipMobileBg lg:bg-none  bg-center p-4 rounded-lg   items-center relative"
        style={
          window.innerWidth >= 780 ? { backgroundImage: `url(${bgImage})` } : {}
        }
      >
        <div className=" ">
          <div className="flex gap-2 ">
            <img
              src={userImage}
              alt="User"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col lg:leading-normal leading-tight">
              {/* Username & Edit */}

              <div className="flex gap-2  items-center text-black font-semibold  lg:text-white bg-opacity-80 px-2 rounded">
                <p className="font-medium">rohankh</p>
                <FaRegEdit />
              </div>
              <div className="lg:flex lg:gap-2 lg:leading-normal leading-tight  items-center  px-2 rounded text-[#25252599]  lg:text-white">
                <p className="lg:text-base hidden lg:block text-xs">Username:</p>
                <div className="flex gap-2  items-center text-[10px] lg:text-xs rounded-full p-1 lg:p-2 lg:bg-[#919ba6]">
                  <p className="font-medium">rohankh</p>
                  <FaRegCopy />
                </div>
              </div>
              <Balance />
            </div>
          </div>
          {/* Available Balance */}
          <div className="lg:flex hidden flex-col gap-2  items-center  px-2 rounded text-white">
            <p>Available Balance</p>
            <p className="font-bold">
              <strong className="text-6xl">0</strong>.00
            </p>
          </div>
          {/* Vip Level */}
          <div className="py-4 lg:hidden">
           
          <div className="flex justify-between  text-[#25252599]">
            <div className="flex items-center gap-2">
              <img src={vipImage} alt="" className="w-[20%]" />
              <p className="text-xs">VIP Level 1</p>
            </div>
            <div>
              <p className="text-xs">সুবিধা</p>
            </div>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="flex-1  h-px bg-[#25252599]"></div>
            <p className="text-sm text-[#25252599] ">1/2</p>
          </div>
           
          </div>
        </div>
        <span className="absolute right-6 top-2">
          <TfiReload className="font-bold text-xl  bg-[rgba(0, 0, 0, .1)] hover:text-textRed text-white" />
        </span>
      </div>
        
      </div>
    </div>
  );
};

export default RewardBalance;
