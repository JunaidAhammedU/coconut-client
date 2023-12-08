import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getFollowerData,
  getAccessChat,
  sendMessage,
} from "../../../Services/api/user_API";
import { initializeSocket } from "../../../Services/Socket/Socket_io";
import "./Chat.css";
import { errorAlert } from "../../../Services/Toast/Toast";
import Coversation from "../Coversation/Coversation";
import { Link } from "react-router-dom";
import { BsLayoutSidebar } from "react-icons/bs";
import InputEmoji from "react-input-emoji";
import EmptyChat from "../EmptyChat/EmptyChat";
import { format } from "timeago.js";
// import { chatReducer } from "../../../Redux/User/UserSlice";
//------------------------------------------------------------------

const Chat = () => {
  const { id } = useSelector((state) => state.user);
  const notifications = useSelector((state) => state.user.notifications);
  const dispatch = useDispatch();

  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [socketConnected, setSocketConnected] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [room, setCreateRoom] = useState("");
  const socket = initializeSocket();
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);
  var selectedChatCompare;

  // handle user click
  const handleUserClick = async (selectUserData) => {
    setSelectedUser(selectUserData);
    const response = await getAccessChat(id, selectUserData._id);
    socket.emit("join_room", response?._id);
    setCreateRoom(response?._id);
    setAllMessages(response.messages);
  };

  //handle send Message
  const handleOnEnter = async () => {
    try {
      if (newMessage !== "") {
        const messageData = {
          senderId: id,
          text: newMessage,
          chatId: room,
        };

        const newMessageData = await sendMessage(messageData);
        socket.emit("new message", newMessageData);
        setAllMessages((prevMessages) => [...prevMessages, newMessageData]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Subscribe to the 'message received' event
  useEffect(() => {
    socket.on("message recieved", (messageRecived) => {
      setAllMessages((prevMessages) => [...prevMessages, messageRecived]);
    });
  });

  // fetch all users
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

  // socket connection
  useEffect(() => {
    socket.emit("setup", id);
    socket.on("connected", () => setSocketConnected(true));
  }, []);

  //----
  useEffect(() => {
    selectedChatCompare = selectedUser;
  }, [selectedUser]);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={(e) => setSidebarOpen(!isSidebarOpen)}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <BsLayoutSidebar className="text-xl" />
              </button>
              <Link to={"/"} className="flex ml-2 md:mr-24">
                <img src="/logo.png" className="h-8 mr-3" alt="coconut." />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex bg-slate-100">
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } bg-white border-r border-gray-200 sm:translate-x-0`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul className="space-y-2 font-medium">
              {userList?.map((chat, indx) => {
                return (
                  <div key={indx} onClick={() => handleUserClick(chat)}>
                    <Coversation data={chat} currentUserId={id} />
                  </div>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>

      {/* chat area */}

      {selectedUser ? (
        <div className="p-4 sm:ml-64 h-screen pt-14 ">
          <div className="p-4 border border-gray-200 rounded-lg h-full flex flex-col">
            {/* ---===---- */}
            <div className="grid">
              <div className="flex rounded items-center bg-gray-100 h-16 dark:bg-gray-800">
                <h1 className="text-start font-bold  ml-5 font-sans text-gray-600 text-2xl">
                  {selectedUser?.UserName}
                </h1>
              </div>
            </div>

            {/* ---===---- */}
            <div className="flex flex-col items-center justify-between rounded-lg flex-1 mt-1 ">
              <div className="w-full overflow-x-auto rounded-lg h-[400px] overflow-y-auto px-5 ">
                {allMessages?.map((data) => {
                  return (
                    <div
                      key={data._id}
                      className={`${
                        data.senderId === id
                          ? `chat chat-end`
                          : `chat chat-start`
                      }`}
                    >
                      <div className="chat-image avatar">
                        <div className="w-10 rounded-full">
                          <img
                            alt="Tailwind CSS chat bubble component"
                            src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                        </div>
                      </div>

                      <div className="chat-header gap-4">
                        <h1>
                          {data?.senderId === id
                            ? `You`
                            : selectedUser?.UserName}
                        </h1>
                        <time className="text-xs opacity-50">
                          {format(data?.createdAt)}
                        </time>
                      </div>
                      <div className="chat-bubble">{data?.text}</div>
                    </div>
                  );
                })}
              </div>

              <InputEmoji
                value={newMessage}
                onChange={setNewMessage}
                cleanOnEnter
                placeholder="Type a message"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleOnEnter();
                  }
                }}
              />
            </div>
          </div>
        </div>
      ) : (
        <EmptyChat />
      )}
    </>
  );
};

export default Chat;
