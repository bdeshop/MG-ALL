import { MdOutlineAttachMoney, MdOutlineMoneyOff, MdLogin } from "react-icons/md";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";

const AccountProcess = () => {
  const { language } = useContext(LanguageContext);

  const items = [
    {
      icon: <MdOutlineAttachMoney />,
      sentence:
        language === "bn"
          ? "০টি জমা অনুরোধ প্রক্রিয়াধীন"
          : "0 deposit request processing",
    },
    {
      icon: <MdOutlineMoneyOff />,
      sentence:
        language === "bn"
          ? "0 টি উত্তোলনের অনুরোধ প্রক্রিয়াধীন"
          : "0 withdraw request processing",
    },
    {
      icon: <MdLogin />,
      sentence:
        language === "bn"
          ? "শেষ লগইন সময়: ২০২৫-০৪-০৯ ১২:৩০\nশেষ লগইন আইপি: ১২৪ ৩০ ২২"
          : "Last Login Time : 2025-04-09 12:30\nLast login IP : 124 30 22",
    },
  ];

  return (
    <div className=" bg-bgAccountTwo h-full  p-2">
      <div className="flex flex-col  gap-3">
        {items.map((item, index) => (
          <div key={index} className="flex  items-center gap-2">
            <span className="text-3xl text-white bg-bgYellow rounded-full p-1">{item.icon}</span>
            <p className="text-xs text-gray-800 whitespace-pre-line">
              {item.sentence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountProcess;
