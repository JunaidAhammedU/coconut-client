import React from "react";
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import "./RecipeCard.css";
//----------------------------------------------------------------

const RecipeCard = ({
  title,
  description,
  userId,
  image,
  id,
  currentUserId,
  recipe,
  loggedUser,
}) => {
  return (
    <div className="card w-[334px] bg-base-100 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col relative border">
      <figure className="h-52 overflow-hidden relative">
        <div className="absolute top-3 right-3  bg-black/10 hover:bg-black/50 duration-300 py-1 px-2 rounded-full dropdown dropdown-bottom dropdown-end cursor-pointer">
          <SlOptions tabIndex={0} className="text-xl text-white shadow-xl" />
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-36 mt-2"
          >
            <Link to={`/recipedetails/${id}/${userId}`}>
              <li>
                <a>view</a>
              </li>
            </Link>
            {currentUserId === recipe.userId ? (
              <li>
                <a>edit</a>
              </li>
            ) : (
              <li>
                <a>report</a>
              </li>
            )}
          </ul>
        </div>
        <img
          src={`/Images/${image}`}
          alt="recipe"
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body flex flex-col justify-between p-4 relative">
        {loggedUser ? null : (
          <div className="absolute top-6 right-3">
            <h1 className="text-black font-sans text-xs">{`${
              currentUserId === recipe?.recipeDetails[0]._id
                ? `you`
                : recipe.recipeDetails[0]?.UserName
            }`}</h1>
          </div>
        )}
        <div>
          <h2 className="card-title text-xl font-sans my-2">
            {title?.toUpperCase()}
          </h2>
          <p className="text-sm font-sans overflow-hidden line-clamp-3">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RecipeCard);
