import React from "react";
import { PiChatsCircleFill } from "react-icons/pi";
//--------------------------------------------------

const EmptyChat = () => {
  return (
    <div className="p-4 sm:ml-64 h-screen pt-14 ">
      <div className="p-4 rounded-lg h-full flex flex-col items-center justify-center">

        <div >
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
