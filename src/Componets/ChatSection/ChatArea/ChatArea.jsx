import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { IoMdArrowRoundBack } from "react-icons/io";
import EmptyChat from "../EmptyChat/EmptyChat";
import { FiSend } from "react-icons/fi";
//--------------------------------------------------------

const ChatArea = ({ selectedUser, handleBackButton, room, socket }) => {
  const chatContainerRef = useRef(null);
  const { id } = useSelector((state) => state.user);
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
        <div className="w-full p-2 overflow-hidden">
          <div className="chat_header">
            <IoMdArrowRoundBack
              className="mr-3  rounded-full cursor-pointer"
              onClick={handleBackButton}
            />
            <h1 className="text-lg font-sans">
              Chat with{" "}
              <span className="font-semibold font-sans text-xl">
                {selectedUser}
              </span>
            </h1>
          </div>

          <div className="chat_area" ref={chatContainerRef}>
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
                  <div className="chat-bubble">
                    <p>{message.text}</p>
                  </div>
                  <div className="chat-footer opacity-50">{message.time}</div>
                </div>
              );
            })}
          </div>

          {/* input field section */}
          <form>
            <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 mt-2">
              <textarea
                id="chat"
                rows="1"
                className="chat_input"
                placeholder="Your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              ></textarea>

              <FiSend
                type="submit"
                className="send_btn"
                onClick={handleSendMessage}
              />
            </div>
          </form>
        </div>
      ) : (
        <EmptyChat />
      )}
    </>
  );
};

export default ChatArea;