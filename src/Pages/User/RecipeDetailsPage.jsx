import React from "react";
import Header from "../../Componets/User/Header/Header";
import RecipeDetails from "../../Componets/User/RecipeDetails/RecipeDetails";
import Footer from "../../Componets/User/Footer/Footer.jsx";
//---------------------------------------------------------------------------

const RecipeDetailsPage = () => {
  return (
    <div>
      <Header />
      <RecipeDetails />
      <Footer />
    </div>
  );
};

export default RecipeDetailsPage;
