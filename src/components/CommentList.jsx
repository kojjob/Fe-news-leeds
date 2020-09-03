import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";
import ErrorPage from "./ErrorPage";
import CommentCard from "./CommentCard";

export default class CommentList extends Component {
  state = {
    comments: [],
    isLoading: true,
    err: null,
  };

  componentDidMount() {
    const { article_id } = this.props;
    const { getComments } = this;
    getComments(article_id);
  }

  getComments = (article_id) => {
    api
      .getAllComments(article_id)
      .then((comments) => {
        this.setState({ comments, isLoading: false, err: null });
      })
      .catch(({response: { status, data: { msg },},}) => {
          this.setState({ err: { status, msg }, isLoading: false });
        }
      );
  };

  render() {
    const { comments, isLoading, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrorPage err={err} />;
    return (
      <section className="comments-list">
        <h3>Comments</h3>
        <p>CommentForm</p>
        <ul className="comment-list">
          {comments.map(({ comment_id, ...comment }) => {
            return (
              <li key={comment_id}>
                <CommentCard {...comment} comment_id={comment_id} />
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}
