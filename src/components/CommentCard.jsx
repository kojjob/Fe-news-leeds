import React from "react";
import { dateFormat } from "../utils/Format";

const CommentCard = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  username,
  removeCommentFromState,
}) => {
  const formattedDate = dateFormat(created_at);

  return (
    <section className="comment-card">
      <p>
        {author} <span></span> {formattedDate}
      </p>
      <article>{body}</article>
    </section>
  );
};

export default CommentCard;
