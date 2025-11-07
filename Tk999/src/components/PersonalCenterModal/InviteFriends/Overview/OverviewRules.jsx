import rulesImage from "../../../../assets/member_card_rules.53f6222a.png";
// import inviteUpArrow from "../../../../assets/invite-up-arrow-default.01fe767c.svg";
import { FcRules } from "react-icons/fc";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import iconRed from "../../../../assets/icon-question-red.d2ee0e6e.svg";
import shareIcon from "../../../../assets/shareIcon.svg";
import iconCopy from "../../../../assets/icon-copy.5b4960cd.svg";
import { useContext, useState } from "react";

import { LanguageContext } from "../../../../Context/LanguageContext";
import ReferModal from "./OverViewModals/ReferModal";
import RegulationModal from "./OverViewModals/RegulationModal";

const OverviewRules = () => {
  const { language } = useContext(LanguageContext);
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isReferOpen, setIsReferOpen] = useState(false);

  return (
    <div className="py-2 lg:py-0">
      {/* rules */}
      <div className="relative  h-[30%] ">
        <img src={rulesImage} alt="" className="w-full" />
        <div
          className="flex items-center bg-[#7cc4f8] px-1 lg:p-1  rounded-full absolute top-0 right-0"
          onClick={() => setIsRulesOpen(true)}
        >
          <FcRules className="text-black" />
          <p className=" text-xs font-bold">Rules</p>
        </div>

        <h3 className="absolute text-xs top-2 left-2 font-bold">My Tier</h3>

        <p className="absolute top-1/2 left-4 -translate-y-1/2 font-bold text-lg">
          L1
        </p>
        <div className="hidden lg:block">

        <span className="absolute text-white rounded-full p-1 top-1/2 bg-[#666] -left-2 -translate-y-1/2">
          <FaChevronLeft className="w-3 h-3" />
        </span>
        <span className="absolute text-white rounded-full p-1 bg-[#666] top-1/2 -right-2 -translate-y-1/2">
          <FaChevronRight className="w-3 h-3" />
        </span>
        
        </div>
        
      </div>

      {/* friends */}
      <div className="flex mt-2 lg:mt-0 py-8 items-center justify-center bg-highestBg rounded-md">
        <p>This is the biggest Level</p>
      </div>
      <div className="flex justify-center" onClick={() => setIsReferOpen(true)}>
        <img src={iconRed} alt="" />
        <p className="font-bold">Refer Friends Now!</p>
      </div>
      <div className="flex flex-col items-center justify-center py-6 bg-shareFriendsBg px-2">
        <h3 className="text-[#382987]">Share to your friends</h3>
        <p className="bg-white px-12 rounded-full">
          https:vkbkebkbebjjeef44354566
        </p>
        <div className="flex gap-2 mt-4">
          <div className="animate-pulse bg-shareToFriendsBg flex gap-3 justify-center items-center px-2  py-1 rounded-md">
            <img src={shareIcon} alt="" />
            <p className="text-xs"> Share to your friends</p>
          </div>
          <div className="bg-[#428dfc] flex gap-3 justify-center items-center  py-1 px-2  rounded-md">
            <img src={iconCopy} alt="" />
            <p className="text-xs">copy</p>
          </div>
        </div>
      </div>

      {/* <Modal
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      activeModal={activeModal}
      setActiveModal={setActiveModal}
      language={language}
      /> */}
      {isRulesOpen && (
        <RegulationModal setIsRulesOpen={setIsRulesOpen} language={language} />
      )}
      {isReferOpen && <ReferModal setIsReferOpen={setIsReferOpen} />}
    </div>
  );
};

export default OverviewRules;
