import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import './Comments.css'
//-------------------------------------------------

const Comments = ({
  allComments,
  setallComments,
  newComment,
  loggedInUserId,
  recipeId,
}) => {
  const [comment, setComment] = useState({});

  const sortedComment = allComments.sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

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
      setComment('')
    }
  };

  return (
    <>
      <div className="mt-10 border-t-8 border-defaultBtnColor">
        <h1 className="text-3xl py-5 text-start px-4 font-serif font-semibold">
          Comments* <span className="text-lg font-semibold">({allComments.length})</span>
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
                  className="Comment_input"
                  placeholder="Write a comment..."
                  required
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                <button
                  type="submit"
                  className="Comment_btn"
                >
                  Post comment
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* === */}

        {sortedComment.map((comment, indx) => {
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
                  {format(comment.createdAt)}
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
