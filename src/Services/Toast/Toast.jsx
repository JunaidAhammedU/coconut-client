import { toast } from "react-hot-toast";
//--------------------------------------

export const errorAlert = async (message) => {
  toast.error(message, {
    position: "top-right",
  });
};

export const successAlert = async (message) => {
  toast.success(message, {
    position: "top-right",
    style: {
      zIndex: 9999,
    },
  });
};

export const warnAlert = async (message) => {
  toast.success(message, {
    style: {
      border: "1px solid #fff",
      padding: "11px",
      color: "#713200",
      backgroundColor: "#fae105",
    },
    iconTheme: {
      primary: "#d4c00d",
      secondary: "#FFFAEE",
    },
  });
};

export const commentAddedAlert = async (message) => {
  toast.success(message, {
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "#713200",
      secondary: "#FFFAEE",
    },
  });
};

export const emojiAlert = (message) => {
  toast(message, {
    icon: "🍲",
  });
};
