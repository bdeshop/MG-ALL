import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { TbRating18Plus } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo_footer from "../../../assets/logo.png";
// Help Center
const helpLinks = [
  { label: "About US", link: "/help?tab=About Us" },
  { label: "Deposit", link: "/help?tab=Deposit" },
  { label: "Withdrawal", link: "/help?tab=Withdrawal" },
  { label: "Games", link: "/help?tab=Games" },
  { label: "Terms and Conditions", link: "/help?tab=Terms and Conditions" },
  { label: "Privacy and Security", link: "/help?tab=Privacy and Security" },
  { label: "FAQs", link: "/help?tab=FAQs" },
];
// Game center
const gameLinks = [
  { label: "Hot Games", link: "/" },
  // { label: "Favorites", link: "/" },
  { label: "Slots", link: "/" },
  { label: "Live", link: "/" },
  { label: "Sports", link: "/" },
  // { label: "E-Sports", link: "/" },
  { label: "Poker", link: "/" },
  { label: "Fish", link: "/" },
  { label: "Lottery", link: "/" },
];
const vendorLogos = [
  "JL-COLOR.png",
  "SPB-COLOR.png",
  "PG-COLOR.png",
  "BNG-COLOR.png",
  "FC-COLOR.png",
  "MG-COLOR.png",
  "JDB-COLOR.png",
  "SS-COLOR.png",
  "PS-COLOR.png",
  "AMBS-COLOR.png",
  "FP-COLOR.png",
  "EZG-COLOR.png",
  "5G-COLOR.png",
  "AE-COLOR.png",
  "BOM-COLOR.png",
  "NE-COLOR.png",
  "RT-COLOR.png",
];

const Footer = () => {
  return (
    <div className="bg-[#003a3a] w-full py-8 lg:py-16 px-4 lg:px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="lg:flex gap-5 text-white">
          <div className="flex flex-wrap gap-2 w-full justify-center">
            <div
              className="flex-1 mb-3 min-w-[120px] flex items-center justify-center cursor-pointer px-4 py-2 text-lg font-bold rounded-md bg-[#025659] text-[#FCCF00] hover:bg-yellow-400 hover:text-yellow-700 transition-all"
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
                height: "40px",
                padding: "10px 5px",
                background: "linear-gradient(180deg, #0f727c, #004e56)",
                border: "1px solid rgba(0, 97, 72, 1)",
                borderRadius: "8px",
                boxShadow: "0 1px 0 0 #005540",
                color: "linear-gradient(180deg, #ffe600, #ffb800)",
              }}
            >
              অংশীদার
            </div>
            <Link
              className="flex-1 min-w-[120px] flex items-center justify-center cursor-pointer px-4 py-2 text-lg font-bold rounded-md bg-[#025659] text-[#FCCF00] hover:bg-yellow-400 hover:text-yellow-700 transition-all"
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
                height: "40px",
                padding: "10px 5px",
                background: "linear-gradient(180deg, #0f727c, #004e56)",
                border: "1px solid rgba(0, 97, 72, 1)",
                borderRadius: "8px",
                boxShadow: "0 1px 0 0 #005540",
                color: "linear-gradient(180deg, #ffe600, #ffb800)",
              }}
              to={"https://tawk.to/chat/68f68ce6a86dab1951b9ac2e/1j81hcq00"}
            >
              লাইভ চ্যাট
            </Link>
          </div>

          <div className="flex justify-between gap-5 whitespace-nowrap mb-5 lg:mb-0 lg:justify-end">
            {/* Help Center */}
            <div className="lg:block hidden lg:flex">
              <h2 className="text-xl font-bold text-yellow-500">Help Center</h2>
              <ul className="flex flex-col gap-1 mt-2 text-base">
                {helpLinks.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-300"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Game center */}
            <div className="lg:flex lg:justify-end">
              <h2 className="text-xl font-bold text-yellow-500">
                খেলার কেন্দ্র
              </h2>
              <ul className="flex flex-wrap gap-2 mt-2 text-base justify-start lg:justify-end">
                {gameLinks.map((item, index) => (
                  <li
                    key={index}
                    className="border p-1 px-2 border-[#107E6D] rounded-md "
                  >
                    <Link
                      to={item.link}
                      className="relative inline-block after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-teal-300 after:transition-all after:duration-300 hover:after:w-full hover:text-teal-300 text-[#1FE5B6]"
                    >
                      {item.label === "Hot Games"
                        ? "গরম খেলা"
                        : item.label === "Favorites"
                        ? "পছন্দের গেমস"
                        : item.label === "Slots"
                        ? "স্লট গেম"
                        : item.label === "Live"
                        ? "লাইভ সাসির"
                        : item.label === "Sports"
                        ? "স্পোর্টস"
                        : item.label === "E-Sports"
                        ? "ই-স্পোর্টস গেম"
                        : item.label === "Poker"
                        ? "পোকার গেম"
                        : item.label === "Fish"
                        ? "ফিশিং গেম"
                        : item.label === "Lottery"
                        ? "লটারি"
                        : item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* left site */}
          <div className="">
            <div className="flex gap-2">
              <img
                className="w-16 md:w-20 h-16 md:h-20"
                src={logo_footer}
                alt=""
              />
              <p className="text-xs md:text-base mb-4 text-[#e0fff7]">
                CP666 website is operated by company, under license number
                GLH-OCCHKTW079780120 issued to it and regulate Gaming Services
                Provider N.V., authorized by the Governm of Curaçao under
                license number 375JAZ.
              </p>
            </div>
            <div className="border-b border-teal-300 flex justify-center md:justify-start gap-2 pb-2 md:pb-0 mb-4 md:my-4">
              <Link className="py-1 px-4 text-lg rounded-md text-yellow-400 bg-teal-700 hidden md:block">
                PARTNER
              </Link>
              <Link className="py-1 px-4 text-lg rounded-md text-yellow-400 bg-teal-700 hidden md:block">
                Live Chat
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-blue-700">
                <FaFacebookF />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-red-400">
                <FaInstagram />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-blue-400">
                <FaTelegramPlane />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-white bg-green-500">
                <FaWhatsapp />
              </Link>
              <Link className="flex items-center justify-center w-8 h-8 text-lg rounded-full text-red-400 bg-white">
                <TbRating18Plus />
              </Link>
            </div>
            <div className="grid grid-cols-6 md:grid-cols-7 gap-2">
              {vendorLogos.map((logo, index) => (
                <img
                  key={index}
                  className="w-14"
                  src={`https://images.185949949.com/TCG_PROD_IMAGES/RNG_LIST_VENDOR/${logo}`}
                  alt={`Vendor ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
