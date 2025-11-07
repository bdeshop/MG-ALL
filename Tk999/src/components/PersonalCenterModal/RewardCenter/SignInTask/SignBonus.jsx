import signInRulesImage from "../../../../assets/sign-rules.6b536871.png";
import giftImage from "../../../../assets/gift.5366dc7e.png";

const SignBonus = () => {
  return (
    <div>
      <div className="relative">
        <img src={signInRulesImage} alt="" className="w-full " />
        <div className="absolute rounded-md -bottom-4 left-1/2 -translate-x-1/2 w-[80%] grid grid-cols-2 gap-4 text-center bg-white">
          {["Last Signin", "Sign in total bonus"].map((item, index) => (
            <div className="border-r " key={index}>
              <p className="text-sm text-gray-600">{item}</p>
              <p className="text-lg font-semibold text-textRed">0</p>
            </div>
          ))}
        </div>
      </div>

      {/* large Device */}
      <div className="mt-6 p-4 hidden lg:block ">
        <p className="font-bold">
          Effective time of the task :{" "}
          <strong className="text-textRed">Permanently effective</strong>
        </p>
        <h3 className="text-center font-bold">Daily Login Bonus</h3>
        <p>daily login bonus</p>
      </div>

      {/* small Device Part */}
      <div className="lg:hidden">
        <div className="border-b-4 pt-2">
          <h3 className="mt-6 w-[50%] pb-1 mx-auto text-center border-b-4 border-textRed text-textRed font-semibold">
            Daily Login Bonus
          </h3>
        </div>
        <div className="flex gap-2 items-center justify-center py-2">
          <img src={giftImage} alt="" className="w-[10%]" />
          <div className="">
            <p className="text-textRed">Daily Login Bonus</p>
            <p className="text-[10px] font-semibold text-[#6f6f6f]">আজ সাইন ইন করুন</p>
          </div>
          <button className="text-white rounded-full bg-bgRed py-1 px-2 text-xs ">Sign In</button>
        </div>
        <div className="text-[#6f6f6f] text-[10px] flex gap-2 justify-center">
          <div>
            <p>রিচার্জ থ্রেশহোল্ড:</p>
            <p className="text-textRed text-[8px]">৳ 200.00</p>
          </div>
          <div>
            <p>রিচার্জ থ্রেশহোল্ড:</p>
            <p className="text-textRed text-[8px]">৳ 200.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignBonus;
