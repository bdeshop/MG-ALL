import rescueFundBg from "../../../../assets/rescue-fund-bg.253b620b.png";
import userImage from "../../../../assets/0.png";
import taskBg from "../../../../assets/task-bg.578f551b.png";
import RescueFundInformation from "./RescueFundInformation";
import RescueFundModal from "./RescueFundModal";

const RescueFund = () => {
  

  return (
    <div>
      {/* large device */}
      <div className="hidden lg:block">
        <img src={rescueFundBg} alt="" className="w-full bg-cover" />
        <div className=" rounded-md    gap-4 text-center bg-white">
          <h3 className="text-lg font-bold">Rescue Funds</h3>
          <div className="bg-white  p-4 rounded-md shadow-md max-w-4xl mx-auto">
            <RescueFundInformation />
          </div>
        </div>
      </div>
      {/* small device */}
      <div className="lg:hidden">
        <div className="relative">
          <img src={taskBg} alt="" className="w-[1000px] bg-cover" />
          <div className="flex items-center gap-2 absolute rounded-md lg:bottom-0 top-4 left-1/2 lg:left-0  lg:-translate-x-0  -translate-x-1/2 w-[80%] lg:w-auto   lg:static ">
            <img
              src={userImage}
              alt="User"
              className="w-16 h-16 rounded-full"
            />
            <div className="flex flex-col lg:leading-normal leading-tight">
              {/* Username & Edit */}

              <div className="flex flex-col   items-center text-white font-semibold  lg:text-white bg-opacity-80  ">
                <p className="font-medium">rohankh</p>
                <p>৳ 0.00</p>
              </div>
            </div>
          </div>
        </div>
       <RescueFundModal/>
      </div>
    </div>
  );
};

export default RescueFund;
