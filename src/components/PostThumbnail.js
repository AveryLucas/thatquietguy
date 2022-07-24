import React from "react";
import { Link } from "react-router-dom";
// import BlogThumbnail from "../components/BlogThumbnail";
const PostThumbnail = ({ title, desc, linkTo = "" }) => {
  const style = {
    backgroundImage: "url(https://placeimg.com/250/200/any)",
  };

  return (
    <Link
      to={`/post/${title.split(" ").join("_").toLowerCase()}`}
      className="blog-link"
    >
      <div className="blog-details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

export default PostThumbnail;
