import React, { useEffect, useState, lazy, Suspense } from "react";
import "./ExploreRecipe.css";
import { useSelector } from "react-redux";
import {
  getAllRecipes,
  getSearchAllRecipeData,
} from "../../../Services/api/user_API";
import { getAllCategories } from "../../../Services/api/admin_API";
import RecipeSkeleton from "../../Skeleton/RecipeSkeleton";
import { Link } from "react-router-dom";
const RecipeCard = lazy(() => import("../RecipeCard/RecipeCard"));
//------------------------------------------------------------------------

const ExploreRecipe = () => {
  const [recipes, setAllRecipes] = useState([]);
  const { id } = useSelector((state) => state.user);
  const [sort, setSort] = useState({ sort: "rating", order: "desc" });
  const [filterType, setFilterType] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [allCategory, setAllCategory] = useState([]);

  // Function to handle search
  const handleSearch = async (value) => {
    setSearch(value);
  };

  // Function to fetch all recipes
  const getAllRecipesDetails = async () => {
    const response = await getAllRecipes();
    if (response.data) {
      setAllRecipes(response.data);
    }
  };

  // Function to search all recipes with filter and sort
  const getAllRecipeData = async () => {
    const response = await getSearchAllRecipeData(
      sort,
      filterType,
      page,
      search
    );
  };

  // Function to fetch all categories
  const fetchAllCategory = async () => {
    try {
      const response = await getAllCategories();
      if (response) {
        setAllCategory(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch data
  useEffect(() => {
    getAllRecipesDetails();
    getAllRecipeData();
    fetchAllCategory();
  }, [sort, filterType, page, search]);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-center gap-10 overflow-y-auto h-[235px]">
          {allCategory.map((data, ind) => {
            return (
              <Link to={`/category_recipe/${data._id}`} key={ind}>
                <div className="cat_Div">
                  <div className="relative overflow-hidden rounded-full">
                    <img
                      src={`/Images/${data.image}`}
                      alt=""
                      className="category_img"
                    />
                  </div>
                  <h1 className="text-center font-semibold font-sans pt-2">
                    {data.title}
                  </h1>
                </div>
              </Link>
            );
          })}
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

        {/* Display recipes */}
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
                <Suspense key={recipe._id} fallback={<RecipeSkeleton />}>
                  <LazyRecipeCard
                    title={recipe.title}
                    description={recipe.description}
                    userId={recipe.userId}
                    image={recipe.recipeImage[0]}
                    id={recipe._id}
                    recipe={recipe}
                    currentUserId={id}
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

export default React.memo(ExploreRecipe);
