import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBalanceThunk, updateUsernameThunk } from "@/features/auth/authSlice";
import userImage from "../../assets/0.png";
import signInImage from "../../assets/signin.534111d5.png";
import { RiVipCrown2Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import AccountBalance from "./AccountBalance";
import levelBg from "../../assets/MyAccount (2).png";
import AccountProcess from "./AccountProcess";
import AccountPercentage from "./AccountPercentage";
import AccountDetails from "./AccountDetails";

const Account = ({
  language,
  formData,
  setFormData,
  handleInputChange,
  selectedItem,
  setSelectedItem,
  activeModal,
  setActiveModal,
  items,
  handleModalSwitch,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const { user, balance, balanceLoading, balanceError } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.name || "rohankh");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?._id) {
      dispatch(getBalanceThunk());
    }
  }, [dispatch, user]);

  const handleEditUsername = () => {
    setIsEditing(true);
  };

  const handleSaveUsername = async () => {
    if (!newUsername) {
      setError("Username is required");
      return;
    }
    try {
      await dispatch(updateUsernameThunk({ userId: user._id, name: newUsername })).unwrap();
      setError(null);
      setIsEditing(false);
    } catch (err) {
      setError(err || "Failed to update username");
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewUsername(user?.name || "rohankh");
    setError(null);
  };

  const reloadBalance = () => {
    if (user?._id) {
      dispatch(getBalanceThunk());
    }
  };

  const toggleBalanceVisibility = () => {
    setShowBalance((prev) => !prev);
  };

  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-2 p-6">
      <div className="bg-bgAccount py-2">
        <div
          className="flex flex-row gap-2 bg-cover bg-center p-4 rounded-lg"
          style={{ backgroundImage: `url(${levelBg})` }}
        >
          <img src={userImage} alt="" className="w-16 h-16 rounded-full" />
          <div className="text-white flex flex-col gap-2">
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-bgVIP px-2 rounded-full">
                <RiVipCrown2Line />
                <p>VIP Level 1</p>
              </div>
              <img src={signInImage} alt="" />
            </div>
            <div className="flex gap-2 text-black items-center">
              {isEditing ? (
                <div className="flex flex-col gap-2">
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    className="bg-[#002632] text-white px-4 py-2 rounded-xl"
                    placeholder="Enter username"
                  />
                  {error && <p className="text-red-400 text-sm">{error}</p>}
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveUsername}
                      className="text-sm bg-yellow-400 text-[#b64100] px-2 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="text-sm bg-gray-400 text-white px-2 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="font-medium">{user?.name || "rohankh"}</p>
                  <FaRegEdit className="cursor-pointer" onClick={handleEditUsername} />
                </>
              )}
            </div>
            <div className="flex gap-1 items-center text-xs text-black text-opacity-50">
              <p>joined {user?.createdAt ? new Date(user.createdAt).toISOString().split('T')[0] : "2025-04-05"}</p>
            </div>
          </div>
        </div>

        <AccountBalance
          reloadBalance={reloadBalance}
          loading={balanceLoading}
          toggleBalanceVisibility={toggleBalanceVisibility}
          showBalance={showBalance}
          balance={balance}
          language={language}
        />
        <AccountProcess />
      </div>

      <AccountPercentage />

      <AccountDetails
        language={language}
        formData={formData}
        setFormData={setFormData}
        handleInputChange={handleInputChange}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        items={items}
        handleModalSwitch={handleModalSwitch}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Account;