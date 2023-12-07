import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { useSelector } from "react-redux";
import {
  getLoggedUserInfo,
  getCollectionData,
} from "../../../Services/api/user_API";
import ProfileHeader from "../ProfileHeader/ProfileHeader";
import { Link, Outlet } from "react-router-dom";
//-----------------------------------------------------------------

const UserProfile = () => {
  const { id } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [collecionData, setCollecionData] = useState([]);
  const [recipeCount, setRecipeCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState("recipes");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  // for fetching data of the user
  const getLoggedUserData = async () => {
    const data = await getLoggedUserInfo(id);
    if (data) {
      setRecipeData(data?.recipeData);
      setUserData(data?.userDetails);
      setRecipeCount(data?.recipeData.length);
    }
  };
  // for fetching data of the user
  const getAllCollectionData = async () => {
    const data = await getCollectionData(id);
    setCollecionData(data?.data?.recipe);
  };

  useEffect(() => {
    getLoggedUserData();
    getAllCollectionData();
  }, []);

  return (
    <>
      <ProfileHeader userData={userData} recipeCount={recipeCount} />

      {/* ======= */}
      <section>
        <div className="flex px-6 justify-center">
          <div className="">
            <ul className="flex flex-wrap text-sm font-medium text-center text-black ">
              <li className="me-2">
                <Link
                  to="/user-profile/recipeList"
                  onClick={() => handleOptionClick("recipes")}
                  className={`inline-block py-2 px-7 rounded-2xl ${
                    selectedOption === "recipes"
                      ? "bg-black text-white"
                      : "text-black"
                  }`}
                >
                  Recipes
                </Link>
              </li>

              <li className="me-2">
                <Link
                  to="/user-profile/collections"
                  onClick={() => handleOptionClick("collections")}
                  className={`inline-block py-2 px-5 rounded-2xl ${
                    selectedOption === "collections"
                      ? "bg-black text-white"
                      : "text-black"
                  }`}
                >
                  Collections
                  <div className="badge bg-orange-500 text-white border-none ">
                    {collecionData?.length ? collecionData?.length : "0"}
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-3 h-[500px]">
          <Outlet context={{ recipeData, collecionData }} />
        </div>
      </section>
    </>
  );
};

export default UserProfile;
