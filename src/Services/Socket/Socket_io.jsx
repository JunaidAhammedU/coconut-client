import io from "socket.io-client";

const initializeSocket = () => {
  const socket = io.connect("http://oleaplants.shop/");
  return socket;
};

export { initializeSocket };
