import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "@/features/auth/authSlice";
import { baseURL } from "@/utils/baseURL";
import logo_bg from "../../../assets/login_page_image.png";
import loginPGIMG from "../../../assets/loginPGIMG.png";
import b__2 from "../../../assets/22221.png";

const Login = ({ onClose, onRegisterClick }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState(null);
  const [banner, setBanner] = useState(1); // Match RegistrationModal
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  // Fetch login banner (commented out to match RegistrationModal)
  // useEffect(() => {
  //   const fetchBanner = async () => {
  //     try {
  //       const response = await fetch(`${baseURL}/bannersRegistration`);
  //       const data = await response.json();
  //       if (data.success) {
  //         const loginBanner = data.data.find(
  //           (banner) => banner.type === "login_banner"
  //         );
  //         setBanner(loginBanner || null);
  //       } else {
  //         setError("Failed to load login banner");
  //       }
  //     } catch (err) {
  //       setError("Failed to load login banner");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchBanner();
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!phoneNumber || !password) {
      setError("Phone number and password are required");
      return;
    }
    try {
      await dispatch(loginUserThunk({ phoneNumber, password })).unwrap();
      setError(null);
      onClose();
    } catch (err) {
      setError(err || "Login failed");
    }
  };

  return (
    <div
      className="w-full md:w-[680px] h-[500px] bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl overflow-hidden relative bg-white/10 backdrop-blur-md"
      style={{ backgroundImage: `url(${loginPGIMG})` }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-yellow-400 text-2xl font-bold hover:text-yellow-300 transition"
        aria-label="Close modal"
      >
        ✕
      </button>

      <div className="flex h-full">
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
              src={logo_bg}
              alt="Login Banner"
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
            Login
          </h2>
          <div className="flex items-center justify-center bg-none">
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
            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm text-gray-100">
                <input
                  type="checkbox"
                  className="mr-2 h-4 w-4 text-teal-500 border-gray-600 rounded focus:ring-teal-500"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <span className="text-teal-300 text-sm cursor-pointer hover:text-teal-200 transition">
                Forgot Password
              </span>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 font-semibold rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-teal-900 transition"
            >
              Login
            </button>
            <p className="text-sm mb-6 text-gray-100 flex items-center justify-center">
              No account yet?{" "}
              <span
                className="text-teal-300 underline cursor-pointer hover:text-teal-200 transition"
                onClick={onRegisterClick}
              >
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
