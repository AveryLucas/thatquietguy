import React from "react";
import PostThumbnail from "../components/PostThumbnail";

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

const Indexes = ({ background }) => {
  const mdxFiles = getMdxFiles("../posts");

  const renderedList = mdxFiles.map(({ title, desc }) => (
    <PostThumbnail title={title} desc={desc} />
  ));

  return (
    <div
      style={{
        display: "flex",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 0",
          margin: "auto",
        }}
      >
        {renderedList}
        {/* <div
          style={{
            width: 30,
            height: 30,
            borderRadius: 300,
            background,
            margin: "50px auto 0 auto",
          }}
        /> */}
      </div>
    </div>
  );
};

export default Indexes;
