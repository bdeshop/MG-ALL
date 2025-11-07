import referralImage from "../../../../assets/referralImage.png";
import avatar1Image from "../../../../assets/avatar-1.75e2f918.png";
import avatar2Image from "../../../../assets/avatar-2.a5a7a8bd.png";
import avatar3Image from "../../../../assets/avatar-3.18b3089b.png";
import firstIcon from "../../../../assets/first-icon.444cf06e.svg";
import secIcon from "../../../../assets/sec-icon.76c7f79a.svg";
import thirdIcon from "../../../../assets/third-icon.2ca64103.svg";
const OverviewIncome = () => {
  const overviewData = [
    {
      id: 1,
      title: "আজকের আয়", // "Today’s Income"
      amount: "৳ ০.০০",
      bgColor: "bg-overviewTab1Bg",
    },
    {
      id: 2,
      title: "সাপ্তাহিক আয়",
      amount: "৳ ৫০০.০০",
      bgColor: "bg-overViewTab2Bg",
    },
    {
      id: 3,
      title: "মাসিক আয়",
      amount: "৳ ২০০০.০০",
      bgColor: "bg-overViewTab2Bg",
    },
    {
      id: 4,
      title: "মোট আয়",
      amount: "৳ ১০,০০০.০০",
      bgColor: "bg-overviewTab1Bg",
    },
  ];
  const winnersData = [
    {
      id: 1,
      avatar: avatar1Image,
      icon: firstIcon,
      name: "ka*****n",
      amount: "৳ ৪৪,৪৪৪",
    },
    {
      id: 2,
      avatar:avatar2Image,
      icon: secIcon,
      name: "ro*****x",
      amount: "৳ ৩২,৫০০",
    },
    {
      id: 3,
      avatar: avatar3Image,
      icon: thirdIcon,
      name: "ma*****q",
      amount: "৳ ২৫,০০০",
    },
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        {overviewData.map((item) => (
          <div
            key={item.id}
            className={`${item.bgColor} flex flex-col items-center justify-center py-1   text-white rounded-xl shadow-md`}
          >
            <h3 className=" text-xs font-semibold">{item.title}</h3>
            <p className="text-lg font-bold">{item.amount}</p>
          </div>
        ))}
      </div>
      {/* Referral Bonus */}
      <div className="lg:flex  mx-auto px-4 items-center  justify-center  gap-4 bg-ReferralBg rounded-md py-2 mt-2 text-white">
        <h3 className="font-bold whitespace-nowrap text-xl">Referral Bonus</h3>
        <div className="flex items-center">
          <img src={referralImage} alt="" />
          <div className="flex flex-col gap-2">
            <p className="text-xl text-[#ffc576] font-semibold">৳ 200.00</p>
            <p className="leading-tight text-xs">
              Invite More Friends & Claim it!
            </p>
          </div>
        </div>
      </div>
      {/* win members */}
      <div className="grid grid-cols-3  justify-items-center bg-winnersBg mt-3 rounded-md py-2  gap-4">
        {winnersData.map((item) => (
          <div key={item.id} className="flex lg:flex-row flex-col gap-2 items-center">
            <div className="relative w-[40px] h-[40px]">
              <img
                src={item.avatar}
                alt="avatar"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute top-0 left-0 w-[16px] h-[16px]">
                <img src={item.icon} alt="icon" className="w-full h-full" />
              </div>
            </div>
            <div className="flex flex-col text-xs lg:text-base items-center">
              <p>{item.name}</p>
              <p className="font-semibold">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewIncome;
