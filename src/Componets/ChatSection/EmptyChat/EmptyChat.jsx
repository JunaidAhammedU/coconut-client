import React from "react";
import { PiChatsCircleFill } from "react-icons/pi";
//--------------------------------------------------

const EmptyChat = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-[545px] overflow-hidden overflow-y-auto p-4 bg-white mt-2 rounded-md shadow-md">
        <div className="">
          <div className="flex justify-center">
            <PiChatsCircleFill className="text-8xl text-defaultBtnColor" />
          </div>
          <p className="text-center font-sans text-2xl font-bold mt-2">
            Select Any Chat
          </p>
          <p className="text-center font-sans text-sm mt-2">
            Connect with anyone if you want to know more about the recipe;
            <br />
            send and receive messages securely.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmptyChat;
