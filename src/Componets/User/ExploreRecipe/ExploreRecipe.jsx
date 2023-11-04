import React from "react";
import "./ExploreRecipe.css";
import RecipeCard from '../RecipeCard/RecipeCard'
//----------------------------------------------

const ExploreRecipe = () => {
  return (
    <>
      <section>
        <div className="grid grid-cols-1">
          <h1 className="font-sans text-5xl font-bold py-4 px-5">
            Popular Recipes
          </h1>
        </div>
      </section>
      {/* ===== */}
      <section>
        <div className="flex  flex-wrap justify-center gap-10">
          <div className="cat_Div">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">hello</h1>
          </div>

          <div className="cat_Div">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">hello</h1>
          </div>

          <div className="cat_Div">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">hello</h1>
          </div>

          <div className="cat_Div">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">hello</h1>
          </div>
        </div>
      </section>
      {/* ========= */}
      <section>
        <div className="flex flex-wrap gap-10 justify-center mt-10 mx-4 border rounded-t-md bg-slate-100 p-5">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
      </section>
    </>
  );
};

export default ExploreRecipe;
