import React, { Component } from "react";
import * as api from "../../utils/api";
import CommentList from "../comments/CommentList";

import ErrorPage from "../ErrorPage";
import Loader from "../loader/Loader";
import { dateFormat } from "../../utils/Format";


class Article extends Component {
  state = {
    article: {},
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false, null: false });
    });
  }

  render() {
    const {article_id } = this.props
    const { isLoading, err, article: {title, topic, body, author, created_at, votes, comment_count} } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage />;

    const formattedDate = dateFormat(created_at);

    return (
      <main className="single-article">
        <section className="article-lead">
          <h6 className="article-topic">{topic}</h6>
          <h3 className="article-title">{title}</h3>
        </section>
        <p className="article-body">{body}</p>
        <section className="article-stats">
          <p>
            Published by: {author} on {formattedDate}
          </p>
          <p>{votes}</p>
          <h6>{comment_count}</h6>
        </section>
        <CommentList article_id={article_id} />
      </main>
    );
  }
}

export default Article;
