import { BsFire } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { baseURL_For_IMG_UPLOAD } from "@/utils/baseURL";

// Styled Components
const MenuContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow-x: auto;

  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MenuList = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0 0.5rem;
  min-width: max-content;

  @media (min-width: 1024px) {
    gap: 0.5rem;
    padding: 0.5rem 0.5rem;
  }
`;
const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  //width: 92px;
  height: 40px;
  padding: 7px;
  font-size: 12px;
  font-weight: 700;
  color: rgb(224, 255, 247);
  text-align: center;
  text-transform: uppercase;
  white-space-collapse: collapse;
  background: #003940 none repeat scroll;
  background-clip: border-box;
  background-origin: padding-box;
  background-position: 0% 0%;
  background-repeat: repeat;
  border: 0.8px solid rgba(0, 28, 44, 0.4);
  border-radius: 10px;
  border-block-end-color: #047e81ff;
  border-block-start-color: #047e81ff;
  border-bottom-color: #002b36;
  border-inline-end-color: rgba(0, 28, 44, 0.4);
  border-inline-start-color: rgba(21, 139, 207, 0.4);
  border-left-color: rgba(0, 28, 44, 0.4);
  border-right-color: rgba(0, 28, 44, 0.4);
  border-top-color: #035256;
  box-shadow: rgba(0, 38, 40, 1) 0px 2px 0px 0px;
  filter: brightness(1.05);
  transition: all 0.2s ease;
  overflow: visible;
  position: static;
  padding: 0px 15px;
  font-weight: bold;

  &:hover {
    background: #028e9bff; /* #a2ff70 */
    transform: translateY(-2px);
  }

  @media (min-width: 1024px) {
    gap: 0.5rem;
    padding: 7px;
    font-size: 14px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(224, 255, 247);
  font-size: 1rem;
  fill: rgb(0, 0, 0);
  fill-opacity: 1;
  stroke: rgb(0, 0, 0);
  stroke-width: 1px;
  stroke-linecap: butt;
  stroke-linejoin: miter;
  stroke-miterlimit: 4;
  stroke-opacity: 1;

  img {
    width: 1rem;
    height: 1rem;
    object-fit: contain;
    border-radius: 0.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.25rem;
    img {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const Label = styled.p`
  text-align: center;
  white-space: nowrap;
  color: rgb(224, 255, 247);
  text-decoration: none;
`;

const LoadingContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
`;

const ErrorContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

const ErrorMessage = styled.div`
  background: #fee2e2;
  color: #b91c1c;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #f87171;
`;

const Menu = ({ homeGameMenu, isLoading, isError, errorMessage }) => {
  // Define the static "HOT GAME" item
  const hotGameItem = {
    id: 1,
    label: "HOT GAME",
    icon: <BsFire />,
    path: "/",
  };

  // Generate menu items from homeGameMenu.menuOptions
  const dynamicMenuItems =
    homeGameMenu?.menuOptions?.map((option) => ({
      id: option._id,
      label: option.title,
      icon: option.image ? (
        `${baseURL_For_IMG_UPLOAD}s/${option.image}`
      ) : (
        <BsFire />
      ),
      path: `/submenu/${option._id}`,
    })) || [];

  // Combine HOT GAME item with dynamic menu items
  const menuItems = [hotGameItem, ...dynamicMenuItems];

  // Handle loading and error states
  if (isLoading) {
    return (
      <LoadingContainer>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </LoadingContainer>
    );
  }

  if (isError) {
    return (
      <ErrorContainer>
        <ErrorMessage role="alert">
          {errorMessage || "Failed to load menu options"}
        </ErrorMessage>
      </ErrorContainer>
    );
  }

  return (
    <div className="pb-2 lg:pb-4 w-full max-w-5xl mx-auto rounded-xl overflow-hidden">
      <MenuContainer
        style={{
          marginTop: homeGameMenu?.gameBoxMarginTop
            ? `${homeGameMenu.gameBoxMarginTop}px`
            : "0px",
          marginBottom: homeGameMenu?.gameNavMenuMarginBottom
            ? `${homeGameMenu.gameNavMenuMarginBottom}px`
            : "0px",
        }}
      >
        <MenuList>
          {menuItems.map((item) => (
            <Link key={item.id} to={item.path}>
              <MenuItem>
                <IconContainer>
                  {typeof item.icon === "string" ? (
                    <img src={item.icon} alt={`${item.label} icon`} />
                  ) : (
                    item.icon
                  )}
                </IconContainer>
                <Label>
                  {console.log("this is menu -> ", item.label)}
                  {item.label === "HOT GAME"
                    ? "গরম খেলা"
                    : item.label === "Favorites"
                    ? "পছন্দের গেমস"
                    : item.label === "Slot"
                    ? "স্লট গেম"
                    : item.label === "Live"
                    ? "লাইভ সাসির"
                    : item.label === "Sports"
                    ? "স্পোর্টস"
                    : item.label === "E-Sports"
                    ? "ই-স্পোর্টস গেম"
                    : item.label === "Poker"
                    ? "পোকার গেম"
                    : item.label === "Fishing"
                    ? "ফিশিং গেম"
                    : item.label === "Lottery"
                    ? "লটারি"
                    : item.label}
                </Label>
              </MenuItem>
            </Link>
          ))}
        </MenuList>
      </MenuContainer>
    </div>
  );
};

export default Menu;
