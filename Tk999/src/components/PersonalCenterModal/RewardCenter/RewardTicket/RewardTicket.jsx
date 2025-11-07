import { useState } from "react";
import TicketRecordImage from "../../../../assets/ticket-records.a568aa3b.svg";
import TicketReceive from "./TicketReceive";
import TicketRecord from "./TicketRecord";

// import promoRightBg from "../../../assets/ticketWhite";
const RewardTicket = () => {
  const [activeModal, setActiveModal] = useState(null);
  return (
    <div className="bg-white">
      {/* tittle part */}
      <div className="text-[#4c11d3] py-1 flex gap-12">
        <p className="text-black border-l-4 px-2 border-[#4c11d3]">
          প্রাপ্তি কেন্দ্র
        </p>
        <div className="flex gap-2 px-4 cursor-pointer rounded-full bg-opacity-10 hover:bg-opacity-100 bg-[#4c11d3]"
         onClick={() => setActiveModal("TicketRecord")}
        >
          <img src={TicketRecordImage} alt="" className="" />
          <p className="hover:text-white">টিকিটের রেকর্ড</p>
        </div>
      </div>
      {/* receive ticket */}
      <TicketReceive />

      {/* Ticket Record */}
      <TicketRecord 
      activeModal={activeModal}
      setActiveModal={setActiveModal}
      />
    </div>
  );
};

export default RewardTicket;
