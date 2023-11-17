import React, { useEffect, useState } from "react";
import {
  BsBookmarkPlus,
  BsBoxArrowUp,
  BsArrowUpRight,
  BsChatLeftDotsFill,
  BsCalendar2MinusFill,
} from "react-icons/bs";
import { PiStarFourDuotone } from "react-icons/pi";
import { PiCookingPotDuotone } from "react-icons/pi";
import "./RecipeDetails.css";
import { useParams } from "react-router-dom";
import { getRecipeData } from "../../../Services/api/user_API";
//-------------------------------------------------------------------------------

const RecipeDetails = () => {
  let { id, userId } = useParams();
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [nutritions, setNutritions] = useState({});

  const fetchData = async () => {
    const { recipeData, userData } = await getRecipeData(id, userId);
    console.log(recipeData);
    if (recipeData && userData) {
      setInstructions(recipeData.Instructions);
      setIngredients(recipeData.Ingredients);
      setNutritions(recipeData.Nutritions);
      setRecipeData(recipeData);
      setUserDetails(userData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section>
        <div className="flex justify-between px-10 mt-5">
          <div className="flex mr-2">
            <BsArrowUpRight className="my-auto text-lg" />
            <p className="text-xs font-sans ml-1 my-auto">
              85% would make this again
            </p>
          </div>
          <div className="flex">
            <BsBoxArrowUp className="mr-8 text-2xl text-black/80 hover:text-black" />
            <BsBookmarkPlus className="text-2xl text-black/80 hover:text-black" />
          </div>
        </div>
      </section>
      {/* ============== */}

      <section className="px-2">
        <div className="grid grid-cols-1 mt-5">
          <h1 className="text-4xl sm:text-5xl font-semibold font-serif text-start ml-5">
            {recipeData.title}
          </h1>
        </div>

        <div className="flex flex-wrap mt-5 p-2">
          <div className="rounded-full w-12 h-12 sm:w-16 sm:h-16">
            <img
              className="rounded-full w-full h-full object-cover"
              src="https://picsum.photos/200/300"
              alt=""
            />
          </div>
          <div className="ml-2 mr-5 my-auto">
            <h1 className="text-sm font-sans font-semibold">
              {userDetails.UserName}
            </h1>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap justify-between gap-4 sm:gap-10 foldSize:mt-1 foldSize:justify-start">
            <div className="my-auto">
              <button className="border font-sans text-sm rounded-lg px-2 font-bold border-black/60">
                Follow
              </button>
            </div>

            <div className="flex gap-1 my-auto">
              <BsChatLeftDotsFill className="text-black/90 text-lg" />
              <p className="text-xs font-sans">123</p>
            </div>

            <div className="flex gap-1 my-auto">
              <BsCalendar2MinusFill
                className="text-black/90"
                style={{ fontSize: "16px" }}
              />
              <p className="text-xs py-0.5 font-sans sm:whitespace-nowrap">
                {`${new Date(recipeData.createdAt).getUTCDate()} days ago`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============== */}

      <section className="px-10 mt-4">
        <div className=" ultraSm:px-6 md:px-16 border-t-2">
          <div className="mt-4 md:w-2/3 lg:w-2/3 ">
            <p className="text-lg font-sans text-start">
              {recipeData.description}
            </p>
          </div>
          <div className="flex justify-center py-2 mt-5 overflow-hidden">
            <img
              src={`/Images/${recipeData.recipeImage}`}
              alt=""
              className="object-cover rounded-xl"
            />
          </div>
        </div>

        <div className="flex mt-5 gap-3">
          <div className="px-6 border-r-2">
            <h1 className="text-start font-sans text-black/50 text-sm">PREP</h1>
            <p className="text-start">{`${recipeData.cookingTime} Min `}</p>
          </div>
          <div className="px-6 border-r-2">
            <h1 className="text-start font-sans text-black/50 text-sm">
              SERVING
            </h1>
            <p className="text-start">4</p>
          </div>
        </div>
      </section>

      {/* ============== */}

      <section>
        <div className="nutrition_instruction_div">
          <div className="border border-dashed border-black/25 rounded-lg px-2 overflow-hidden">
            <h1 className="text-3xl font-semibold font-serif text-start ml-2 my-6">
              Ingredients.
            </h1>

            {ingredients.map((value, ind) => {
              return (
                <div className="flex p-4 relative">
                  <PiStarFourDuotone className="absolute top-5 left-1" />
                  <p className="ml-3 text-lg font-sans">{value}</p>
                </div>
              );
            })}

            {/* nutrition area */}
            <div className="py-4 2xl:px-36 xl:px-28 lg:28 md:px-24">
              <div className=" border rounded-xl bg-gray-50 overflow-hidden overflow-x-auto">
                <h1 className="text-2xl ultraSm:text-lg font-semibold font-sans text-center p-3">
                  Nutritions Fact.
                </h1>

                <table className="text-left text-sm font-light w-full">
                  <thead className="border-b">
                    <tr className="text-center">
                      <th className="px-6 py-4" scope="col">
                        Nutrient
                      </th>
                      <th className="px-6 py-4" scope="col">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Calcium</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.calcium}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Calories</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.calories}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Protein</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.protein}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">
                        Carbohydrates
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.carbohydrates}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Fat</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.fat}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* --- */}

          <div className="px-2">
            <h1 className="text-3xl font-semibold font-serif text-start ml-2 my-6">
              Instructions.
            </h1>

            {instructions.map((value, ind) => {
              return (
                <div className="flex p-4 relative">
                  <PiCookingPotDuotone className="text-xl absolute top-5 left-1" />
                  <p className="ml-5 text-lg font-sans">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ========= */}

      <section className="px-10">
        <div className="mt-10 border-t-8 border-defaultBtnColor">
          <h1 className="text-3xl py-5 text-start px-4 font-serif font-semibold">
            Comments* <span className="text-lg font-semibold">(2)</span>
          </h1>
          {/* === */}

          <div className="border rounded p-3 mt-3">
            <div className="flex p-2">
              <div className="rounded-full w-9 h-9 sm:w-9 sm:h-w-9">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://picsum.photos/200/300"
                  alt=""
                />
              </div>
              <div className="ml-2 mr-5 my-auto">
                <h1 className="text-sm font-sans font-semibold">Junaid</h1>
              </div>
            </div>

            <div className="mt-2 p-2">
              <p className="font-sans text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam ipsum consequatur non animi praesentium dolorum, quidem,{" "}
              </p>
            </div>

            <div className="px-3">
              <p className=" text-end font-sans text-xs text-black/40">
                45min ago
              </p>
            </div>
          </div>

          <div className="border rounded p-3 mt-3">
            <div className="flex p-2">
              <div className="rounded-full w-9 h-9 sm:w-9 sm:h-w-9">
                <img
                  className="rounded-full w-full h-full object-cover"
                  src="https://picsum.photos/200/300"
                  alt=""
                />
              </div>
              <div className="ml-2 mr-5 my-auto">
                <h1 className="text-sm font-sans font-semibold">Junaid</h1>
              </div>
            </div>

            <div className="mt-2 p-2">
              <p className="font-sans text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aperiam ipsum consequatur non animi praesentium dolorum, quidem,{" "}
              </p>
            </div>

            <div className="px-3">
              <p className=" text-end font-sans text-xs text-black/40">
                45min ago
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecipeDetails;