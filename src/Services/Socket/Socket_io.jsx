import io from "socket.io-client";

const initializeSocket = () => {
  const socket = io.connect("https://oleaplants.shop");
  return socket;
};

export { initializeSocket };
