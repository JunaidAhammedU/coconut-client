import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader/Loader";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { errorAlert, successAlert } from "../../../Services/Toast/Toast";
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

    setLoader(true);

    // api request for register
    const { data } = await axios.post(
      "http://localhost:3000" + "/register",
      { ...user }
    );
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
        navigate("/otp-verify");
      }, 2000);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8 h-screen relative ">
      <img
        src="/Home.png"
        className="absolute bottom-0 right-0 object-cover w-full -z-0"
        alt=""
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-sm z-50">
        <img className="mx-auto h-10 w-auto" src="/logo.png" alt="coconut" />
        <h2 className="mt-5 font-abc text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Register your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm px-2 py-2 rounded-2xl shadow-md z-50 backdrop-blur-md bg-white/30">
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
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Have an account?.
          <Link
            to={"/login"}
            className="font-semibold leading-6 text-gray-700 hover:text-gray-950"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
