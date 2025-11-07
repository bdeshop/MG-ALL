import { fetchHomeGameMenu } from "@/features/home-game-menu/GameHomeMenuSliceAndThunks";
import { baseURL_For_IMG_UPLOAD } from "@/utils/baseURL";
import { useEffect } from "react";
import {
  BsFire,
  BsGift,
  BsStar,
  BsShield,
  BsChatDots,
  BsDownload,
  BsGlobe,
} from "react-icons/bs";
import { FaUserFriends, FaTrophy, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 14px 4px; /* py-3.5 px-1 */
  margin: 12px 0; /* my-3 */
  background: rgba(0, 0, 0, 0);
  background-image: linear-gradient(#003840, rgb(0, 56, 64));
  background-clip: border-box;
  background-origin: padding-box;
  background-position: 0% 0%;
  background-repeat: repeat;
  border: 2px solid #003840;
  border-radius: 8px;
  border-block-end-color: #002125ff;
  border-block-start-color: #003840;
  border-bottom-color: #002125ff;
  border-inline-end-color: #002125ff;
  border-inline-start-color: #002125ff;
  border-left-color: #002125ff;
  border-right-color: #003840;
  border-top-color: #005461ff;
  transition: all 0.3s ease;

  &:hover {
    background-image: linear-gradient(rgb(10, 102, 112), rgb(0, 64, 72));
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(205, 109, 95);
  font-size: 28px;
  fill: rgb(0, 0, 0);
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-width: 1px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-opacity: 1;
  margin-bottom: 4px;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`;

const Label = styled.p`
  color: rgb(224, 255, 247);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
`;

const SidebarMenu = () => {
  const dispatch = useDispatch();
  const { homeGameMenu, isLoading, isError, errorMessage } = useSelector(
    (state) => state.homeGameMenu
  );

  useEffect(() => {
    dispatch(fetchHomeGameMenu());
  }, [dispatch]);

  const menuItems = [
    {
      id: 2,
      label: "রেফার",
      icon: <FaUserFriends />,
      path: "",
    },
    {
      id: 4,
      label: "প্রমোশন",
      icon: <BsGift />, // প্রমোশনের জন্য গিফট আইকন
      path: "/promotions",
    },
    {
      id: 6,
      label: "পুরস্কার",
      icon: <FaTrophy />, // পুরস্কারের জন্য ট্রফি আইকন
      path: "",
    },
    // {
    //   id: 8,
    //   label: "রিবট",
    //   icon: <BsShield />, // রিবেটের জন্য শিল্ড আইকন
    //   path: "",
    // },
    {
      id: 10,
      label: "ভিআইপি",
      icon: <BsStar />, // ভিআইপি-র জন্য স্টার আইকন
      path: "",
    },
    {
      id: 12,
      label: "মিশন",
      icon: <FaUsers />, // মিশনের জন্য ইউজার গ্রুপ আইকন
      path: "",
    },
    {
      id: 14,
      label: "বাংলা",
      icon: <BsGlobe />, // ভাষার জন্য গ্লোব আইকন
      path: "",
    },
    {
      id: 16,
      label: "ডাউনলোড",
      icon: <BsDownload />, // ডাউনলোডের জন্য ডাউনলোড আইকন
      path: "",
    },
    {
      id: 18,
      label: "চ্যাট",
      icon: <BsChatDots />, // গ্রাহক সেবার জন্য চ্যাট আইকন
      path: "",
    },
  ];

  // Generate menu items from homeGameMenu.menuOptions
  const dynamicMenuItems =
    homeGameMenu?.menuOptions?.map((option) => ({
      id: option._id,
      label: option.title_bn || option.title, // বাংলা টাইটেল যদি থাকে তবে ব্যবহার করা হবে
      icon: option.image ? (
        <img
          src={`${baseURL_For_IMG_UPLOAD}s/${option.image}`}
          alt={`${option.title} icon`}
          onError={(e) => {
            e.target.src = `${baseURL_For_IMG_UPLOAD}s/placeholder.png`; // ফলব্যাক ইমেজ
          }}
        />
      ) : (
        <BsFire />
      ),
      path: `/submenu/${option._id}`,
    })) || [];

  // Combine HOT GAME item with dynamic menu items
  const menuItemsRow = [...dynamicMenuItems];

  return (
    <div className="grid grid-cols-2 gap-2 px-2 sm:px-4">
      <div className="space-y-1">
        {menuItemsRow.map((item) => (
          <Link key={item.id} to={item.path}>
            <MenuItem>
              <IconContainer>
                {typeof item.icon === "string" ? (
                  <img
                    src={item.icon}
                    alt={`${item.label} icon`}
                    onError={(e) => {
                      e.target.src = `${baseURL_For_IMG_UPLOAD}s/placeholder.png`;
                    }}
                  />
                ) : (
                  item.icon
                )}
              </IconContainer>
              <Label>
                {item.label === "Favorites"
                  ? "গরম খেলা"
                  : item.label === "Slot"
                  ? "স্লট"
                  : item.label === "Live"
                  ? "লাইভ কেসিন"
                  : item.label === "Sports"
                  ? "স্পোর্টস"
                  : item.label === "E-Sports"
                  ? "ই-স্পোর্টস "
                  : item.label === "POCKER"
                  ? "পোকার "
                  : item.label === "Fishing"
                  ? "ফিশিং"
                  : item.label === "Lottery"
                  ? "লটারি"
                  : item.label}
              </Label>
            </MenuItem>
          </Link>
        ))}
      </div>
      <div className="space-y-1">
        {menuItems.map((item) => (
          <Link key={item.id} to={item.path}>
            <MenuItem>
              <IconContainer>{item.icon}</IconContainer>
              <Label>{item.label}</Label>
            </MenuItem>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarMenu;
