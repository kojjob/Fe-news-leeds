import React from "react";
import { dateFormat } from "../utils/Format";

const CommentCard = ({
  author,
  created_at,
  body,
  votes,
  comment_id,
  username,
}) => {
  const formattedDate = dateFormat(created_at);

  return (
    <section className="comment-card">
      <article className="comment-stats">
        <p className="comment-author">{author}</p>
        <p className="comment-date">{formattedDate}</p>
      </article>
      <article className="comment-body">{body}</article>
    </section>
  );
};

export default CommentCard;
