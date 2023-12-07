import React from "react";
import ExploreRecipe from "../../Componets/User/ExploreRecipe/ExploreRecipe";
import Header from "../../Componets/User/Header/Header";
import Footer from "../../Componets/User/Footer/Footer.jsx";
//-------------------------------------------------------------------------

const ExploreRecipePage = () => {
  return (
    <div>
      <Header />
      <ExploreRecipe />
      <Footer />
    </div>
  );
};

export default ExploreRecipePage;
