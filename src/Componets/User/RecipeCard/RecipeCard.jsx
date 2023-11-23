import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";
//----------------------------------------------------------------

const RecipeCard = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      {/* Dropdown */}
      <div className="absolute top-4 right-4">
        <div className="relative inline-block text-left">
          <div>
            <div
              className="inline-flex w-full justify-center rounded-md px-3 py-3 text-sm font-semibold shadow-sm bg-white/10 hover:bg-white/30 transition duration-300"
              aria-expanded={isDropdownOpen}
              aria-haspopup={isDropdownOpen}
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </div>

          {isDropdownOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-fixed backdrop-blur-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <Link
                  to={`/recipedetails/${props.data._id}/${props.data.recipeDetails[0]._id}`}
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-slate-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-1"
                >
                  View
                </Link>
                <Link
                  to={"#"}
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-slate-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-2"
                >
                  Report
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Card */}
      <div className="w-72 rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-44 object-cover"
          src={`Images/${props.data.recipeImage[0]}`}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 max-h-40 h-40 overflow-hidden text-ellipsis">
          <div className="font-bold text-xl mb-2">{props.data.title}</div>
          <p className="text-gray-700 font-sans text-sm h-6">
            {props.data.description}
          </p>
        </div>

        <div className="flex px-3 py-3 relative bg-orange-300">
          <div className="absolute right-12 bottom-6">
            <p className="text-xs font-sans">123</p>
          </div>
          <div>
            <img
              className="inline-block h-14 w-14 rounded-full ring-2 ring-white"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4jDwIlW1Zfn4daXPkK17hsFh7W5Ar7ooOQ&usqp=CAU"
              alt=""
            />
          </div>

          {props.id === props.data.recipeDetails[0]._id ? (
            <div className="flex px-2 flex-col">
              <p className="font-sans font-semibold my-auto">You</p>
              <p className="font-sans text-xs">
                <span className="font-sans text-sm">2</span> Days Ago
              </p>
            </div>
          ) : (
            <div className="flex px-2 flex-col">
              <p className="font-sans font-semibold my-auto">
                {props.data.recipeDetails[0].UserName}
              </p>
              <p className="font-sans text-xs">
                <span className="font-sans text-sm">2</span> Days Ago
              </p>
            </div>
          )}

          <div className="absolute right-6 bottom-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c-4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipeCard);
