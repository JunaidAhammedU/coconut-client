import React from "react";
import CategoryTable from "../CategoryTable/CategoryTable";
//------------------------------------------------------------------

const CategoryManagement = () => {


  return (
    <>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid">
            <div className="flex rounded items-center bg-gray-100 h-16 dark:bg-gray-800">
              <h1 className="text-start font-bold  ml-5 font-sans text-gray-600 text-2xl">
                Category
              </h1>
            </div>
          </div>
          {/* ===== */}
          <CategoryTable />
        </div>
      </div>
    </>
  );
};

export default CategoryManagement;
