import {
  FaSignOutAlt,
} from "react-icons/fa";

import AccountDetailsModal from "./AccountDetailsModal";
import LogoutTab from "./LogoutTab";
import { useState } from "react";

const AccountDetails = ({language,
  formData,setFormData,
  handleInputChange,selectedItem,
  setSelectedItem,activeModal, setActiveModal,items,handleModalSwitch,handleSubmit}) => {
  
  
  
  const [isOpenLogout, setIsOpenLogout] = useState(false);
  

  

  

  return (
    <div className="">
      <div className="flex flex-col gap-4 bg-bgAccountTwo overflow-y-auto max-h-[95vh] custom-scrollbar-hidden p-4 rounded-lg shadow">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setSelectedItem(item);
              setActiveModal(item.action);
            }}
            className="flex items-center gap-4 cursor-pointer hover:bg-blue-50 p-2 rounded"
          >
            <span className="text-3xl text-white bg-bgYellow rounded-full p-2 ">
              {item.icon}
            </span>
            <div className="flex flex-col">
              <p className="font-semibold text-gray-800">{item.title}</p>
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
            
          </div>
        ))}

        <div className="flex items-center gap-4 cursor-pointer hover:bg-blue-50 p-2 rounded">
          <span className="text-3xl text-white bg-bgYellow rounded-full p-2 ">
            <FaSignOutAlt />
          </span>
          <div className="flex flex-col" onClick={() => setIsOpenLogout(true)}>
            <p className="font-semibold text-gray-800">
              {language === "bn" ? "লগআউট" : "Logout"}
            </p>
            <p className="text-sm text-gray-600">
              {language === "bn" ? "নিরাপদে লগআউট করুন।" : "Logout Safely"}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className={`fixed  inset-0 z-50 flex justify-end bg-black bg-opacity-50  overflow-hidden`}
          onClick={() => setSelectedItem(null)}
        >
          <AccountDetailsModal
            items={items}
            handleModalSwitch={handleModalSwitch}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            handleSubmit={handleSubmit}
            activeModal={activeModal}
            language={language}
            formData={formData}
            handleInputChange={handleInputChange}
            setFormData={setFormData}
            setActiveModal={setActiveModal}
          />
        </div>
      )}
      {isOpenLogout && (
        <LogoutTab
          setIsOpenLogout={setIsOpenLogout} // Pass setIsOpenLogout to the child
          language={language}
        />
      )}
    </div>
  );
};

export default AccountDetails;
