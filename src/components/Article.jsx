import React, { Component } from "react";
import * as api from "../utils/api";
import CommentList from "./CommentList";

import Loader from "./Loader";

class Article extends Component {
  state = {
    article: {},
    isLoading: true,
  };

  componentDidMount() {
    api.getSingleArticle(this.props.article_id).then((article) => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <Loader />;

    const {
      title,
      topic,
      body,
      author,
      created_at,
      votes,
      comment_count,
    } = this.state.article;

    return (
      <main className="single-article">
        <section className="article-lead">
          <h6 className="article-topic">{topic}</h6>
          <h3 className="article-title">{title}</h3>
        </section>
        <p className="article-body">{body}</p>
        <section className="stats">
          <p>
            Published by: {author} on {created_at}
          </p>
          <p>{votes}</p>
          <h6>{comment_count}</h6>
        </section>
        <CommentList />
      </main>
    );
  }
}

export default Article;
