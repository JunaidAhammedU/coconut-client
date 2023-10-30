import React, { useEffect } from "react";
import backgroundImage from "/admin-landing.png";
import { Link } from "react-router-dom";
//-------------------------------------------------

const AdminLanding = () => {
  const adminData = JSON.parse(localStorage.getItem("admin"));

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <img
            src="https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Sample image"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/3 max-w-sm bg-white p-8 shadow-2xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="/logo.png"
              alt="coconut"
            />
            <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Admin Dashboard
            </h2>
          </div>

          {adminData ? (
            <div className="text-center md:text-left mt-5 justify-center flex">
              <Link
                to={"/admin/dashboard"}
                className="mt-4 bg-defaultBtnColor hover:bg-onHoverButton px-10 py-3 transition duration-500 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Explore.
              </Link>
            </div>
          ) : (
            <div className="text-center md:text-left mt-5 justify-center flex">
              <Link
                to={"/admin/login"}
                className="mt-4 bg-defaultBtnColor hover:bg-onHoverButton px-10 py-3 transition duration-500 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminLanding;
