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
//------------------------------------------------------------------

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState({});
  const [userList, setUserList] = useState([]);
  const [chatHistory, setChatHistory] = useState([]);
  const [room, setCreateRoom] = useState("");
  const { id } = useSelector((state) => state.user);
  const socket = initializeSocket();

  const handleUserClick = async (selectId, user) => {
    setSelectedUser(selectId);
    setUserData(user);
    const response = await createChat(id, selectId);
    setCreateRoom(response?.chatData[0]._id);
    const allChatHistory = await fetchChatHistory(response?.chatData[0]._id);
    setChatHistory(allChatHistory.data);
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
                <div key={indx} onClick={() => handleUserClick(chat._id, chat)}>
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
        userData={userData}
      />
    </div>
  );
};

export default Chat;
