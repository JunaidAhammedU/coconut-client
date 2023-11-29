import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
//-------------------------

const LandingPage = () => {
  return (
    <>
      <section className="relative">
        <div className="overflow-hidden w-full">
          <div>
            <img
              src="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg"
              alt=""
              className="w-full h-[550px] object-cover"
            />
          </div>
          <div className="blured_div"></div>
          <div className="text_div">
            <h1 className="landing_txt">
              Healthy life Make <br /> Your Food More
            </h1>
            <h1 className="text-4xl font-bold mb-4 lg:text-left">
              <span className="delicious">"Delicious"</span>
            </h1>
            <p className="text-lg mb-8 lg:text-left font-abc drop-shadow-xl text-black font-bold">
              Welcome to Our Culinary Hub: Where Every Recipe Tells a Story!
              Discover, <br /> Create, and Share Flavorful Delights with Our
              Intuitive Recipe Sharing App.
            </p>
            <div className="flex gap-5 ">
              <Link to={"/explore-recipe"}>
                <button className="landing_btn">Explore recipes</button>
              </Link>
              <Link to={"/user-profile/collections"}>
                <button className="landing_btn">Collections</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
