import React, { useEffect, useState } from "react";
import "./UserProfile.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import AddRecipe from "../AddRecipe/AddRecipe";
import { useSelector } from "react-redux";
import { getLoggedUserInfo } from "../../../Services/api/user_API";
import LoggedUserCard from "../LoggedUserCard/LoggedUserCard";
//-----------------------------------------------------------------

const UserProfile = () => {
  const { id } = useSelector((state) => state.user);
  const [userData, setUserData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [count, setCount] = useState(0);

  // for fetching data of the user
  useEffect(() => {
    const getLoggedUserData = async () => {
      const data = await getLoggedUserInfo(id);
      if (data) {
        setRecipeData(data.recipeData);
        setUserData(data.userDetails);
        setCount(data.recipeData.length);
      } else {
        console.log("error");
      }
    };
    getLoggedUserData();
  }, []);

  return (
    <>
      <section>
        <div className="heade_div">
          <div className="image-div">
            <img
              className="profile_image"
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>

          <div className="profile_dtl_div">
            <div className="ml-6 text-2xl font-bold font-sans mt-3">
              <h1>{userData.UserName}</h1>
            </div>
            <div className="ml-6 text-sm font-sans mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur esse facere totam sed aut maxime modi, commodi
                quibusdam omnis laborum consequatur rerum dignissimos corporis
                aliquid incidunt fugit quis eos delectus.
              </p>
            </div>

            <div className="flex gap-7 ml-6 mt-4">
              <div>
                <h1 className="font-thin font-sans text-xs">Recipes</h1>
                <h1 className="font-sans font-bold">{count}</h1>
              </div>
              <div>
                <h1 className="font-thin font-sans text-xs">following</h1>
                <h1 className="font-sans font-bold">
                  {userData.following ? `${userData.following.length}` : "0"}
                </h1>
              </div>
              <div className="ml-auto justify-center mr-2 mt-5 w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* body section of profile page */}
      <section>
        <div className="profile_sec_div">
          <div className="p-6 border-gray-200 ">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Add Recipe
            </button>
          </div>
        </div>

        <dialog id="my_modal_4" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <AddRecipe />
          </div>
        </dialog>
      </section>

      {/* ============================ */}
      <section>
        <div className="flex flex-wrap gap-10 justify-center mx-4 border rounded-t-md bg-slate-100 p-5">
          {recipeData.map((recipe) => {
            return <LoggedUserCard data={recipe} />;
          })}
        </div>
      </section>
    </>
  );
};

export default UserProfile;
