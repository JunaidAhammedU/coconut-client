import React from "react";

const Coversation = ({ data, currentUserId }) => {
  return (
    <>
      <div className="listDiv shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:border-none my-2">
        <div className="avatar placeholder ">
          <div className="bg-neutral text-neutral-content rounded-full w-8 h-8 mx-auto my-auto ">
            <span>{data.UserName[0]}</span>
          </div>
        </div>

        <div className="ml-1 my-auto">
          <div className="">
            <h1 className="text-sm font-sans font-semibold text-center">{data.UserName}</h1>
          </div>

          <div>
            <p className="text-xs lg:text-start xl:text-start ultraSm:text-center">online</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coversation;
