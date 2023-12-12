import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../Redux/User/UserSlice";
import "react-toastify/dist/ReactToastify.css";
import api_request from "../../../axios";
import Loader from "../../Loader/Loader";
import { successAlert, errorAlert } from "../../../Services/Toast/Toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
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
        localStorage.setItem("user", JSON.stringify(data));
        dispatch(
          updateUser({
            id: data?.data?._id,
            name: data?.data?.UserName,
            email: data?.data?.email,
            followers: data?.data?.followers,
            following: data?.data?.following,
            profile_image: data?.data?.profile_image,
          })
        );
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-screen relative">
      <img
        src="/Home (1).png"
        className="absolute bottom-0 right-0 object-cover w-full -z-0"
        alt=""
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm z-50">
        <img className="mx-auto h-10 w-auto" src="/logo.png" alt="coconut" />
        <h2 className="font-abc mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm px-2 py-2 rounded-2xl shadow-md z-50 backdrop-blur-md bg-white/30">
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
                value={user?.email}
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
                value={user?.password}
                onChange={(e) =>
                  setUser({ ...user, [e.target.name]: e.target.value })
                }
                className="block w-full rounded-md border-0 py-1.5 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
              {showPassword ? (
                <AiOutlineEye
                  className="eyeIcon"
                  onClick={showPasswordHandle}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className="eyeIcon"
                  onClick={showPasswordHandle}
                />
              )}
            </div>
          </div>

          <div>
            {loader ? (
              <button className="flex w-full justify-center transition duration-500 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <Loader />
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
    </div>
  );
};

export default Login;
