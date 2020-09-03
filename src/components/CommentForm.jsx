import React, { Component } from "react";
import * as api from '../utils/api'

class CommentForm extends Component {
  state = {
    comment_body: "",
    err: null,
    addingComment: false,
  }
  render() {
    const { comment_body, err, addingComment } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="comment-form">
        {/* <h3 className="comment-author"></h3> */}
        <textarea
          name="comment_body"
          onChange={handleChange}
          id="comment_body"
          value={comment_body}
          cols="30"
          rows="10"
         placeholder="Write a comment..."
        />
        <button className="btn-comment">Comment</button>
      </form>
    );
  }
  handleChange = (even) => {
    const {name, value } = event.target;
    this.setState({[name]: value,});
  };
  handleSubmit = (event) => {
    const { article_id } = this.props;
    const { comment_body } = this.state;
    const newComment = {body: comment_body}
  }
};

export default CommentForm;
