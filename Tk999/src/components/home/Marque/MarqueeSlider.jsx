import { getNotices } from "@/features/notice/NoticeControlThunk";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const MarqueeSlider = () => {
  const dispatch = useDispatch();
  const { title, titleBD, emoji, isLoading, isError, errorMessage, active } = useSelector(
    (state) => state.noticeControl
  );
  const { language, secondaryColor } = useSelector((state) => state.theme);

  // Fetch notices on component mount
  useEffect(() => {
    dispatch(getNotices());
  }, [dispatch]);

  // Loading state
  if (isLoading) {
    return (
      <div className="relative bg-[#002f2f] rounded-full shadow-md w-full max-w-5xl mx-auto my-2 lg:my-4 pr-4 py-1.5 md:py-2 overflow-hidden">
        <p className="text-white text-xs sm:text-base pl-10">Loading...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="relative bg-[#002f2f] rounded-full shadow-md w-full max-w-5xl mx-auto my-2 lg:my-4 pr-4 py-1.5 md:py-2 overflow-hidden">
        <p className="text-white text-xs sm:text-base pl-10">Error: {errorMessage}</p>
      </div>
    );
  }

  // If no notice is available or not active
  if (!title || !titleBD || !active) {
    return (
      <div className="relative bg-[#002f2f] rounded-full shadow-md w-full max-w-5xl mx-auto my-2 lg:my-4 pr-4 py-1.5 md:py-2 overflow-hidden">
        <p className="text-white text-xs sm:text-base pl-10">
          {language === "bn" ? "কোনো নোটিশ পাওয়া যায়নি" : "No notice available"}
        </p>
      </div>
    );
  }

  return (
    <div className="relative bg-[#002f2f] rounded-full shadow-md w-full max-w-5xl mx-auto my-2 lg:my-4 pr-4 py-1.5 md:py-2 overflow-hidden">
      {/* 📢 Dynamic Emoji Overlay */}
      <div
        className="absolute px-2 top-1/2 -translate-y-1/2 z-10 text-base lg:text-xl bg-[#002f2f]"
        style={{ color: secondaryColor }}
      >
        {emoji}
      </div>

      {/* Scrolling Text */}
      <Link
        to="/promotions" // Adjust the link as per your routing
        rel="noopener noreferrer"
        className="block whitespace-nowrap text-xs sm:text-base font-medium animate-marquee hover:[animation-play-state:paused] cursor-pointer pl-10"
        style={{ color: secondaryColor }}
      >
        {language === "bn" ? `${emoji} ${titleBD}` : `${emoji} ${title}`}
      </Link>
    </div>
  );
};

export default MarqueeSlider;