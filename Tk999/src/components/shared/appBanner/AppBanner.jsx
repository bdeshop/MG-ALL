import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import logo from "../../../assets/logoAPP.png";

const PromoBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="bg-[#003a3a] text-white flex items-center justify-between p-4 rounded shadow-md relative overflow-hidden">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <img
          className="w-[50px] h-auto md:max-w-[10%] md:h-auto"
          src={logo}
          alt=""
        />
        <div>
          <h2 className="text-orange-400 font-bold text-xs">
            APP UP TO ৳18 {">>>"}
          </h2>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Download Button + Close Icon */}
      <div className="flex items-center gap-3">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-red-700 font-bold px-5 py-2 rounded-lg shadow-md">
          Download
        </button>
        <button
          className="text-white hover:text-red-400 text-lg"
          onClick={() => setShowBanner(false)}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
