import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Modal from "../Modal/Modal";
import { successAlert } from "../../../Services/Toast/Toast";
import { BsStars } from "react-icons/bs";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
//----------------------------------------------------------

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.data.UserName : null;
  const navigete = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const { profile_image } = useSelector((state) => state.user);

  //Logout
  const handleLogout = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    setModalOpen(false);
    successAlert("Logout successful");
    setTimeout(() => {
      navigete("/login");
      JSON.parse(localStorage.removeItem("user"));
    }, 1000);
  };

  return (
    <div className="sticky top-0 z-50">
      <Modal
        id="logout_modal"
        title="Are you sure you want to logout?"
        btn_title="Logout"
        isOpen={modalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmLogout}
      />

      {/* ======================= */}

      <div className="navbar border-b bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 my-2"
            >
              <li>
                <Link to={"/"} className="naveList" active>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/explore-recipe"} className="naveList" active>
                  Recipes
                </Link>
              </li>
              <li>
                <Link to={"/"} className="ai_naveItem" active>
                  Genarate with AI
                  <BsStars className="text-red-500 text-xl" />
                </Link>
              </li>
              <li>
                <Link to={"/userchat"} className="naveList" active>
                  Message
                </Link>
              </li>
              <li>
                <Link
                  to={"/user-profile/collections"}
                  className="naveList"
                  active
                >
                  Collection
                </Link>
              </li>
            </ul>
          </div>

          <Link to={"/"}>
            <img
              src="/logo.png"
              className="h-7 sm:h-9 object-cover"
              alt="coconut."
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to={"/"} className="naveList_main" active>
                Home
              </Link>
            </li>
            <li>
              <Link to={"/explore-recipe"} className="naveList_main" active>
                Recipes
              </Link>
            </li>
            <li>
              <Link to={"/"} className="ai_naveItem" active>
                Genarate with AI
                <BsStars className="text-red-500 text-xl" />
              </Link>
            </li>
            <li>
              <Link to={"/userchat"} className="naveList_main" active>
                Message
              </Link>
            </li>
            <li>
              <Link
                to={"/user-profile/collections"}
                className="naveList_main"
                active
              >
                Collection
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 avatar bg-white border-none hover:bg-transparent"
            >
              {profile_image ? (
                <div className="w-12 rounded-full">
                  <img src={`/Images/${profile_image}`} />
                </div>
              ) : (
                <FaUserCircle
                  className="h-12 w-12 text-gray-300"
                  aria-hidden="true"
                />
              )}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 border"
            >
              <li>
                <a className="font-bold text-[18px] font-abc hover:bg-transparent border-b">
                  {userName?.toUpperCase()}
                </a>
              </li>
              {user ? (
                <Link to={"/user-profile"}>
                  <li>
                    <a>Profile</a>
                  </li>
                </Link>
              ) : null}

              {user ? (
                <Link onClick={handleLogout}>
                  <li>
                    <a className="text-red-600 ">Logout</a>
                  </li>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <li>
                    <a>Login</a>
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
