import React from "react";

const AddRecipe = () => {
  return (
    <div className="w-full h-full rounded-lg ultraSm:overflow-y-auto ultraSm:p-2 md:px-12">
      <form
        action=""
        className="grid xl:grid-cols-3 lg:grid-cols-3 gap-2 md:grid-cols-1  ultraSm:grid-cols-1"
      >
        <div className="p-2 ">
          {/*  */}
          <div className=" mt-2">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Recipe Title"
              required
            />
          </div>
          {/*  */}
          <div className=" mt-2">
            <textarea
              type="text"
              id="company"
              className="bg-gray-50 h-40 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
              placeholder="Flowbite"
              required
            />
          </div>
          {/*  */}
          <div className=" mt-2">
            <input type="radio" />
          </div>
          <div className=" mt-2">
            <input type="radio" />
          </div>

          <div className="flex gap-2 mt-2">
            <input className=" w-1/3 rounded-md border-gray-300" type="text" />
            <input className=" w-1/3 rounded-md border-gray-300" type="text" />
            <input className=" w-1/3 rounded-md border-gray-300" type="time" />
          </div>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-24 mt-3 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" />
            </label>
          </div>
        </div>
        {/*=======================================================================================*/}

        <div className="p-2 ">
          <div className="flex gap-2 mt-2">
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
          </div>
          <div className="flex gap-2 mt-2">
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
            <input
              className=" w-1/2 h-10 rounded-md border-gray-300"
              type="text"
            />
          </div>

          <div className=" mt-2 ">
            <input
              className=" h-10 rounded-md w-full mt-2 border-gray-300"
              type="text"
            />
            <input
              className=" h-10 rounded-md w-full mt-2 border-gray-300"
              type="text"
            />
            <input
              className=" h-10 rounded-md w-full mt-2 border-gray-300"
              type="text"
            />
            <input
              className=" h-10 rounded-md w-full mt-2 border-gray-300"
              type="text"
            />
            <input
              className=" h-10 rounded-md w-full mt-2 border-gray-300"
              type="text"
            />
          </div>
        </div>
        {/* =========================================================== */}
        <div className="p-2 ">
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="Instruction_1"
              className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 1: "
              required
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="Instruction_2"
              className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 2: "
              required
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="Instruction_3"
              className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 3: "
              required
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="Instruction_4"
              className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 4: "
              required
            />
          </div>
          <div className=" mt-2">
            <textarea
              type="text"
              id="Instruction"
              name="Instruction_5"
              className="bg-gray-50 border h-20 resize-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instruction - 5: "
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
