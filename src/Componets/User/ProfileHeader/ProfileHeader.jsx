import React, { useEffect, useState } from "react";
import { MdOutlineEdit } from "react-icons/md";
import AddRecipe from "../AddRecipe/AddRecipe";
import ListModal from "../ListModal/ListModal";
import { getAllCategories } from "../../../Services/api/admin_API";
//------------------------------------------------------------------

const ProfileHeader = ({ userData, recipeCount }) => {
  const [allCategory, setAllCategory] = useState([]);

  useEffect(() => {
    const allCategory = async () => {
      try {
        const response = await getAllCategories();
        setAllCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allCategory();
  }, []);

  return (
    <>
      <div>
        <div className="p-5 flex justify-center items-center relative">
          <div className="avatar">
            <div className="w-36 rounded-full">
              <img src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </div>
          </div>

          <div className="absolute top-5 foldSize:right-2 ultraSm:right-3 md:right-8 lg:right-10 xl:right-10 2xl:right-10">
            <button className="btn bg-defaultBtnColor hover:bg-onHoverButton border-none foldSize:px-0 ultraSm:px-3 md:px-5 lg:px-6 xl:px-6 2xl:px-6">
              <span
                className="text-white"
                onClick={() =>
                  document.getElementById("my_modal_4").showModal()
                }
              >
                Add recipe
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="ultraSm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl font-abc font-semibold text-center text-gray-800">
            {userData.UserName}
          </h1>
          <div>
            <button className="btn bg-white hover:bg-white hover:border-black border-black/50 px-3">
              <MdOutlineEdit className="text-xl text-black" />
              <span className="text-black">Edit profile</span>
            </button>
          </div>
        </div>

        {/*  */}
        <div className="flex mt-5 gap-3  py-3 justify-center ">
          <div className="ultraSm:px-0 md:px-4 lg:px-6 justify-center flex flex-col">
            <p className="font-abc font-normal text-sm text-gray-700 text-center">
              Posts
            </p>
            <button className="btn hover:bg-white  border-none text-xs font-thin bg-white">
              <span className="font-abc font-normal text-lg">
                {recipeCount}
              </span>
            </button>
          </div>
          <div
            className="ultraSm:px-0 md:px-4 lg:px-6justify-center flex flex-col "
            onClick={() => document.getElementById("followers").showModal()}
          >
            <ListModal
              id={"followers"}
              title={"Followers"}
              userData={userData?.followers}
            />
            <p className="font-abc font-normal text-sm text-gray-700 text-center">
              Followers
            </p>
            <button className="btn hover:bg-white  border-none text-xs font-thin bg-white">
              <span className="font-abc font-normal text-lg">
                {userData?.followers?.length}
              </span>
            </button>
          </div>
          <div
            className="ultraSm:px-0 md:px-4 lg:px-6 justify-center flex flex-col"
            onClick={() => document.getElementById("following").showModal()}
          >
            <ListModal
              id={"following"}
              title={"Following"}
              userData={userData?.following}
            />
            <p className="font-abc font-normal text-sm text-gray-700 text-center">
              Following
            </p>
            <button className="btn hover:bg-white  border-none text-xs font-thin bg-white">
              <span className="font-abc font-normal text-lg">
                {userData?.following?.length}
              </span>
            </button>
          </div>
        </div>
      </div>

      <dialog id="my_modal_4" className="modal">
        {" "}
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <AddRecipe allCategory={allCategory} />
        </div>{" "}
      </dialog>
    </>
  );
};

export default ProfileHeader;
