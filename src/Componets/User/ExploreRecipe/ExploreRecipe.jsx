import React, { useEffect, useState } from "react";
import "./ExploreRecipe.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import { getAllRecipes } from "../../../Services/api/user_API";
//--------------------------------------------------------------

const ExploreRecipe = () => {
  const [recipes, setAllRecipes] = useState([]);
  const { id } = useSelector((state) => state.user);

  // use to fetch data of all recipes.
  useEffect(() => {
    const getAllRecipesDetails = async () => {
      const response = await getAllRecipes();
      if (response.data) {
        setAllRecipes(response.data);
      }
    };
    getAllRecipesDetails();
  }, []);

  return (
    <>
      <section>
        <div className="flex  flex-wrap justify-center gap-10">
          <div className="cat_Div">
            <div className="relative overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">Bread</h1>
          </div>

          <div className="cat_Div">
            <div className="relative overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/15564188/pexels-photo-15564188/free-photo-of-pancakes-with-berries-and-marple-syrup.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">
              Pan cakes
            </h1>
          </div>

          <div className="cat_Div">
            <div className="relative overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">Kababs</h1>
          </div>

          <div className="cat_Div">
            <div className="relative overflow-hidden rounded-full">
              <img
                src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">Salads</h1>
          </div>
        </div>
      </section>
      {/* ========= */}
      <section>
        <div className="flex flex-wrap gap-10 justify-center mt-10 mx-4 border rounded-t-md bg-slate-100 p-5">
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe._id} data={recipe} id={id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default React.memo(ExploreRecipe);
