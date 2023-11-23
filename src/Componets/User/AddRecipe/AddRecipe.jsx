import React, { useState } from "react";
import "./AddRecipe.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { handleAddRecipe } from "../../../Services/api/user_API";
import { IoCloseCircleOutline, IoAddSharp } from "react-icons/io5";
//---------------------------------------------------------------

const AddRecipe = () => {
  const [image, setImage] = useState();
  const [imagePreview, setImagePreview] = useState(null);

  const { id } = useSelector((state) => state.user);
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

  const [ingredient, setIngredient] = useState([[]]);
  const [instruction, setInstruction] = useState([[], [], [], []]);

  const addIngredientField = () => {
    setIngredient([...ingredient, []]);
  };

  const addInstructionField = () => {
    setInstruction([...instruction, []]);
  };
  //--------------------------------------------------

  return (
    <div className="w-full h-[600px] rounded-lg ultraSm:overflow-y-auto ultraSm:p-2 md:px-12">
      <div>
        <h1 className="text-start font-bold  ml-3 font-sans text-gray-600 text-2xl">
          Add Recipe*
        </h1>
      </div>

      <form
        action=""
        className="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-1  ultraSm:grid-cols-1"
        onSubmit={(e) => {
          e.preventDefault(),
            handleAddRecipe(recipe, ingredient, instruction, image, id);
        }}
        encType="multipart/form-data"
      >
        <div className="p-2">
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
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
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
              <option className="font-sans text-xs">Choose</option>
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

          <div class="flex items-center justify-center w-full relative">
            {imagePreview && (
              <div className="absolute">
                <IoCloseCircleOutline
                  onClick={() => setImagePreview()}
                  className="text-xl font-sans text-black/40 hover:text-black/70 absolute top-3 right-1 cursor-pointer"
                />
                <img
                  src={imagePreview}
                  alt="Recipe image"
                  className="h-28 w-36 object-cover py-2 border border-black/50 rounded-sm"
                />
              </div>
            )}

            <label
              for="dropzone-file"
              class={
                imagePreview
                  ? `flex flex-col items-center justify-center w-full h-32 mt-2 border-2 border-gray-300 border-dashed rounded-lg bg-gray-200`
                  : `flex flex-col items-center justify-center w-full h-32 mt-2 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100`
              }
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
                {imagePreview ? null : (
                  <p class="mb-2 text-sm text-gray-500">
                    <span class="font-semibold">Upload Picture</span> or drag
                    and drop
                  </p>
                )}
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                accept=".jpg, .jpeg, .png, .gif, .pdf"
                name="image"
                onChange={(e) => {
                  const selectedImg = e.target.files[0];
                  setImage(selectedImg);
                  selectedImg
                    ? setImagePreview(URL.createObjectURL(e.target.files[0]))
                    : null;
                }}
              />
            </label>
          </div>
        </div>
        {/*=======================================================================================*/}

        <div className="p-2">
          <div className="flex">
            <p className="headings">*Ingredient's</p>
          </div>
          <div className="h-44 overflow-hidden overflow-y-auto">
            {ingredient.map((value, index) => {
              return (
                <div className="mt-2 relative">
                  <IoCloseCircleOutline
                    className="text-xl font-sans text-black/40 hover:text-black/70 absolute top-2.5 right-2 cursor-pointer"
                    onClick={(e) => {
                      const updatedIngredient = [...ingredient];
                      updatedIngredient.splice(index, 1);
                      setIngredient(updatedIngredient);
                    }}
                  />
                  <input
                    className="w-full h-10  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block;"
                    type="text"
                    id=""
                    placeholder="eg: 1 teaspoon milk powder"
                    name={`Ingredients ${index + 1}`}
                    value={ingredient[index]}
                    onChange={(e) => {
                      const existingIngredient = [...ingredient];
                      existingIngredient[index] = e.target.value;
                      setIngredient(existingIngredient);
                    }}
                  />
                </div>
              );
            })}

            <div className="flex justify-end p-2">
              <div className="flex gap-2 my-auto bg-white shadow-md p-2 rounded-lg border">
                <IoAddSharp
                  className="bg-gray-100 text-2xl rounded-full hover:bg-gray-300 transition duration-200"
                  onClick={addIngredientField}
                />
                <p className="font-sans text-sm">Add Field</p>
              </div>
            </div>
          </div>

          {/* =========================================================== */}

          <div>
            <div className="flex">
              <p className="headings">*Nutritions</p>
            </div>
            <input
              className=" w-full rounded-lg mt-2 border-gray-300 text-gray-900 text-sm"
              type="text"
              placeholder="Calories:"
              name="calories"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className=" w-full rounded-lg mt-2 border-gray-300 text-gray-900 text-sm"
              type="text"
              placeholder="Protein:"
              name="protein"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className=" w-full rounded-lg mt-2 border-gray-300 text-gray-900 text-sm"
              type="text"
              placeholder="Carbohydrates:"
              name="carbohydrates"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className=" w-full rounded-lg mt-2 border-gray-300 text-gray-900 text-sm"
              type="text"
              placeholder="Fat:"
              name="fat"
              style={{ height: "37px" }}
              onChange={(e) =>
                setRecipe({ ...recipe, [e.target.name]: e.target.value })
              }
            />
            <input
              className=" w-full rounded-lg mt-2 border-gray-300 text-gray-900 text-sm"
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

        <div className="p-2" style={{ height: "467px" }}>
          <div className="flex">
            <p className="headings">*Instruction's</p>
          </div>
          <div
            className="overflow-hidden overflow-y-auto"
            style={{ height: "425px" }}
          >
            {instruction.map((item, index) => (
              <div className=" mt-2 relative" key={index}>
                <IoCloseCircleOutline
                  className="text-xl font-sans text-black/40 hover:text-black/70 absolute top-2 right-2 cursor-pointer"
                  onClick={(e) => {
                    const updatedInstruction = [...instruction];
                    updatedInstruction.splice(index, 1);
                    setInstruction(updatedInstruction);
                  }}
                />
                <textarea
                  type="text"
                  id={`instruction${index + 1}`}
                  name={`instruction${index + 1}`}
                  className="bg-gray-50 border resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={`Instruction - ${index + 1}:`}
                  style={{ height: "77px" }}
                  value={instruction[index]}
                  onChange={(e) => {
                    const updatedInstructions = [...instruction];
                    updatedInstructions[index] = e.target.value;
                    setInstruction(updatedInstructions);
                  }}
                />
              </div>
            ))}

            <div className="flex justify-end p-2">
              <div className="flex gap-2 my-auto bg-white shadow-md p-2 rounded-lg border">
                <IoAddSharp
                  className="bg-gray-100 text-2xl rounded-full hover:bg-gray-300 transition duration-200"
                  onClick={addInstructionField}
                />
                <p className="font-sans text-sm">Add Field</p>
              </div>
            </div>
          </div>

          {/* ===================== */}
          <div className="flex mt-5 md:justify-end lg:justify-end xl:justify-end ultraSm:justify-center">
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

export default React.memo(AddRecipe);
