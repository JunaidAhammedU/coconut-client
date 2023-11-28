import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
//---------------------------------------------------

const UserRecipeList = () => {
  const { recipeData } = useOutletContext();

  const { id } = useSelector((state) => state.user);
  return (
    <>
      <section className="relative">
        <div className="flex flex-wrap gap-10 justify-center p-6 border-t-2 mt-2">
          {recipeData.map((recipe, ind) => {
            return (
              <RecipeCard
                key={ind}
                title={recipe.title}
                description={recipe.description}
                userId={recipe.userId}
                image={recipe.recipeImage[0]}
                id={recipe._id}
                recipe={recipe}
                currentUserId={id}
                loggedUser={true}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default UserRecipeList;
