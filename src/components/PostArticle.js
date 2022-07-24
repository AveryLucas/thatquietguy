import React from "react";

// class PostArticle extends React.Component {
//   render() {
//     if (this.props.render) return <article>{this.props.children}</article>;
//   }
// }
const PostArticle = (props) => {
  if (props.render) return <article>{props.children}</article>;
};

export default PostArticle;
