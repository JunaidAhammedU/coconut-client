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

  // for fetching data of the user
  const getLoggedUserData = async () => {
    const data = await getLoggedUserInfo(id);
    if (data) {
      setRecipeData(data.recipeData);
      setUserData(data.userDetails);
      setRecipeCount(data.recipeData.length);
    }
  };

  // for fetching data of the user
  const getAllCollectionData = async () => {
    const data = await getCollectionData(id);
    setCollecionData(data.data.recipe);
  };

  useEffect(() => {
    getLoggedUserData();
    getAllCollectionData();
  }, []);

  return (
    <>
      <ProfileHeader userData={userData} recipeCount={recipeCount} />

      <section>
        <div className="flex px-6 justify-center">
          <div>
            <ul class="flex flex-wrap text-sm font-medium text-center text-black border-b-2 border-black/50">
              <li class="me-2">
                <Link
                  to={"/user-profile/recipeList"}
                  aria-current="page"
                  class="inline-block p-4 text-black rounded-t-lg "
                >
                  recipes
                </Link>
              </li>

              <li class="me-2">
                <Link
                  to={"/user-profile/collections"}
                  class="inline-block p-4 "
                >
                  collections
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="px-3 h-[500px] ">
          <Outlet context={{ recipeData, collecionData }} />
        </div>
      </section>
    </>
  );
};

export default UserProfile;
