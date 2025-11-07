import { RxCaretLeft, RxCaretRight, RxCross2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL_For_IMG_UPLOAD } from "@/utils/baseURL";
import Modal from "@/components/home/modal/Modal";
import { useSelector } from "react-redux";
import Login from "@/components/shared/login/Login";
import RegistrationModal from "@/components/shared/login/RegistrationModal";

const GameCard = ({
  title = "HOT GAMES",
  games = [],
  parentMenu,
  parentId = "",
}) => {
  const swiperRef = useRef(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const { user, balance, balanceLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slidePrev = () => swiperRef.current?.slidePrev();
  const slideNext = () => swiperRef.current?.slideNext();

  const handlePlayClick = () => {
    if (!user) {
      setShowRegisterModal(true);
    } else {
      navigate(`/liveGame/${selectedGame._id}`);
    }
    setSelectedGame(null);
  };

  return (
    <div className="max-w-5xl mx-auto py-3 lg:py-4 px-2 sm:px-4 game-card-container relative">
      {/* Fixed Download Bar at Top */}

      {/* Main GameCard Content */}
      <div className="flex justify-between items-center mb-4 lg:mb-3 mt-16">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold text-[#10f3c8] uppercase">
          {title === "Hot Games"
            ? "গরম খেলা"
            : title === "Favorites"
            ? "পছন্দের গেমস"
            : title === "Slot"
            ? "স্লট গেম"
            : title === "Live"
            ? "লাইভ কাসিন"
            : title === "Sports"
            ? "স্পোর্টস"
            : title === "E-Sports"
            ? "ই-স্পোর্টস গেম"
            : title === "Pocker"
            ? "পোকার গেম"
            : title === "Fishing"
            ? "ফিশিং গেম"
            : title === "Lottery"
            ? "লটারি"
            : title}
        </h2>

        <div className="flex items-center gap-2">
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              transition: "0.2s",
              flexShrink: 0,
              gap: "8px",
              height: "28px",
              padding: "0 5px",
              background: "linear-gradient(180deg, #0f727c, #004e56)",
              border: "1px solid rgba(0, 97, 72, 1)",
              borderRadius: "8px",
              boxShadow: "0 1px 0 0 #005540",
              color: "linear-gradient(180deg, #ffe600, #ffb800)",
            }}
            to={`/submenu/${parentId}`}
            className="px-3 py-0.5 lg:py-1 text-sm font-bold rounded-md hover:text-yellow-700 bg-[#025659] hover:bg-yellow-400 text-[#ffe600]"
          >
            সব দেখুন
          </Link>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              transition: "0.2s",
              flexShrink: 0,
              gap: "8px",
              height: "28px",
              padding: "0 5px",
              background: "linear-gradient(180deg, #0f727c, #004e56)",
              border: "1px solid rgba(35, 255, 200, 0.1)",
              borderRadius: "8px",
              boxShadow: "0 1px 0 0 #005540",
            }}
            onFocus={({ target }) =>
              (target.style.textDecoration = "underline")
            }
            onBlur={({ target }) => (target.style.textDecoration = "none")}
            onClick={slidePrev}
          >
            <RxCaretLeft size={20} />
          </button>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              userSelect: "none",
              transition: "0.2s",
              flexShrink: 0,
              gap: "8px",
              height: "28px",
              padding: "0 5px",
              background: "linear-gradient(180deg, #ffe600, #ffb800)",
              border: "1px solid rgba(255, 242, 166, 0.5)",
              borderRadius: "8px",
              boxShadow: "0 1px 0 0 #b64100, inset 0 1px 0 1px #fff2a6",
              color: "#000",
            }}
            onFocus={({ target }) =>
              (target.style.textDecoration = "underline")
            }
            onBlur={({ target }) => (target.style.textDecoration = "none")}
            onClick={slideNext}
          >
            <RxCaretRight size={20} />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Grid]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        observer={true}
        observeParents={true}
        spaceBetween={15}
        grid={{
          rows: title === "Sports" || title === "Live" ? 1 : 2,
          fill: "row",
        }}
        slidesPerView={5}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 8,
            grid: {
              rows: title === "Sports" || title === "Live" ? 1 : 2,
              fill: "row",
            },
          },
          480: {
            slidesPerView: 3.5,
            spaceBetween: 10,
            grid: {
              rows: title === "Sports" || title === "Live" ? 1 : 2,
              fill: "row",
            },
          },
          768: {
            slidesPerView: 4.5,
            spaceBetween: 12,
            grid: { rows: 2, fill: "row" },
          },
          1024: {
            slidesPerView: 5.3,
            spaceBetween: 14,
            grid: { rows: 2, fill: "row" },
          },
          1440: {
            slidesPerView: 6.5,
            spaceBetween: 16,
            grid: { rows: 2, fill: "row" },
          },
        }}
        className="swiper-container"
        style={{ padding: "0 5px" }}
      >
        {games.map((game, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer transition-all duration-300"
              style={{
                width: "100%",
                aspectRatio: "3/4",
              }}
              onClick={() => setSelectedGame(game)}
            >
              <img
                src={`${baseURL_For_IMG_UPLOAD}s/${game?.image}`}
                alt={game?.name}
                className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110 group-hover:blur-[2px]"
              />
              {game.showHeart && (
                <Link to={game.heartLink || "#"}>
                  <div className="absolute top-2 right-2 bg-[#ffffff45] backdrop-blur-sm rounded-full p-1 hover:bg-white/60 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 
                 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 
                 5.42 22 8.5c0 3.78-3.4 6.86-8.55 
                 11.54L12 21.35z"
                      />
                    </svg>
                  </div>
                </Link>
              )}
              <div
                className="absolute inset-0 hidden md:flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={handlePlayClick}
              >
                <p className="text-white text-base sm:text-lg font-bold uppercase">
                  Play
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Sheet for Mobile */}
      {isMobile && selectedGame && (
        <div
          className="fixed bottom-0 left-0 right-0 h-[140px] sm:h-[160px] z-50 flex flex-col justify-between px-4 py-3 shadow-lg transition-transform duration-300 ease-in-out bg-[linear-gradient(rgb(255,255,255),rgb(200,200,200))]"
          style={{
            backgroundAttachment: "scroll",
            backgroundClip: "border-box",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderBlockStartStyle: "solid",
            borderBlockStartWidth: "6px",
            borderCollapse: "separate",
            textAlign: "start",
            textDecoration: "none",
            opacity: 1,
            transformStyle: "flat",
            transitionDelay: "0s",
            transitionDuration: "300ms",
            transitionProperty: "transform",
            transform: selectedGame ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            onClick={() => setSelectedGame(null)}
          >
            <RxCross2 size={24} />
          </button>
          <div className="flex items-center gap-3">
            <img
              src={`${baseURL_For_IMG_UPLOAD}s/${selectedGame?.image}`}
              alt={selectedGame?.name}
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] mt-[-40px] rounded-[10px] object-cover object-center"
            />
            <p className="text-black text-[14px] sm:text-[16px] font-bold truncate">
              {selectedGame?.apiData?.name || selectedGame?.name}
            </p>
          </div>
          <button
            className="w-full py-2 bg-[#2563eb] text-white text-[14px] sm:text-[16px] font-bold rounded-[15px] hover:bg-[#1e40af]"
            onClick={handlePlayClick}
          >
            Play Game
          </button>
        </div>
      )}

      {/* Login Modal */}
      <Modal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)}>
        <Login
          onClose={() => setShowLoginModal(false)}
          onRegisterClick={() => {
            setShowLoginModal(false);
            setShowRegisterModal(true);
          }}
        />
      </Modal>

      {/* Register Modal */}
      <Modal
        isOpen={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
      >
        <RegistrationModal
          onClose={() => setShowRegisterModal(false)}
          openLogin={() => {
            setShowRegisterModal(false);
            setShowLoginModal(true);
          }}
        />
      </Modal>
    </div>
  );
};

export default GameCard;
