import React from "react";
import { Link } from "@reach/router";

import {dateFormat} from '../../utils/Format'


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
  const formattedDate = dateFormat(created_at)
  return (
    <article className="article-list">
      <Link to={`/${topic}`}>
        <p className="topic-card">{topic}</p>
      </Link>
      <Link to={`/articles/${article_id}`} className="article-list-title">
        <h3>{title}</h3>
      </Link>
      <section className="article-stats">
        <p className="article-author">
          Author: {author} at {formattedDate}
        </p>
        <p>{votes}</p>
        <p className="article-list-comments">{comment_count}</p>
      </section>
    </article>
  );
};

export default ArticleCard;
