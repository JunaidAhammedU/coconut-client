import React, { useEffect, useState } from "react";
import "./ExploreRecipe.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
//----------------------------------------------

const ExploreRecipe = () => {
  const [recipes, setAllRecipes] = useState([]);

  const getAllRecipes = () => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/getallrecipes`)
      .then((res) => {
        if (res.data.status) {
          setAllRecipes(res.data.allRecipes);
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllRecipes();
  }, []);
  return (
    <>
      {/* <section>
        <div className="grid grid-cols-1">
          <h1 className="font-sans text-5xl font-bold py-4 px-5">
            Popular Recipes
          </h1>
        </div>
      </section> */}
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
          {recipes.map((recipe) => {
            return <RecipeCard data={recipe} />
          })}
        </div>
      </section>
    </>
  );
};

export default ExploreRecipe;
