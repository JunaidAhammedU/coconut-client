import React, { useState } from "react";
//---------------------------------------

const Comments = ({
  allComments,
  setallComments,
  newComment,
  loggedInUserId,
  recipeId,
}) => {
  const [comment, setComment] = useState({});

  // adding new Comment
  const handleComment = async (e) => {
    e.preventDefault();

    if (comment !== "") {
      const newCommentData = {
        user: loggedInUserId,
        text: comment,
        recipe: recipeId,
      };
      await newComment(newCommentData);
      setallComments((preComment) => [...preComment, newCommentData]);
    }
  };

  const calculateTimeAgo = (createdAt) => {
    const currentDate = new Date();
    const uploadedDate = new Date(createdAt);
    const timeDifference = currentDate - uploadedDate;
    
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days === 1 ? "" : "s"} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    } else {
      return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
    }
  };

  return (
    <>
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
                  {calculateTimeAgo(comment.createdAt)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Comments);
