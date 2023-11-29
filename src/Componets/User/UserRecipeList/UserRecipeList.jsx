import React, { lazy, Suspense } from "react";
import { useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeSkeleton from "../../Skeleton/RecipeSkeleton";
const RecipeCard = lazy(() => import("../RecipeCard/RecipeCard"));
//---------------------------------------------------------------

const UserRecipeList = () => {
  // fetching Data from outlook
  const { recipeData } = useOutletContext();
  const { id } = useSelector((state) => state.user);

  return (
    <>
      <section className="relative">
        <div className="flex flex-wrap gap-10 justify-center p-6 border-t-2 mt-2">
          {recipeData.map((recipe, ind) => {
            return (
              <Suspense key={recipe._id} fallback={<RecipeSkeleton />}>
                <LazyRecipeCard
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
              </Suspense>
            );
          })}
        </div>
      </section>
    </>
  );
};

// Lazy loaded RecipeCard component
const LazyRecipeCard = (props) => {
  return (
    <Suspense fallback={<RecipeSkeleton />}>
      <RecipeCard {...props} />
    </Suspense>
  );
};

export default UserRecipeList;
