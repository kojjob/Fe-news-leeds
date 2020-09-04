// import React, { Component } from "react";
// import * as api from "../../utils/api";

// class CommentForm extends Component {
//   state = {
//     username: "weegembump",
//     body: "",
//     addComment: '',
//   };

//   componentDidMount() {
//     this.setState({ body: '', username: 'weegembump', })
//   }

//   handleChange = (event) => {
//     const {id, value } = event.target;
//     this.setState({ [id]: value })
//   };

//   postAComment = () => {
//     api.postComment(this.props.articleId, {
//       username: this.state.username,
//       body: this.state.body,
//     });
//   };

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     this.postAComment();
//   };

 

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="comment-form">
//         {/* <h3 className="comment-author"></h3> */}
//         <textarea
//           onChange={this.handleChange}
//           name="comment_body"
//           id="comment_body"
//           cols="30%"
//           rows="10"
//           placeholder="Write a comment..."
//         />
//         <button className="btn-comment">Comment</button>
//       </form>
//     );
//   }
// }

// export default CommentForm;
