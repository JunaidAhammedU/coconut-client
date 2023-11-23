import React from "react";

const UserList = ({ users, selectedUser, handleUserClick, showChatList }) => {
  return (
    <div
      className={`w-1/4 p-4 border-r-2 ${
        showChatList ? "hidden md:block" : ""
      }`}
    >
      <h1 className="text-xl font-semibold py-2">Users</h1>
      {users ? (
        <ul className="menu menu-lg bg-purple-400 w-full h-[410px] rounded-box">
          {users.map((user) => (
            <li
              key={user._id}
              className={`p-4 cursor-pointer hover:bg-gray-300 mt-1 rounded-lg ${
                selectedUser?.id === user.id ? "bg-gray-300" : ""
              }`} 
              onClick={() => handleUserClick(user._id)}
            >
              {user.UserName}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="menu menu-lg bg-purple-400 w-full h-[410px] rounded-box">
          <li className="p-4 cursor-pointer hover:bg-gray-300 mt-1 rounded-lg">
            No followed yet
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserList;
