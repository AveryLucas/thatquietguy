import React from "react";

const PostHeader = ({ title = "Untitled", subTitle }) => {
  return (
    <div id="post-header">
      <h1>{title}</h1>
      {/* <p>{subTitle}</p> */}
    </div>
  );
};

export default PostHeader;
