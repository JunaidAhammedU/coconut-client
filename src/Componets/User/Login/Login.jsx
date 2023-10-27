import React, { useState } from "react";
import './login.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { updateUser } from '../../../Redux/User/UserSlice'
import 'react-toastify/dist/ReactToastify.css';
//-----------------------------------------------------------

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    const email_reg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gm
    const password_reg = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*().\\?]).{8,16}$/gm

    if (!email_reg.test(user.email)) {
      toast.error("Invalid Email Address", toastMessage(1000))
    } else if (!password_reg.test(user.password)) {
      toast.error("Invlaid Password!!", toastMessage(1000));
    } else {
      const data = await axios.post(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/login`, { ...user });
      if (!data.data.exist) {
        toast.error("Invalid Username or Password!", toastMessage(1000));
      } else {
        toast.success("Successfully LoggedIn!", toastMessage(1000));
        setTimeout(() => {
          localStorage.setItem('user', JSON.stringify(data.data));
          dispatch(updateUser({ id: data.data.getUser._id, name: data.data.getUser.name, email: data.data.getUser.email }));
          navigate('/')
        }, 2000);
      }
    }
  };



  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="../../../assets/logo2.png"
          alt="coconut"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <Link to={'#'} className=" font-semibold text-orange-500 hover:text-orange-600 transition duration-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center transition duration-500 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <Link to={'/register'} className="font-semibold leading-6 text-gray-700 hover:text-gray-950">
            Start Register
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
