import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { is_auth } from "../../../Services/api/user_API";
import { getAllCategories } from "../../../Services/api/admin_API";
import LandingPage from "../LandingPage/LandingPage";
//--------------------------------------------------------------

const Home = () => {
  const navigate = useNavigate();
  const [allCategory, setAllCategory] = useState([]);

  //check the user is authenticated
  const checkIsauthenticated = async () => {
    const data = await is_auth();
    if (!data.status) {
      localStorage.removeItem("user");
      navigate("/login");
    }
  };

  // Function to fetch all categories
  const fetchAllCategory = async () => {
    try {
      const response = await getAllCategories();
      if (response) {
        setAllCategory(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkIsauthenticated();
    fetchAllCategory();
  }, [navigate]);

  return (
    <>
      <LandingPage />
    </>
  );
};

export default Home;
