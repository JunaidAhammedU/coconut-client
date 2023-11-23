import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const ChatArea = ({ selectedUser, handleBackButton, room, socket, chatHistory }) => {
  const chatContainerRef = useRef(null);
  const { id, name } = useSelector((state) => state.user);
  const [newMessage, setNewMessage] = useState("");
  const [allMessages, setAllMessages] = useState([]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage !== "") {
      const messageData = {
        text: newMessage,
        senderId: id,
        chatId: room,
        time: new Date().toLocaleTimeString(),
      };

      setAllMessages([...allMessages, messageData]);
      await socket.emit("send_message", messageData);

      setNewMessage("");
    }
  };

  useEffect(() => {
    if (socket && selectedUser && room) {
      socket.emit("join_room", room);
    }
  }, [selectedUser]);

  // receive message
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setAllMessages((prevMessage) => [...prevMessage, data]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, [socket, allMessages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [allMessages]);

  return (
    <>
      {selectedUser ? (
        <div className="w-full p-4">
          <div className="flex items-center mb-4">
            <button
              className="mr-3  rounded-full cursor-pointer"
              onClick={handleBackButton}
            >
              &lt; Back
            </button>
            <h1 className="text-xl font-semibold">Chat with {selectedUser}</h1>
          </div>

          <div
            className="border rounded-xl h-[410px] overflow-hidden overflow-y-auto p-4 bg-purple-400"
            ref={chatContainerRef}
          >
            {allMessages.map((message, indx) => {
              return (
                <div
                  className={`chat ${
                    message.senderId == id ? `chat-end` : `chat-start`
                  }`}
                  key={indx}
                >
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img
                        alt=""
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                      />
                    </div>
                  </div>
                  {message.senderId === id ? (
                    <div className="chat-header">you</div>
                  ) : (
                    <div className="chat-header">user</div>
                  )}
                  <div className="chat-bubble">{message.text}</div>
                  <div className="chat-footer opacity-50">{message.time}</div>
                </div>
              );
            })}
          </div>

          <form>
            <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50 mt-4">
              <textarea
                id="chat"
                rows="1"
                className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                placeholder="Your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
                onClick={handleSendMessage}
              >
                <span>send</span>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="w-full p-4">
          <h1 className="text-xl font-semibold">Select any chat</h1>
        </div>
      )}
    </>
  );
};

export default ChatArea;
