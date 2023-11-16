// authUtils.js
export const isAuthenticated = (role) => {
    const user = role === "admin" ? JSON.parse(localStorage.getItem("admin")) : JSON.parse(localStorage.getItem("user"));
    return !!user;
  };
  