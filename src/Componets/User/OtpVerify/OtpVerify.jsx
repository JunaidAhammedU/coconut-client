import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const OtpVerify = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const otp_req = /^\d{4}$/gm;

    if (!otp_req.test(otp)) {
      toast.error("Invalid OTP", toastMessage(1000));
    } else {
      const data = await axios.post(
        "https://coconut-server-b054.onrender.com" + "/otp-verify",
        { otp }
      );
      if (data.data.verified) {
        toast.info("Verified", toastMessage(1000));
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        toast.error("Invalid OTP", toastMessage(1000));
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-5">
            <img
              className="mx-auto h-10 w-auto"
              src="/logo.png"
              alt="coconut"
            />
          </div>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleFormSubmit}
            >
              <div>
                <label
                  htmlFor="otp"
                  className="block mb-2 text-sm text-gray-900 dark:text-white font-semibold"
                >
                  Verify Your OTP
                </label>
                <input
                  type="number"
                  name="otp"
                  id="otp"
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
                  placeholder="*****"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Verify
              </button>
              {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p> */}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default OtpVerify;
