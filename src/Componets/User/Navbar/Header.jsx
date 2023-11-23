import React from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";
//----------------------------------------------------------

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user ? user.data.UserName : null;

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

  //Logout
  const handleLogout = () => {
    setTimeout(() => {
      toast.info("Logout successful", toastMessage(1000));
    }, 1000);
    JSON.parse(localStorage.removeItem("user"));
  };

  return (
    <div className="sticky top-0 z-50">
      <Navbar fluid rounded className="border border-b-0.05 h-16 ">
        <Navbar.Brand>
          <img src="/logo.png" className="mr-3 h-6 sm:h-9" alt="coconut." />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
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
          <NavLink to={"/"} className=" naveList" href="#" active>
            Home
          </NavLink>
          <NavLink to={"/explore-recipe"} className="naveList" href="#" active>
            Recipes
          </NavLink>
          <NavLink to={"/"} className="naveList" href="#" active>
            AI
          </NavLink>
          <NavLink to={"/userchat"} className="naveList" href="#" active>
            Message
          </NavLink>

          {/* <NavLink to={"/"} className="naveList" href="#" active>
            Contact
          </NavLink>  */}
          <ToastContainer />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
