import { useState } from "react";

const categories = [
  "All",
  "Deposit",
  "Slots",
  "Fishing",
  "APP Download",
  "Newbie",
  "Rebate",
  "Ranking",
  "Poker",
  "Live Casino",
  "Sports",
];

const promotions = [
  {
    category: "All",
    title: "সদস্য দিবস বোনাস",
    description: "প্রতি মাসের ১, ১১ এবং ২১ তারিখ",
    image: "/promo1.png",
    footer: "Member Carnival Day 1st-11th-21st",
  },
  {
    category: "All",
    title: "১ জনকে রেফার করে ৫০০ টাকা উপার্জন করুন",
    description: "এবং কম লেভেলের বাজির উপর উপভোগ করুন ১% পয়েন্ট",
    image: "/promo2.png",
    footer: "Invite 1 person and earn 500",
  },
];

const PromotionContain = () => {
  const [selected, setSelected] = useState("All");

  const filteredPromotions = promotions.filter(
    (promo) => selected === "All" || promo.category === selected
  );

  return (
    <div className="bg-[#013b3f] min-h-screen text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold text-teal-300 mb-4">PROMOTION</h1>

      {/* Category Menu */}
      <div className="flex overflow-auto gap-4 pb-2 mb-6 border-b border-teal-500">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full whitespace-nowrap transition-all duration-200 ${
              selected === cat
                ? "bg-white text-black font-semibold"
                : "hover:bg-teal-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Promotions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPromotions.map((promo, index) => (
          <div
            key={index}
            className="bg-[#002f34] p-4 rounded-xl shadow-md flex flex-col"
          >
            <img
              src={promo.image}
              alt="Promo"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold text-yellow-400 mb-2">
              {promo.title}
            </h2>
            <p className="text-lg text-pink-300 mb-3">{promo.description}</p>
            <div className="text-sm text-gray-300 flex justify-between items-center">
              <span>{promo.footer}</span>
              <button className="bg-yellow-400 text-black px-3 py-1 rounded-md font-semibold">
                More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionContain;
