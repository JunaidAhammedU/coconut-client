import React, { useEffect, useState } from "react";
import {
  BsBookmarkPlus,
  BsBoxArrowUp,
  BsArrowUpRight,
  BsChatLeftText,
  BsCalendar4Event,
  BsPeople,
} from "react-icons/bs";
import { PiChatsDuotone } from "react-icons/pi";
import { BiTime } from "react-icons/bi";
import { PiStarFourDuotone } from "react-icons/pi";
import { PiCookingPotDuotone } from "react-icons/pi";
import "./RecipeDetails.css";
import { useParams, Link } from "react-router-dom";
import {
  getRecipeData,
  followUser,
  unfollowUser,
  newComment,
  // fetchAllComment,
} from "../../../Services/api/user_API";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../../../axios";
//----------------------------------------------------------------------------------------

const RecipeDetails = () => {
  let { id, userId } = useParams();

  const dispatch = useDispatch();
  const { id: loggedInUserId } = useSelector((state) => state.user);
  const [isFollowing, setIsFollowing] = useState(false);
  const [comment, setComment] = useState({});
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [nutritions, setNutritions] = useState({});
  const [allComments, setallComments] = useState([]);

  const fetchData = async () => {
    const { recipeData, userData } = await getRecipeData(id, userId);
    if (recipeData && userData) {
      setInstructions(recipeData.Instructions);
      setIngredients(recipeData.Ingredients);
      setNutritions(recipeData.Nutritions);
      setallComments(recipeData.Comments);
      setRecipeData(recipeData);
      setUserDetails(userData);
    }
  };

  useEffect(() => {
    fetchData();
  }, [newComment]);

  // Fetch follow status when component mounts
  useEffect(() => {
    const fetchFollowStatus = async () => {
      try {
        const response = await axiosInstance.get(
          `/followStatus/${loggedInUserId}/${userId}`
        );
        setIsFollowing(response.data.isFollowing);
      } catch (error) {
        console.error("Error fetching follow status:", error);
      }
    };

    fetchFollowStatus();
  }, [loggedInUserId, userId]);

  // handle follow
  const handleFollow = async () => {
    const status = await followUser(loggedInUserId, userId);
    if (status) {
      setIsFollowing(true);
    }
  };

  // handle un follow
  const handleUnfollow = async () => {
    const status = await unfollowUser(loggedInUserId, userId);
    if (status) {
      setIsFollowing(false);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();

    if (comment !== "") {
      const newCommentData = {
        user: loggedInUserId,
        text: comment,
        recipe: recipeData._id,
      };
      await newComment(newCommentData);
      setallComments((preComment) => [...preComment, newCommentData]);
    }
  };

  return (
    <>
      <section>
        <div className="topSectionDiv">
          <div className="flex mr-2 bg-white p-3">
            <BsArrowUpRight className="my-auto text-lg text-lime-600" />
            <p className="text-xs font-sans ml-1 my-auto">
              <span className="font-sans text-lime-600 font-bold">85%</span> would make this again.
            </p>
          </div>

          <div className="activeButtonDiv ">
            <div className="bg-white ">
              <Link to={"/userchat"}>
                <button className="activeButton">
                  <PiChatsDuotone className="h-6 w-6" />
                  Chat
                </button>
              </Link>
            </div>

            <div className="bg-white ">
              <button className="activeButton">
                <BsBoxArrowUp className="h-6 w-6" />
                Share
              </button>
            </div>

            <div className="bg-white ">
              <button className="activeButton">
                <BsBookmarkPlus className="h-6 w-6" />
                Save
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ============== */}

      <section className="px-2">
        <div className="grid grid-cols-1 mt-5 p-3">
          <h1 className="ultraSm:text-5xl ultraSm:text-center sm:text-7xl font-semibold font-serif md:text-start">
            {recipeData.title}
          </h1>
        </div>

        <div className="flex mt-5 p-2 ">
          <div className="avatar online placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-16">
              <span className="text-2xl">
                {userDetails.UserName ? userDetails.UserName[0] : ``}
              </span>
            </div>
          </div>

          <div className="px-5 my-auto">
            <div className="">
              <h1 className="text-xl font-sans font-semibold">
                {userDetails.UserName}
              </h1>
            </div>

            <div className="mt-1">
              {userId !== loggedInUserId && (
                <button
                  className="font-sans text-start text-sm rounded-lg font-bold text-black/50 hover:text-black transition"
                  onClick={isFollowing ? handleUnfollow : handleFollow}
                >
                  {isFollowing ? "Unfollow" : "Follow"}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ============== */}

      <section className="px-10 mt-4">
        <div className=" ultraSm:px-6 md:px-16 border-t-2 ">
          <div className="mt-4 ">
            <p className="text-lg font-sans text-start">
              {`"${recipeData.description}"`}
            </p>
          </div>

          <div className="flex justify-center py-2 mt-5 overflow-hidden">
            <img
              src={`/Images/${recipeData.recipeImage}`}
              alt=""
              className="object-cover rounded-xl lg:h-[400px] lg:w-[800px] xl:h-[550px] xl:w-[800px]"
            />
          </div>
        </div>

        <div className="flex mt-5 gap-3  py-3 justify-center ">
          <div className="ultraSm:px-0 md:px-4 lg:px-6 border-r-2 border-l-2">
            <button className="btn hover:bg-white bg-white border-none text-xs font-thin">
              <BiTime className="h-6 w-6" />
              <span className="font-sans font-bold">{`${recipeData.cookingTime} Min `}</span>
            </button>
          </div>

          <div className="ultraSm:px-0 md:px-4 lg:px-6 border-r-2">
            <button className="btn hover:bg-white bg-white border-none text-xs font-thin">
              <BsPeople className="h-6 w-6" />
              <span className="font-sans font-bold">4</span>
            </button>
          </div>

          <div className="ultraSm:px-0 md:px-4 lg:px-6 border-r-2">
            <button className="btn hover:bg-white bg-white border-none text-xs font-thin">
              <BsChatLeftText className="h-6 w-6" />
              <span className="font-sans font-bold">123</span>
            </button>
          </div>

          <div className="ultraSm:px-0 md:px-4 lg:px-6 border-r-2">
            <button className="btn hover:bg-white bg-white border-none text-xs font-thin">
              <BsCalendar4Event className="h-6 w-6" />
              <span className="font-sans font-bold">123</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============== */}

      <section>
        <div className="nutrition_instruction_div">
          <div className="border border-dashed border-black/25 rounded-lg px-2 overflow-hidden">
            <h1 className="text-3xl font-semibold font-serif text-start ml-2 my-6">
              Ingredients.
            </h1>

            {ingredients.map((value, ind) => {
              return (
                <div className="flex p-4 relative">
                  <PiStarFourDuotone className="absolute top-5 left-1" />
                  <p className="ml-3 text-lg font-sans">{value}</p>
                </div>
              );
            })}

            {/* nutrition area */}
            <div className="py-4 2xl:px-36 xl:px-28 lg:28 md:px-24">
              <div className=" border rounded-xl bg-gray-50 overflow-hidden overflow-x-auto">
                <h1 className="text-2xl ultraSm:text-lg font-semibold font-sans text-center p-3">
                  Nutritions Fact.
                </h1>

                <table className="text-left text-sm font-light w-full">
                  <thead className="border-b">
                    <tr className="text-center">
                      <th className="px-6 py-4" scope="col">
                        Nutrient
                      </th>
                      <th className="px-6 py-4" scope="col">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Calcium</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.calcium}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Calories</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.calories}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Protein</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.protein}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">
                        Carbohydrates
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.carbohydrates}
                      </td>
                    </tr>
                    <tr className="border-b text-center">
                      <td className="whitespace-nowrap px-6 py-4">Fat</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {nutritions.fat}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* --- */}

          <div className="px-2">
            <h1 className="text-3xl font-semibold font-serif text-start ml-2 my-6">
              Instructions.
            </h1>

            {instructions.map((value, ind) => {
              return (
                <div className="flex p-4 relative">
                  <PiCookingPotDuotone className="text-xl absolute top-5 left-1" />
                  <p className="ml-5 text-lg font-sans">{value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* ========= */}

      <section className="px-10">
        <div className="mt-10 border-t-8 border-defaultBtnColor">
          <h1 className="text-3xl py-5 text-start px-4 font-serif font-semibold">
            Comments* <span className="text-lg font-semibold">(2)</span>
          </h1>
          <div className="py-1">
            <form onSubmit={handleComment}>
              <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-t-lg">
                  <label for="comment" className="sr-only">
                    Your comment
                  </label>
                  <textarea
                    id="comment"
                    rows="4"
                    className="w-full px-0 text-sm text-gray-900 bg-white resize-none border-none"
                    placeholder="Write a comment..."
                    required
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-defaultBtnColor rounded-lg focus:ring-4 focus:ring-blue-200 "
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* === */}

          {allComments.map((comment, indx) => {
            return (
              <div key={indx} className="border rounded p-3 mt-3">
                <div className="flex p-2">
                  <div className="rounded-full w-9 h-9 sm:w-9 sm:h-w-9">
                    <img
                      className="rounded-full w-full h-full object-cover"
                      src="https://picsum.photos/200/300"
                      alt=""
                    />
                  </div>
                  <div className="ml-2 mr-5 my-auto">
                    <h1 className="text-sm font-sans font-semibold">
                      {comment.user.UserName}
                    </h1>
                  </div>
                </div>

                <div className="mt-2 p-2">
                  <p className="font-sans text-sm">{comment.text}</p>
                </div>

                <div className="px-3">
                  <p className=" text-end font-sans text-xs text-black/40">
                    45min ago
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RecipeDetails;
