import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { is_auth } from "../../../Services/api/user_API";
import { getAllCategories } from "../../../Services/api/admin_API";
import LandingPage from "../LandingPage/LandingPage";
//-------------------------------------------------------

const Home = () => {
  const navigate = useNavigate();
  const [allCategory, setAllCategory] = useState([]);

  //check the user is authenticated
  const checkIsauthenticated = async () => {
    const data = await is_auth();
    if (!data.status) {
      localStorage.removeItem("user");
      navigate("/login");
    } else {
      console.log(res);
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

      {/* ------------------- */}
      <section>
        <h1 className="text-5xl font-bold mt-5 text-center font-abc ">
          Cuisines
        </h1>
        {/* <div className="flex flex-wrap justify-center gap-8 ">
          {allCategory.map((data) => {
            return (
              <div className="cat_Div1" key={data?._id}>
                <div className="relative">
                  <img src="bg-pater-11.png" alt="" className="outerImgPtrn1" />
                  <img
                    src={`/Images/${data?.image}`}
                    alt=""
                    className="innerImgPtrn1"
                  />
                </div>
              </div>
            );
          })}
        </div>  */}
      </section>
    </>
  );
};

export default Home;
