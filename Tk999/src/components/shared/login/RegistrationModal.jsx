import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { signupUserThunk } from "@/features/auth/authSlice";
import { baseURL } from "@/utils/baseURL";
import logo_bg from "../../../assets/login_page_image.png";
import loginPGIMG from "../../../assets/loginPGIMG.png";
import b__2 from "../../../assets/22221.png";

const RegistrationModal = ({ onClose, openLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState(null);
  // const [banner, setBanner] = useState(null);
  const [banner, setBanner] = useState(1);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // // Fetch registration banner
  // useEffect(() => {
  //   const fetchBanner = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}/bannersRegistration`);
  //       if (!response.ok) {
  //         throw new Error("Failed to load registration banner");
  //       }
  //       const data = await response.json();
  //       const registrationBanner = data.data.find(
  //         (banner) => banner.type === "registration_banner"
  //       );
  //       setBanner(registrationBanner || null);
  //     } catch (error) {
  //    console.error(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchBanner();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !password || !confirmPassword) {
      setError("Phone number and passwords are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    if (!agree) {
      setError("You must agree to the terms of use");
      return;
    }

    try {
      const resultAction = await dispatch(
        signupUserThunk({
          phoneNumber,
          password,
        })
      ).unwrap();
      setError(null);
      onClose();
      openLogin();
    } catch (err) {
      setError(err || "Registration failed");
    }
  };

  return (
    <div
      className="w-full md:w-[640px] h-[650px] bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl overflow-hidden relative bg-white/10 backdrop-blur-md"
      style={{ backgroundImage: `url(${loginPGIMG})` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-yellow-400 text-2xl font-bold hover:text-yellow-300 transition"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div className="flex h-full ">
        <div className="hidden md:flex flex-col items-center justify-center bg-teal-800/50 w-1/2 p-6">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <svg
                className="animate-spin h-8 w-8 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : banner ? (
            <img
              // src={`http://localhost:8000/uploads/${banner.url}`}
              src={logo_bg}
              alt="Registration Banner"
              className="w-full h-full object-cover rounded-l-xl"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-300 text-lg">
              No banner available
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-white/10 backdrop-blur-md">
          <h2 className="text-yellow-400 text-2xl font-bold mb-6 tracking-tight text-center">
            Register
          </h2>
          <div className="  flex items-center justify-center bg-none">
            <img className="h-30 w-28 m-auto" src={b__2} alt="22221 logo" />
          </div>

          {error && (
            <p className="text-red-400 text-sm mb-6 bg-red-500/10 p-3 rounded-lg">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Phone number"
                className="w-full bg-gray-800/50 text-gray-100 px-4 py-3 rounded-lg border border-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                aria-label="Phone number"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-gray-800/50 text-gray-100 px-4 py-3 rounded-lg border border-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-label="Password"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-gray-800/50 text-gray-100 px-4 py-3 rounded-lg border border-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500 outline-none transition"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                aria-label="Confirm Password"
              />
            </div>
            <div className="flex items-center">
              <label className="flex items-center text-sm text-gray-100">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-teal-500 border-gray-600 rounded focus:ring-teal-500"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                I am 18 years old and agree to accept{" "}
                <Link className="text-teal-300 hover:text-teal-200 ml-1 underline">
                  Terms of Use
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-teal-900 transition"
            >
              Register
            </button>
            <p className="text-sm mb-6 text-gray-100 flex items-center justify-center">
              Already have an account?{" "}
              <span
                className="text-teal-300 underline cursor-pointer hover:text-teal-200 transition"
                onClick={openLogin}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
