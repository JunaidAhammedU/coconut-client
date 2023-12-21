import React from 'react'
import {Routes, Route} from "react-router-dom";
import AuthProtected from "../Common/protectedRoute/AuthProtected";
import HomePage from '../Pages/User/HomePage';
import LoginPage from '../Pages/User/LoginPage';
import RegisterPage from '../Pages/User/RegisterPage';
import OtpVerifyPage from '../Pages/User/OtpVerifyPage';
import ExploreRecipePage from '../Pages/User/ExploreRecipePage';
import RecipeDetailsPage from '../Pages/User/RecipeDetailsPage';
import ChatPage from '../Pages/ChatPage/ChatPage';
import RecipeCategoriesPage from '../Pages/User/RecipeCategoriesPage';
import UserProfilePage from '../Pages/User/UserProfilePage';
import UserRecipeListPage from '../Pages/User/UserRecipeListPage';
import SavedCollectionPage from '../Pages/User/SavedCollectionPage';
import PortectedRoute from '../Common/protectedRoute/ProtectedRoutes'
//------------------------------------------------------------------------

const UserRoutes = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<PortectedRoute element={<HomePage />} />} />
        <Route path="/login" element={<AuthProtected element={<LoginPage />} />} />
        <Route path="/register" element={<AuthProtected element={<RegisterPage />} />} />
        <Route path="/otp-verify" element={<OtpVerifyPage />} />
        <Route path="/explore-recipe" element={<ExploreRecipePage />} />
        <Route path="/recipedetails/:id/:userId" element={<RecipeDetailsPage />} />
        <Route path="/userchat" element={<PortectedRoute element={<ChatPage />}/>} />
        <Route path="/category_recipe/:category" element={<RecipeCategoriesPage />} />
        {/* Nested routes */}
        <Route path="/user-profile" element={<PortectedRoute element={<UserProfilePage />} />} >
          <Route path="recipeList" element={<UserRecipeListPage />} />
          <Route path="collections" element={<SavedCollectionPage />} />
        </Route>
    </Routes>
    </>
  )
}

export default UserRoutes