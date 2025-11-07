import Modal from "@/components/home/modal/Modal";
import { useState, useEffect } from "react";
import { RiLuggageDepositFill, RiMenuUnfoldFill } from "react-icons/ri";
import Login from "../login/Login";
import RegistrationModal from "../login/RegistrationModal";
import { Link } from "react-router-dom";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { FaBangladeshiTakaSign, FaIdCardClip } from "react-icons/fa6";
import { GiDiceSixFacesSix } from "react-icons/gi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { MdOutlineInsertChart } from "react-icons/md";
import PersonalCenterModal from "@/pages/PersonalCenterModal";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceThunk, logout } from "@/features/auth/authSlice";
import logo from "../../../assets/logo.png";
import PromoBanner from "@/components/shared/appBanner/AppBanner";

const Navbar = ({ onMenuClick, isSidebarOpen }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user, balance, balanceLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Dropdown
  const [isHovering, setIsHovering] = useState(false);
  const menuItems = [
    {
      id: "tab1",
      label: "My Account",
      icon: <FiUser />,
      link: "/information#tab1",
    },
    {
      id: "tab4",
      label: "Betting Record",
      icon: <GiDiceSixFacesSix />,
      link: "/information#tab4",
    },
    {
      id: "tab9",
      label: "Account Record",
      icon: <MdOutlineInsertChart />,
      link: "/information#tab9",
    },
    {
      id: "tab9",
      label: "Internal Message",
      icon: <BiSolidMessageRounded />,
      link: "/information#tab9",
    },
    {
      id: "tab2",
      label: "Deposit",
      icon: <RiLuggageDepositFill />,
      minWidth: "100px",
      height: "40px",
      padding: "0 12px",
      fontSize: "16px",
      fontWeight: "700",
      color: "#ffab49",
      textAlign: "center",
      textShadow: "0 2px 0 rgba(17, 0, 0, .3)",
      background: "linear-gradient(180deg, #0f727c, #004e56)",
      border: "1px solid rgba(17,134,125,.5)",
      borderRadius: "8px",
      boxShadow: "0 2px 0 0 #003941",
      link: "/information#tab2",
    },
    {
      id: "tab3",
      label: "Withdrawal",
      icon: <BiMoneyWithdraw />,
      link: "/information#tab3",
    },
    {
      id: "tab1",
      label: "Customer Service",
      icon: <MdOutlineAccountBalanceWallet />,
    },
    {
      id: "tab1",
      label: "Sign out",
      icon: <MdLogout />,
      onClick: () => dispatch(logout()),
    },
  ];

  // Deposit, withdrawal
  const actions = [
    {
      id: "tab2",
      label: "Deposit",
      icon: <BiMoneyWithdraw />,
      link: "/information#tab2",
    },

    {
      id: "tab3",
      label: "Withdrawal",
      icon: <BiMoneyWithdraw size={20} />,
      link: "/information#tab3",
    },
  ];

  const [isInformationModalOpen, setIsInformationModalOpen] = useState(false);

  // Fetch balance when user is logged in
  useEffect(() => {
    if (user && user._id) {
      dispatch(getBalanceThunk());
    }
  }, [user, dispatch]);

  return (
    <>
      <div className="bg-[#00352f] fixed top-0 left-0 w-full z-50 shadow-md">
        <PromoBanner />
        <div className="flex justify-between items-center px-3 sm:px-4 py-2 sm:py-2.5 gap-2 border-b-2 border-[#075a51]">
          <div className="flex items-center gap-2 sm:gap-5 md:gap-8 text-lg">
            <button
              className="p-2 text-white outline-none"
              onClick={onMenuClick}
            >
              <RiMenuUnfoldFill
                className={`text-xl sm:text-2xl transform transition-transform duration-300 ${
                  isSidebarOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <Link to={"/"}>
              <img
                className="w-20 sm:w-20 md:w-30 xl:w-40 2xl:w-40"
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>

          <div className="relative flex gap-2 lg:gap-4 items-center font-bold text-sm lg:text-lg">
            {user ? (
              <>
                {/* Profile with dropdown */}
                <div className="relative z-50">
                  <div
                    className="flex items-center gap-1.5 bg-yellow-400 p-1 pr-2 rounded-xl cursor-pointer"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <img
                      src={
                        user.profileImage ||
                        "https://images.185949949.com//TCG_PROD_IMAGES/B2C/01_PROFILE/PROFILE/0.png"
                      }
                      className="lg:w-8 lg:h-8 w-6 h-6 rounded-full"
                      alt="User"
                    />
                    <FaCaretDown className="text-black" />
                  </div>

                  {isHovering && (
                    <div
                      className="absolute left-0 p-1 w-full lg:w-52 min-w-[150px] bg-[#00303b] text-white rounded-xl border border-[#00b4c0] shadow-xl overflow-hidden"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      {menuItems.map((item, index) => (
                        <Link
                          to={
                            item.label === "Customer Service"
                              ? "https://tawk.to/chat/68f68ce6a86dab1951b9ac2e/1j81hcq00"
                              : item.link
                          }
                          key={index}
                          className="flex items-center gap-2 px-4 py-2.5 hover:bg-[#00464f] text-xs sm:text-sm md:text-base lg:text-lg border-b border-[#00464f] last:border-b-0 transition-colors rounded-lg"
                          onClick={() => {
                            if (item.onClick) {
                              item.onClick();
                            } else {
                              setIsInformationModalOpen(true);
                            }
                          }}
                        >
                          <span className="text-base">{item.icon}</span>
                          <span style={{ fontSize: "10px" }}>
                            {item.label === "My Account"
                              ? "আমার অ্যাকাউন্ট"
                              : item.label === "Betting Record"
                              ? "বাজির রেকর্ড"
                              : item.label === "Account Record"
                              ? "লাভ ও ক্ষতি"
                              : item.label === "Internal Message"
                              ? "মেসেজ"
                              : item.label === "Deposit"
                              ? "ডিপজিত"
                              : item.label === "Withdrawal"
                              ? "উত্তলন"
                              : item.label === "Customer Service"
                              ? "গ্রাহক সেবা"
                              : item.label === "Sign out"
                              ? "লগ আউট"
                              : item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <div>
                  <PersonalCenterModal
                    isOpen={isInformationModalOpen}
                    onClose={() => setIsInformationModalOpen(false)}
                  />
                </div>
                {/* Balance Box */}
                <div className="flex gap-2 items-center px-4 py-1 sm:py-1.5 text-[#23ffc8] bg-[#002632] border border-[#006165] rounded-md sm:rounded-xl">
                  <FaIdCardClip className="text-white" />
                  <Link className="flex gap-2 items-center">
                    <div className="flex gap-0.5 items-center border-b border-[#002632] hover:border-[#23ffc8] duration-300">
                      <FaBangladeshiTakaSign size={14} />
                      {balanceLoading ? (
                        <div className="h-4 w-4 border-b-2 border-white animate-spin rounded-full"></div>
                      ) : (
                        balance || 0
                      )}
                    </div>
                    <TfiReload
                      size={14}
                      onClick={() => user && dispatch(getBalanceThunk())}
                      className="cursor-pointer"
                    />
                  </Link>
                </div>

                {/* Deposit, withdrawal */}
                <div className="md:flex gap-2 lg:gap-3 items-center hidden">
                  {actions.map((action, index) => (
                    <Link to={action.link} key={index}>
                      <div
                        onClick={() => {
                          setIsInformationModalOpen(true);
                        }}
                        className="flex gap-1.5 text-[#b64100] bg-[#ffd900] hover:bg-[#d2b92c] items-center px-3 py-1 sm:py-1.5 rounded-md sm:rounded-xl duration-300"
                      >
                        {action.icon}
                        {action.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex gap-2">
                <div
                  onClick={() => setShowLoginModal(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    transition: ".2s",
                    textTransform: "capitalize",
                    width: "fit-content",
                    minWidth: "100px",
                    height: "40px",
                    padding: "0 12px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#ffab49",
                    textAlign: "center",
                    textShadow: "0 2px 0 rgba(17, 0, 0, .3)",
                    background: "linear-gradient(180deg, #0f727c, #004e56)",
                    border: "1px solid rgba(17, 134, 125, .5)",
                    borderRadius: "8px",
                    boxShadow: "0 2px 0 0 #003941",
                  }}
                >
                  Login
                </div>
                <div
                  onClick={() => setShowRegisterModal(true)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    userSelect: "none",
                    transition: ".2s",
                    textTransform: "capitalize",
                    gap: "8px",
                    width: "fit-content",
                    minWidth: "100px",
                    height: "40px",
                    padding: "0 12px",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#b64100",
                    textAlign: "center",
                    textShadow: "0 2px 0 rgba(159, 52, 0, .2)",
                    background: "linear-gradient(180deg, #ffe600, #ffb800)",
                    border: "1px solid rgba(255, 242, 166, .5)",
                    borderRadius: "12px",
                    boxShadow: "inset 0 2px 0 1px #fff2a6, 0 2px 0 0 #b64100",
                  }}
                >
                  Register
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

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
    </>
  );
};

export default Navbar;
