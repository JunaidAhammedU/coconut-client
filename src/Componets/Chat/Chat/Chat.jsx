
import React, { useEffect, useState } from "react";
import UserList from "../UserList/UserList";
import ChatBox from "../ChatArea/ChatArea";
import { useSelector } from "react-redux";
import { createChat, fetchChatHistory, getFollowerData } from "../../../Services/api/user_API";
import { initializeSocket } from "../../../Services/Socket/Socket_io";

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [room, setCreateRoom] = useState("");
  const { id } = useSelector((state) => state.user);
  const [showChatList, setShowChatList] = useState(false);
  const socket = initializeSocket();

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    const response = await createChat(id, user);
    setCreateRoom(response.chatData[0]._id);
    setShowChatList(false);
  
    const chatHistory = await fetchChatHistory(id, user);
    setChatHistory(chatHistory.messages || []);
  };

  const handleBackButton = () => {
    setSelectedUser(null);
    setShowChatList(true);
  };

  const fetchData = async () => {
    const response = await getFollowerData(id);
    setUserList(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex">
      <UserList
        users={userList}
        selectedUser={selectedUser}
        handleUserClick={handleUserClick}
        showChatList={showChatList}
      />
      <ChatBox
        selectedUser={selectedUser}
        handleBackButton={handleBackButton}
        room={room}
        socket={socket}
        chatHistory={chatHistory}
      />
    </div>
  );
};

export default Chat;
