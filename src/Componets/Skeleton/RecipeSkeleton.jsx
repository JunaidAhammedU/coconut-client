import React from "react";

const RecipeSkeleton = () => {
  return (
    <div className="card w-[334px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col relative border skeleton bg-blue-50">
      <figure className="h-52 overflow-hidden relative skeleton px-2">
        <div className="h-44 w-full skeleton"></div>
      </figure>

      <div className=" flex flex-col justify-between p-4 relative w-full h-24 skeleton mt-2 overflow-hidden">
        <div>
          <h2 className="card-title text-xl font-sans my-2 h-5 skeleton"></h2>
          <p className="text-sm font-sans overflow-hidden line-clamp-3 h-9 skeleton"></p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSkeleton;
