import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Coversation = ({ data, currentUserId }) => {
  return (
    <>
      <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer">
        {data.profile_image ? (
          <div className="avatar">
            <div className="w-16 rounded">
              <img
                src={`${data?.profile_image}`}
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
        ) : (
          <FaUserCircle
            className="h-10 w-10 text-gray-300"
            aria-hidden="true"
          />
        )}
        <span className="flex-1 ml-3 whitespace-nowrap">{data?.UserName}</span>
        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          1
        </span>
      </li>
    </>
  );
};

export default Coversation;
