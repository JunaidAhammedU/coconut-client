import React from "react";
import { SlOptions } from "react-icons/sl";
import { Link, useOutletContext } from "react-router-dom";
//---------------------------------------------------------


const SavedCollection = () => {
  // fetching Data from outlook
  const { collecionData } = useOutletContext();

  return (
    <>
      <section>
        <div className="flex p-5 flex-col items-center border-t-2 mt-2">
          {collecionData.map((data, ind) => {
            return (
              <div
                key={ind}
                className="card card-side bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] border my-2"
              >
                <figure className="max-w-[200px] h-[270px]">
                  <img
                    src={`/Images/${data.recipeImage[0]}`}
                    alt="Movie"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="absolute top-3 right-3 py-1 px-2 rounded-full dropdown dropdown-bottom dropdown-end cursor-pointer bg-slate-100">
                    <SlOptions
                      tabIndex={0}
                      className="text-xl text-black shadow-xl hover:scale-110 duration-300"
                    />
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-36 mt-2"
                    >
                      <li className="text-xs text-red-600 hover:bg-red-500 rounded-lg ">
                        <a>Remove from collection</a>
                      </li>
                    </ul>
                  </div>
                  <h2 className="card-title">{data.title}</h2>
                  <p className="line-clamp-3] max-w-[500px] max-h-[100px] overflow-hidden">
                    {data.description}
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/recipedetails/${data._id}/${data.userId}`}>
                      <button className="btn bg-defaultBtnColor hover:bg-orange-500 text-white">
                        Try Recipe
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SavedCollection;
