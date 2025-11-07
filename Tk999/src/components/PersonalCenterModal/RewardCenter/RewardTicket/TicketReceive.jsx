import promoBg from "../../../../assets/promo-bg.b716fece.jpg";
import promoLeftBg from "../../../../assets/WhatsApp Image 2025-04-14 at 04.24.56_f89f7f5d.jpg";
import promoRightBg from "../../../../assets/rightBg.jpg";

const TicketReceive = () => {
    return (
        <div>
           <div style={{ backgroundImage: `url(${promoBg})` }} className=" w-full">
        {/* <img src={promoBg} alt="" /> */}
        <div className="flex justify-center   p-8 ">
          <h3 className="text-lg  font-semibold text-[#555]">
            কোন টিকেট পাওয়া যায় নি
          </h3>
          <div className="flex gap-4">
            {/* Left Promo Card */}
            <div className="relative w-1/2 rounded-xl overflow-hidden shadow-lg">
              <img
                src={promoLeftBg}
                alt=""
                className="w-full h-full object-cover"
              />

              <h3 className="absolute top-2 left-2 text-xs  text-white px-2 py-1 rounded-md ">
                কুপন
              </h3>

              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-xl font-extrabold drop-shadow-md">
                000
              </p>

              <p className="absolute bottom-2 left-2 text-white text-[10px]  px-2 py-[2px] rounded">
                শেষ তারিখ ----.--.--
              </p>
            </div>

            {/* Right Promo Countdown Card */}
            <div className="relative w-1/2 rotate-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src={promoRightBg}
                alt=""
                className="w-full h-full object-cover"
              />

              <h3 className="absolute top-2 left-1/2 -translate-x-1/2 text-xs bg-yellow-500 text-black px-2 py-1 rounded-md shadow-md">
                বাকি
              </h3>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white">
                <h3 className="text-xl font-bold drop-shadow-md">00 দিন</h3>
                <p className="text-sm">00:00</p>
              </div>

              <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-textRed text-[7px] font-semibold p-1 rounded-full shadow-md hover:bg-gray-200">
                প্রাপ্ত করুন
              </button>
            </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default TicketReceive;
