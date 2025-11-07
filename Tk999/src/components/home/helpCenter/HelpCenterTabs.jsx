import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const tabs = [
  {
    label: "About Us",
    header: "Welcome to ",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "Deposit",
    header: "Deposit",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "Withdrawal",
    header: "Withdrawal",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "Games",
    header: "Games",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "Terms and Conditions",
    header: "Terms and Conditions",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "Privacy and Security",
    header: "Privacy and Security",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
  {
    label: "FAQs",
    header: "FAQs",
    title: "-- award-winning online gaming provider.",
    text: "Established in 2006,  quickly developed its brand and reputation as the market leader in the global online gaming industry. The brand was founded with the principles of trust and credibility at its core, defining the ethos for the company's activities to this day.  ; has consistently demonstrated a clear focus on enriching your gaming experience. The  proudly offers you a wide variety of online gaming brands, each providing its own unique, entertaining and exciting range of games, opportunities, prizes and much more.",
    title_2: "Is it legal?",
    text_2:
      "We run our casino under the Philippines gaming license, issued by the PAGCOR. The PAGCOR is an independent regulatory body that makes sure casinos adhere to the practices and regulations that apply to online casinos",
    text_3:
      "This means we follow the most rigorous practices when it comes to player protection and responsible gaming, and that our Players are protected by the law.",
    title_3: "Is it secure?",
    text_4:
      "Yes! we got tech team monitor 24/7 non stop all year. We adhere to the highest security standards and implement them in every area of our activity. With the use of the leading programs and protocols in this field, we ensure the safety and integrity of your personal information at all times.",
  },
];

const HelpCenterTabs = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedTab = queryParams.get("tab");

  const defaultIndex = tabs.findIndex(
    (tab) => tab.label.toLowerCase() === selectedTab?.toLowerCase()
  );

  const [activeIndex, setActiveIndex] = useState(
    defaultIndex >= 0 ? defaultIndex : 0
  );

  useEffect(() => {
    if (defaultIndex >= 0) {
      setActiveIndex(defaultIndex);
    }
  }, [defaultIndex]);

  return (
    <div className="mb-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-1 bg-[#004e56] text-white p-3 md:p-4 rounded-xl shadow-md">
      {/* Left Tab Menu */}
      <div className="col-span-1">
        <h2 className="text-xl lg:text-2xl font-bold text-cyan-300 mb-4">
          Help Center
        </h2>
        <ul className="flex flex-col gap-2">
          {tabs.map((tab, index) => (
            <li key={index}>
              <button
                className={`w-full text-base font-semibold text-left px-3 md:px-4 py-1.5 md:py-3 rounded-lg flex items-center justify-between ${
                  activeIndex === index
                    ? "bg-yellow-400 text-black font-semibold"
                    : "bg-[#003a3a] hover:bg-teal-600"
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {tab.label}
                <span className="text-base">{">"}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="col-span-3 p-3 md:p-5 rounded-lg">
        <h3 className="text-xl lg:text-3xl font-bold text-teal-300 mb-3">
          {tabs[activeIndex].header}
        </h3>
        <h3 className="text-lg lg:text-xl font-bold text-teal-300 mb-2">
          {tabs[activeIndex].title}
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {tabs[activeIndex].text}
        </p>
        <h3 className="text-lg lg:text-xl font-bold text-teal-300 mt-3 mb-2">
          {tabs[activeIndex].title_2}
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {tabs[activeIndex].text_2}
        </p>
        <p className="text-sm text-gray-200 leading-relaxed">
          {tabs[activeIndex].text_3}
        </p>
        <h3 className="text-lg lg:text-xl font-bold text-teal-300 mt-3 mb-2">
          {tabs[activeIndex].title_3}
        </h3>
        <p className="text-sm text-gray-200 leading-relaxed">
          {tabs[activeIndex].text_4}
        </p>
      </div>
    </div>
  );
};

export default HelpCenterTabs;
