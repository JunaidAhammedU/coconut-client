import React, { useEffect, useState } from "react";
import { addCategory, getAllCategories } from "../../../Services/api/admin_API";
//-------------------------------

const CategoryTable = ({ categoryData }) => {
  const [image, setImage] = useState();
  const [allCategory, setAllCategory] = useState([]);

  const [category, setCategory] = useState({
    title: "",
    bio: "",
  });

  // handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(category, image);
    setAllCategory((prevCategory) => [...prevCategory, category]);
    setCategory("");
  };

  //fetching all category data
  const fetchAllCategory = async () => {
    try {
      const response = await getAllCategories();
      if (response) {
        setAllCategory(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-[30%,70%] mt-3 gap-1">
        {/* ===== FROM SECTION ======== */}
        <div className="flex lg:order-1 justify-center">
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-control w-full max-w-xs px-5 border rounded-lg py-2">
              <label className="label">
                <span className="label-text">Category name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="title"
                className="input input-bordered w-full max-w-xs"
                value={category.title}
                onChange={(e) =>
                  setCategory({ ...category, [e.target.name]: e.target.value })
                }
              />
              {/*  */}
              <label className="label">
                <span className="label-text">About the Category</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24 "
                placeholder="Bio"
                name="bio"
                value={category.bio}
                onChange={(e) =>
                  setCategory({ ...category, [e.target.name]: e.target.value })
                }
              ></textarea>
              {/*  */}
              <label className="label">
                <span className="label-text">Select Picture</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
                accept=".jpg, .jpeg, .png, .gif, .pdf"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button className="btn mt-2" type="submit">
                Upload
              </button>
            </div>
          </form>
        </div>
        {/* ======= TABLE SECTION */}
        <div className="lg:order-2 h-[380px] overflow-y-auto border rounded-lg px-2">
          <div className="overflow-y-auto ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody className="border">
                {allCategory.map((data, ind) => {
                  return (
                    <tr key={ind}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={`/Images/${data.image}`}
                                className="object-cover"
                                alt="category image"
                              />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{data?.title}</div>
                          </div>
                        </div>
                      </td>
                      <th>
                        <button className="btn btn-ghost btn-xs bg-green-400 text-white hover:bg-green-500">
                          active
                        </button>
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryTable;
