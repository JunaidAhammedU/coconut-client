import React, { useEffect, useState } from "react";
import "./ExploreRecipe.css";
import RecipeCard from "../RecipeCard/RecipeCard";
import { useSelector } from "react-redux";
import {
  getAllRecipes,
  getSearchAllRecipeData,
} from "../../../Services/api/user_API";
//--------------------------------------------------------------

const ExploreRecipe = () => {
  const [recipes, setAllRecipes] = useState([]);
  const { id } = useSelector((state) => state.user);
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterType, setFilterType] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const handleSearch = async (value) => {
    setSearch(value);
  };

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

  // search all recipe with filter and sort
  useEffect(() => {
    const getAllRecipeData = async () => {
      const response = await getSearchAllRecipeData(
        sort,
        filterType,
        page,
        search
      );
      console.log(response);
    };

    getAllRecipeData();
  }, [sort, filterType, page, search]);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center gap-10 overflow-y-auto h-[235px]">
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
                src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="category_img"
              />
            </div>
            <h1 className="text-center font-semibold font-sans pt-2">
              Noodles
            </h1>
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
      <section className="relative">
        <div className="flex justify-center">
          <div className="flex py-6 gap-4 w-4/5 ultraSm:flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row items-center border-t-2 ">
            <div>
              <ul className="menu menu-horizontal bg-white rounded-box border border-black/20">
                <li>
                  <a>Veg</a>
                </li>
                <li>
                  <a>Non veg</a>
                </li>
              </ul>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search any recipe"
                className="input w-full input-bordered max-w-xs focus:outline-none hover:border-black/40 h-[53px] rounded-box"
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-10 justify-center py-2">
          {recipes
            .filter((item) => {
              return (
                !search ||
                (item &&
                  item.title &&
                  item.title.toLowerCase().includes(search.toLowerCase()))
              );
            })
            .map((recipe) => {
              return (
                <RecipeCard
                  title={recipe.title}
                  description={recipe.description}
                  userId={recipe.userId}
                  image={recipe.recipeImage[0]}
                  id={recipe._id}
                  recipe={recipe}
                  currentUserId={id}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default React.memo(ExploreRecipe);
