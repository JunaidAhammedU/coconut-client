import React, { useEffect, useState } from "react";
import ChatBox from "../ChatArea/ChatArea";
import { useSelector } from "react-redux";
import {
  createChat,
  fetchChatHistory,
  getFollowerData,
} from "../../../Services/api/user_API";
import { initializeSocket } from "../../../Services/Socket/Socket_io";
import "./Chat.css";
import { errorAlert } from "../../../Services/Toast/Toast";
import Coversation from "../Coversation/Coversation";
import UserList from "../UserList/UserList";
//----------------------------------------------------------------------------------------------

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [room, setCreateRoom] = useState("");
  const { id } = useSelector((state) => state.user);
  const socket = initializeSocket();

  const handleUserClick = async (user) => {
    setSelectedUser(user);
    const response = await createChat(id, user);
    setCreateRoom(response.chatData[0]._id);
    // const chatHistory = await fetchChatHistory(id, user);
    // setChatHistory(chatHistory.messages || []);
  };

  const handleBackButton = () => {
    setSelectedUser(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFollowerData(id);
        setUserList(response.data);
      } catch (error) {
        errorAlert(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex bg-slate-100">
      <div className="h-[560px] p-2 ">
        <div className="Chat-container">
          <h1 className="text-3xl font-sans font-bold">Chats</h1>
          <div className="Chat-list">
            {userList?.map((chat, indx) => {
              return (
                <div key={indx} onClick={() => handleUserClick(chat._id)}>
                  <Coversation data={chat} currentUserId={id} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* chat area */}
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


// <UserList
// users={userList}
// selectedUser={selectedUser}
// handleUserClick={handleUserClick}
// showChatList={showChatList}
// />