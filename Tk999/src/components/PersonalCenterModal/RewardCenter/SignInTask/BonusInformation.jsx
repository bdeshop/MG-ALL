import bonusInfoImage from "../../../../assets/bonusInfoImage.png";
import infoImage from "../../../../assets/Info.png";

const bonusData = [
  { day: "Day 1", amount: "৳ 10.00" },
  { day: "Day 2", amount: "৳ 15.00" },
  { day: "Day 3", amount: "৳ 20.00" },
  { day: "Day 4", amount: "৳ 25.00" },
  { day: "Day 5", amount: "৳ 30.00" },
  { day: "Day 6", amount: "৳ 40.00" },
  { day: "Day 7", amount: "৳ 50.00" },
];

const BonusInformation = () => {
  return (
    <div className=" bg-[#F5F5F5] px-2  py-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {bonusData.map((item, index) => (
          <div
            key={index}
            className="bg-white relative py-1 px-6 rounded-lg flex flex-col items-center shadow-2xl"
          >
            <div className="flex flex-col  items-center ">
              <p className="font-semibold  text-gray-700">{item.day}</p>
              <p className="text-sm font-bold text-[#4CAF50] ">{item.amount}</p>
            </div>

            <img
              src={bonusInfoImage}
              alt="bonus"
              className="w-[70%] mt-3 rounded"
            />
            <button className="mt-3 bg-[#656565] hover:bg-bgRed text-white text-sm px-4 py-1 rounded-full">
              Sign In
            </button>
            <img src={infoImage} alt="info" className=" w-4 h-4 absolute right-2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BonusInformation;
