import { useNavigate } from "react-router-dom";
import PersonalInformation from "../Components/PersonalCenterModal/PersonalInformation";
import { FaArrowLeft } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";

const PersonalCenterModal = ({ isOpen, onClose, tab, name }) => {
  console.log(isOpen, onClose, tab, name);

  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center z-[9999]">
      <div className="bg-white  w-full max-w-6xl rounded-lg shadow-lg relative">
        {/* Close Button */}
        <div className="hidden lg:flex">
          <button
            onClick={handleClose}
            className="absolute bg-informationBG top-5 right-5 text-yellow-500  p-2 rounded-full flex items-center justify-center"
          >
            <RxCross1 />
          </button>
        </div>

        <div className="lg:hidden ">
          <button
            onClick={handleClose}
            className="absolute top-2 left-2 text-white text-xl font-bold"
          >
            <FaArrowLeft />
          </button>
        </div>

        <PersonalInformation tab={tab} />
      </div>
    </div>
  );
};

export default PersonalCenterModal;
