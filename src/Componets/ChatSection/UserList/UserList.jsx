import React from "react";

const UserList = ({ users, selectedUser, handleUserClick, showChatList }) => {
  return (
    <div>
      <h1 className="">Users</h1>
      {users ? (
        <ul className="">
          {users.map((user) => (
            <li key={user._id} onClick={() => handleUserClick(user._id)}>
              {user.UserName}
            </li>
          ))}
        </ul>
      ) : (
        <ul className="">
          <li className="p-4 cursor-pointer hover:bg-gray-300 mt-1 rounded-lg">
            No followed yet
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserList;
