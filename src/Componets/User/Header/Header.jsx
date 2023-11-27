import React, { useState } from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./Header.css";
import Modal from "../Modal/Modal";
import { successAlert } from "../../../Services/Toast/Toast";
import { BsStars } from "react-icons/bs";
//----------------------------------------------------------

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.data.UserName : null;
  const navigete = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

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

      <Navbar fluid rounded className="border border-b-0.05 h-16 ">
        <Navbar.Brand>
          <img
            src="/logo.png"
            className="mr-3 h-6 sm:h-9 object-cover"
            alt="coconut."
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
                rounded
                className=""
              />
            }
          >
            {user ? (
              <Dropdown.Header>
                <span className="block text-sm">{userName}</span>
              </Dropdown.Header>
            ) : (
              <Dropdown.Header>
                <span className="block text-sm">Guest</span>
              </Dropdown.Header>
            )}

            {user ? (
              <Link to={"/user-profile"}>
                <Dropdown.Item>Account</Dropdown.Item>
              </Link>
            ) : null}

            <Dropdown.Divider />
            {user ? (
              <Link onClick={handleLogout}>
                {" "}
                <Dropdown.Item>Logout</Dropdown.Item>{" "}
              </Link>
            ) : (
              <Link to={"/login"}>
                {" "}
                <Dropdown.Item>Login</Dropdown.Item>{" "}
              </Link>
            )}
          </Dropdown>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="bg-white z-10 md:z-0 lg:z-0 xl:z-0">
          <NavLink to={"/"} className=" naveList " href="#" active>
            Home
          </NavLink>
          <NavLink to={"/explore-recipe"} className="naveList" href="#" active>
            Recipes
          </NavLink>
          <NavLink to={"/"} className="ai_naveItem" active>
            Genarate with AI
            <BsStars className="text-red-500 text-xl" />
          </NavLink>
          <NavLink to={"/userchat"} className="naveList" href="#" active>
            Message
          </NavLink>

          <NavLink to={"/user-profile/collections"} className="naveList" href="#" active>
            Collection
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
