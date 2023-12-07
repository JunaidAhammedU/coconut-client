import React, { useState } from "react";
import "./ProfileEdit.css";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../Redux/User/UserSlice";
import { handleProfileEdit } from "../../../Services/api/user_API";
//-----------------------------------------------------------------

const ProfileEdit = ({ modalId }) => {
  const dispatch = useDispatch();
  const { id, name, email, profile_image } = useSelector((state) => state.user);

  const [profileImage, setProfileImage] = useState(null);
  const [prevImage, setPrevImage] = useState("");
  const [newUserData, setNewUserData] = useState({
    UserName: name || "",
    email: email || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = await handleProfileEdit(
        newUserData,
        profileImage,
        id
      );
      if (updatedData) {
        dispatch(
          updateUser({
            id: updatedData?.data._id,
            name: updatedData?.data.UserName,
            email: updatedData?.data.email,
            profile_image: updatedData?.data.profile_image,
          })
        );

        setTimeout(() => {
          window.location.reload();
        }, 4000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <dialog id={modalId} className="modal">
        <div className="modal-box ultraSm:w-11/12 md:w-11/12 lg:w-1/2 xl:w-1/2 2xl:w-1/2 max-w-5xl">
          <h3 className="font-bold text-lg text-center ">Edit profile</h3>
          <div className="modal-action flex justify-center">
            <form
              method="dialog"
              className="w-[80%]"
              encType="multipart/form-data"
            >
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>

              <div className="space-y-8 md:space-y-12">
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2">
                  <div className="col-span-full flex flex-col justify-center items-center">
                    <div className="items-center gap-x-3">
                      <div className="avatar">
                        <div className="w-24 rounded-full">
                          {prevImage ? (
                            <img src={`${prevImage}`} alt="profile pic" />
                          ) : (
                            <img
                              src={`/Images/${profile_image}`}
                              alt="profile pic"
                            />
                          )}
                        </div>
                      </div>

                      <label htmlFor="file-upload" className="cursor-pointer">
                        <h1 className="text-center hover:text-black text-gray-700">
                          Upload
                        </h1>
                      </label>
                      <input
                        id="file-upload"
                        name="profileImage"
                        type="file"
                        className="sr-only"
                        onChange={(e) => {
                          const imageData = e.target.files[0];
                          setPrevImage(URL.createObjectURL(imageData));
                          setProfileImage(imageData);
                        }}
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="UserName"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Username
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="UserName"
                        id="UserName"
                        value={newUserData?.UserName}
                        autoComplete="organization"
                        onChange={(e) =>
                          setNewUserData({
                            ...newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="organization"
                        value={newUserData?.email}
                        onChange={(e) =>
                          setNewUserData({
                            ...newUserData,
                            [e.target.name]: e.target.value,
                          })
                        }
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col md:flex-row items-center justify-end gap-x-6">
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ProfileEdit;
