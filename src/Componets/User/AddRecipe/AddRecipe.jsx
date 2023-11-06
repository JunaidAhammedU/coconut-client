import React, { useState } from "react";
import "./AddRecipe.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { handleAddRecipe } from "../../../utils/User/handleAddRecipe";
//---------------------------------------------------------------

const AddRecipe = () => {
  const [image, setImage] = useState(null);
  const {id}  = useSelector((state)=> state.user)
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    veg: "",
    nonveg: "",
    time: "",
    cuisine: "",
    ingredient: "",
    calories: "",
    protein: "",
    carbohydrates: "",
    fat: "",
    calcium: "",
    instruction: "",
  });

  const [ingredient, setIngredient] = useState({
    ingredient1: "",
    ingredient2: "",
    ingredient3: "",
    ingredient4: "",
    ingredient5: "",
    ingredient6: "",
    ingredient7: "",
    ingredient8: "",
  });
  const [instruction, setInstruction] = useState({
    instruction1: "",
    instruction2: "",
    instruction3: "",
    instruction4: "",
    instruction5: "",
  });
  //--------------------------------------------------

  return (
    <div className="w-full h-full rounded-lg ultraSm:overflow-y-auto ultraSm:p-2 md:px-12">
      <div>
        <h1 className="text-start font-bold  ml-3 font-sans text-gray-600 text-2xl">
          Add Recipe*
        </h1>
      </div>

      <form
        action=""
        className="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-1  ultraSm:grid-cols-1"
        onSubmit={(e) => {
          e.preventDefault(), handleAddRecipe(recipe,ingredient,instruction,image,id);
        }}
        encType="multipart/form-data"
      >
        <div className="p-2 ">
          {/* =========================================================== */}

          <div className=" mt-2">
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Recipe Title"
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
          </div>
          {/*  */}
          <div className=" mt-2">
            <textarea
              type="text"
              id="description"
              name="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  resize-none"
              placeholder="Short Description about recipe"
              style={{ height: "135px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
          </div>
          {/*  */}
          <div className="flex items-center mt-2">
            <input
              id="veg"
              type="radio"
              value="veg"
              name="recipeType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onChange={(e) => setRecipe({ ...recipe, veg: e.target.value })}
            />
            <label
              for="veg"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Veg
            </label>
          </div>
          <div class="flex items-center mt-2">
            <input
              id="nonveg"
              type="radio"
              value="nonveg"
              name="recipeType"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onChange={(e) => setRecipe({ ...recipe, nonveg: e.target.value })}
            />
            <label
              for="nonveg"
              class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Non-Veg
            </label>
          </div>

          {/*  */}
          <div className="flex">
            <p className="headings">*Cooking time</p>
            <p className="headings">*Category</p>
          </div>
          <div className="flex gap-2 ">
            {/* <input className=" w-1/3 rounded-lg border-gray-300" type="text" /> */}
            <input
              className=" w-1/2 rounded-lg border-gray-300"
              type="number"
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
              name="time"
            />
            <select
              id="countries"
              className=" w-1/2 rounded-lg border-gray-300 p-2"
              name="cuisine"
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            >
              <option className="font-sans text-xs" value="Indian">
                Indian
              </option>
              <option className="font-sans text-xs" value="Arabic">
                Arabic
              </option>
              <option className="font-sans text-xs" value="Chinese">
                Chinese
              </option>
              <option className="font-sans text-xs" value="Italian">
                Italian
              </option>
            </select>
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-32 mt-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pt-10 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold">Upload Picture</span> or drag and
                  drop
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                accept=".jpg, .jpeg, .png, .gif, .pdf"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        {/*=======================================================================================*/}

        <div className="p-2 ">
          <div className="flex gap-2 mt-2">
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient1"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient2"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient3"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient4"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient5"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient6"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient7"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <input
              className="Ingredients"
              type="text"
              placeholder="Ingredients*"
              name="ingredient8"
              onChange={(e) =>
                setIngredient({
                  ...ingredient,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>

          {/* =========================================================== */}

          <div className=" mt-2 ">
            <div className="flex">
              <p className="headings">*Nutritions</p>
            </div>
            <input
              className="Nutritions"
              type="text"
              placeholder="Calories:"
              name="calories"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className="Nutritions"
              type="text"
              placeholder="Protein:"
              name="protein"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className="Nutritions"
              type="text"
              placeholder="Carbohydrates:"
              name="carbohydrates"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className="Nutritions"
              type="text"
              placeholder="Fat:"
              name="fat"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className="Nutritions"
              type="text"
              placeholder="Calcium:"
              name="calcium"
              style={{ height: "38px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
          </div>
        </div>

        {/* =========================================================== */}

        <div className="p-2 ">
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="instruction1"
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 1:"
              style={{ height: "82px" }}
              onChange={(e) =>
                setInstruction({
                  ...instruction,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="instruction2"
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 2:"
              style={{ height: "82px" }}
              onChange={(e) =>
                setInstruction({
                  ...instruction,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              h-20
              name="instruction3"
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 3:"
              style={{ height: "82px" }}
              onChange={(e) =>
                setInstruction({
                  ...instruction,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="instruction4"
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 4:"
              style={{ height: "82px" }}
              onChange={(e) =>
                setInstruction({
                  ...instruction,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="instruction5"
              className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 5:"
              style={{ height: "82px" }}
              onChange={(e) =>
                setInstruction({
                  ...instruction,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </div>
          <div className="flex mt-2 md:justify-end lg:justify-end xl:justify-end ultraSm:justify-center">
            <button
              type="submit"
              className="bg-defaultBtnColor w-40 hover:bg-onHoverButton text-white font-bold py-3 px-4 rounded transition duration-300"
            >
              Add Recipe
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddRecipe;
