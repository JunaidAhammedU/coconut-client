import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/User/UserSlice";
import "react-toastify/dist/ReactToastify.css";
import api_request from "../../../axios";
import { ToastContainer } from "react-toastify";
import Loader from "../../Loader/Loader";
import { successAlert, errorAlert } from "../../../Services/Toast/Toast";
//-----------------------------------------------------------------------

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Show hide password handle
  const showPasswordHandle = () => {
    setShowPassword(!showPassword);
  };

  // handle login action
  const handleSubmit = async (e) => {
    e.preventDefault();

    //set Loading animation
    setLoader(true);

    // passing data to from login to backend
    const { data } = await api_request.post("/login", { ...user });
    console.log(data.token);
    
    if (!data.status) {
      errorAlert(data.message);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    } else {
      successAlert(data.message);
      setTimeout(() => {
        setLoader(false);
      }, 1000);
      setTimeout(() => {
        localStorage.setItem("user",JSON.stringify(data))
        dispatch(
          updateUser({
            id: data.data._id,
            name: data.data.UserName,
            email: data.data.email,
            followers: data.data.followers,
            following: data.data.following,
          })
        );
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-10 w-auto" src="/logo.png" alt="coconut" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="absolute w-4 h-4 text-gray-800 dark:text-white top-1/2 transform -translate-y-1/2 right-3 cursor-pointer"
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
                Sign in
              </button>
            )}
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-gray-700 hover:text-gray-950"
          >
            Start Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
