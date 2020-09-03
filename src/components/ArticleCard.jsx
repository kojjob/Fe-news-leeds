import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({
  article: {
    title,
    votes,
    topic,
    author,
    created_at,
    comment_count,
    article_id,
  },
}) => {
  return (
    <article className="article-list">
      <Link to={`/${topic}`}>
        <p className="topic-card">{topic}</p>
      </Link>
      <Link to={`/articles/${article_id}`} className="article-list-title">
        <h3>{title}</h3>
      </Link>
      <p className="article-author">
        Published by {author} at {created_at}
      </p>
      <p>{votes}</p>
      <p className="article-list-comments">{comment_count}</p>
    </article>
  );
};

export default ArticleCard;
