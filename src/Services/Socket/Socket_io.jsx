import io from "socket.io-client";

const initializeSocket = () => {
  const socket = io.connect("http://localhost:3000");
  return socket;
};

export { initializeSocket };
