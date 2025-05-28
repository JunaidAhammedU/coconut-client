import io from "socket.io-client";

const initializeSocket = () => {
  const socket = io.connect("https://coconut-server-b054.onrender.com");
  return socket;
};

export { initializeSocket };
