import InvitationRewardImage from "../../../../../assets/invitation-reward.94bc2714.png";
import AchievementImage from "../../../../../assets/chievement-reward.2915c15d.png";
import RechargeImage from "../../../../../assets/chievement-reward.2915c15d.png";

const PriceReview = () => {
  const rewardData = [
    {
      img: InvitationRewardImage,
      title: "আমন্ত্রণ পুরস্কার",
      amount: "৳ 51,600.00",
      claims: "329 দাবিত",
    },
    {
      img: AchievementImage,
      title: "বোনাস পুরস্কার",
      amount: "৳ 32,000.00",
      claims: "210 দাবিত",
    },
    {
      img: RechargeImage,
      title: "উপহার পুরস্কার",
      amount: "৳ 18,500.00",
      claims: "152 দাবিত",
    },
  ];

  return (
    <div className="py-2 bg-priceReviewBg">
      <h3 className="text-sm text[#1b1b4b] px-2 ">এখন পর্যন্ত প্রাপ্ত পুরষ্কার</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-2 gap-4">
        {rewardData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 bg-white p-1 rounded-md shadow"
          >
            <img src={item.img} alt="" className="w-[20%]" />
            <div className="flex flex-col items-start">
              <p className="text-[#566073] text-sm font-bold">{item.title}</p>
              <p className="text-[#3b2987] font-bold">{item.amount}</p>
              <p className="text-[#666]">{item.claims}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceReview;
