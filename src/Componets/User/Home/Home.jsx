import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
//----------------------------------------------

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user ? user.token : null;
    axios
      .post(import.meta.env.VITE_REACT_APP_SERVER_URL, { token })
      .then((response) => {
        const data = response.data;
        if (data.status) {
          if (data.status === -1) {
            localStorage.removeItem("user");
            navigate("/login");
          }
          if (data.status === 0) {
            navigate("/login");
          }
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);

  const sectionStyle = {
    background:
      "url('https://images.pexels.com/photos/821403/pexels-photo-821403.jpeg') no-repeat center center fixed",
    backgroundSize: "cover",
    minHeight: "100%",
  };
  return (
    <>
      <section style={sectionStyle}>
        <div className="flex justify-between px-24 py-8 max-w-screen-xl mx-auto">
          <div className="max-w-md">
            <h1 className="pt-4 text-6xl font-bold tracking-tighter leading-tight">
              Healthy life Make Your Food More{" "}
              <span className="delicious">"Delicious.</span>
            </h1>
            <p className="pt-2 text-lg font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              laudantium reiciendis, blanditiis laborum illo veritatis{" "}
            </p>
            <div className="flex pt-8 space-x-6 ">
              <button className="button_Landing_1">Get Started</button>
              <button className="button_Landing_2">Explore</button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- */}
      <section>
        <h1 className="text-5xl font-bold mt-5 text-center ">Categories</h1>
        <div className="flex flex-wrap justify-center gap-8 ">
          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-11.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-12.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-13.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/2762942/pexels-photo-2762942.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-14.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/2067405/pexels-photo-2067405.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-15.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-13.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/3026803/pexels-photo-3026803.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-17.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/1006190/pexels-photo-1006190.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>

          <div className="cat_Div1">
            <div className="relative">
              <img src="bg-pater-12.png" alt="" className="outerImgPtrn1" />
              <img
                src="https://images.pexels.com/photos/8820783/pexels-photo-8820783.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
                className="innerImgPtrn1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <section className="grid gap-4 bg-red-400  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3">
        <div className="bg-blue-200 h-12">1
        </div>
        <div className="bg-blue-200 h-12 hover:scale-110 transition duration-300">1</div>
        <div className="bg-blue-200 h-12">1</div>
        <div className="bg-blue-200 h-12">1</div>
      </section> */}
    </>
  );
};

export default Home;
