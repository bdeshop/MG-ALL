import { FaUserCircle, FaUniversity, FaWallet } from "react-icons/fa";
import { LanguageContext } from "../../Context/LanguageContext";
import { useContext } from "react";
import lowImage from "../../assets/grade-low-bg.bc6a4c58.png";

const AccountPercentage = () => {
    const { language } = useContext(LanguageContext);
    const itemsRecommended = [
        {
          icon: <FaUserCircle />,
          sentence: language === "bn" ? "ব্যক্তিগত তথ্য" : "Personal Information",
        },
        {
          icon: <FaUniversity />,
          sentence: language === "bn" ? "ব্যাংক অ্যাকাউন্ট" : "Bank account",
        },
        {
          icon: <FaWallet />,
          sentence: language === "bn" ? "ই-ওয়ালেট যুক্ত করুন" : "Bind E-wallet",
        },
      ];
    return (
        <div className="bg-white">
           <div className="bg-cover " style={{ backgroundImage: `url(${lowImage})` }}>
        <div className="flex  flex-col items-center pt-24 pb-12 text-lowRed  ">
          <h3 className="text-6xl ">Low </h3>
          <p className="text-xs font-medium">Safety Percentage</p>
        </div>
        <div className="text-white flex flex-col items-center  ">
          <p>
            Score is <strong className="text-xl mx-2">0</strong>Points
          </p>
          <p>Your account security level is Low</p>
        </div>

        {/* Recommmended setting */}
        <div className="pt-12">
          <h3 className="text-center">Recommended Setting</h3>
          <div className="flex flex-row gap-6  p-4 rounded-lg shadow">
      {itemsRecommended.map((item, index) => (
        <div key={index} className="flex flex-col items-center gap-2">
          <span className="text-2xl p-1 text-white bg-bgYellow rounded-full">{item.icon}</span>
          <p className="text-sm text-gray-800 text-center whitespace-pre-line">
            {item.sentence}
          </p>
        </div>
      ))}
    </div>
        </div>
      </div> 
        </div>
    );
};

export default AccountPercentage;