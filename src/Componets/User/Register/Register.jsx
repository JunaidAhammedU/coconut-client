import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../Loader/Loader";
//------------------------------------------------------------

const Register = () => {
  const [user, setUser] = useState({
    UserName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);

  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  // Toaster Message
  const toastMessage = (param) => {
    return {
      position: "top-center",
      autoClose: param,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
  };

  // cheking user already exist!
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  });

  // Handle Register Page
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name_reg = /^[A-Za-z_][a-zA-Z0-9_.]{3,15}$/gm;
    const email_reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm;
    const password_reg =
      /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*().\\?]).{8,16}$/gm;

    if (!name_reg.test(user.UserName)) {
      toast.error("Invalid Username", toastMessage(1000));
    } else if (!email_reg.test(user.email)) {
      toast.error("Invalid Email Address", toastMessage(1000));
    } else if (!password_reg.test(user.password)) {
      toast.error("Create Strong Password", toastMessage(1000));
    } else {
      setLoader(true);
      const { data } = await axios.post(
        import.meta.env.VITE_REACT_APP_SERVER_URL + "/register",
        { ...user }
      );

      if (data.exist) {
        toast.warning("User Already exist!!", toastMessage(3000));
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      } else {
        toast.success("New Account Created!", toastMessage(1500));
        setTimeout(() => {
          setLoader(false);
        }, 1000);
        setTimeout(() => {
          navigate("/otp-verify");
        }, 2000);
      }
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/logo.png" alt="coconut" />
        <h2 className="mt-5 font-sans text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="UserName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User Name
            </label>
            <div className="mt-2">
              <input
                id="UserName"
                name="UserName"
                type="text"
                autoComplete="UserName"
                required
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="password"
                required
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
              {showPassword ? (
                <svg
                  className="absolute w-4 h-4 text-gray-800 dark:text-white top-1/2 transform -translate-y-1/2 right-3 cursor-pointer "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 14"
                  onClick={showPasswordHandle}
                >
                  <g
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                  </g>
                </svg>
              ) : (
                <svg
                  className="absolute w-4 h-4 text-gray-800 dark:text-white top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 14"
                  onClick={showPasswordHandle}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </div>
          </div>

          <div>
          {loader ? (
              <button className="flex w-full justify-center transition duration-500 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {" "}
                <Loader />{" "}
              </button>
            ) : (
              <button
                type="submit"
                className="flex w-full justify-center transition duration-500 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            )}
          </div>

          {/* <div className="flex items-center justify-center">
            <div>
              <button className="w-60 h-10 rounded-lg border transition duration-200 hover:border-gray-800 flex items-center justify-start shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 488 512"
                  className="mr-5 ml-5"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                <span className="text-center font-semibold text-sm">
                  Continue with <span class="text-blue-700">Google</span>
                </span>
              </button>
            </div>
          </div> */}
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Don’t have an account yet?{" "}
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-gray-700 hover:text-gray-950"
          >
            Login
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
