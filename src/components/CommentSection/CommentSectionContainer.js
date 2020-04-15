// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);

  const submitComment = event => {
    const commentText = event.target.firstChild.value;
    const commentObject = {
      username: "anon",
      text: commentText
    }
    const updatedComment = comments.map(comment => comment);
    updatedComment.push(commentObject)

    event.preventDefault();
    return setComments(updatedComment)
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((comment, index) => {
        return <Comment key={index} comment={comment}/>
      })}
      
      <CommentInput submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
