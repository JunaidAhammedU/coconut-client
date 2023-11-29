import React, { Suspense, lazy, useEffect, useState } from "react";
import "./RecipeCategories.css";
import { getAllRecipeCatgory } from "../../../Services/api/user_API";
import { MdOutlineSmsFailed } from "react-icons/md";
import { useParams } from "react-router-dom";
import RecipeSkeleton from "../../Skeleton/RecipeSkeleton.jsx";
import { useSelector } from "react-redux";
const RecipeCard = lazy(() => import("../RecipeCard/RecipeCard"));
//-------------------------------------------------------------------

const RecipeCategories = () => {
  const [recipes, setAllRecipes] = useState([]);
  const [CategoryData, setCategoryData] = useState({});
  const { id } = useSelector((state) => state.user);
  const { category } = useParams();

  // Function to fetch all recipes
  const getAllRecipesDetails = async () => {
    const response = await getAllRecipeCatgory(category);
    if (response.data) {
      setAllRecipes(response.data.recipes);
      setCategoryData(response);
    }
  };

  useEffect(() => {
    getAllRecipesDetails();
  }, []);

  return (
    <>
      <section>
        <div className=" px-4 py-10 ">
          <h1 className="landing_text">{CategoryData?.data?.title}</h1>
          <div className="flex justify-end px-12 mt-2">
            <h1 className="text-lg font-abc text-gray-700">
              Recipes / {recipes.length}
            </h1>
          </div>
        </div>

        <div className="mt-5 ">
          {recipes.length > 0 ? (
            <div className="flex flex-wrap gap-10 justify-center py-2 ">
              {recipes.map((recipe) => {
                return (
                  <Suspense key={recipe._id} fallback={<RecipeSkeleton />}>
                    <LazyRecipeCard
                      title={recipe?.title}
                      description={recipe?.description}
                      userId={recipe?.userId}
                      image={recipe?.recipeImage[0]}
                      id={recipe?._id}
                      recipe={recipe}
                      currentUserId={id}
                      Cuisine={true}
                    />
                  </Suspense>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-wrap gap-10 justify-center py-2 flex-col items-center">
              <div>
                <img src="/NotFound.jpg" alt="" className="w-[300px]" />
              </div>
              <p className="font-sans text-gray-700 ">No Data Founded</p>
            </div>
          )}
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

export default RecipeCategories;
