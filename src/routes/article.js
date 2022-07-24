import React from "react";
import { useParams } from "react-router-dom";

function getMdxFiles() {
  const mdxFileDirectories = require
    .context("../posts", false, /\.(mdx)$/)
    .keys();

  return mdxFileDirectories.map((postDirectory) => {
    const data = require(`../posts/${postDirectory.split("/").pop()}`);
    const { title, subTitle, desc } = data;
    if (title && desc)
      return {
        Mdx: data.default,
        title,
        subTitle,
        desc,
      };
  });
}

const Article = ({ background }) => {
  const { title } = useParams();
  const Content = getMdxFiles().filter(
    (post) => post.title.split(" ").join("_").toLowerCase() == title,
  )[0].Mdx;

  return (
    <React.Fragment>
      <div className="container">
        <article>
          <Content title={"TEST"} />
        </article>
        {/* <div
          style={{
            width: 23,
            height: 23,
            borderRadius: 250,
            background,
            opacity: 0.4,
            margin: "20px auto 0 auto",
          }}
        /> */}
      </div>
    </React.Fragment>
  );
};

export default Article;
