import React from "react";
import PostThumbnail from "../components/PostThumbnail";

function getMdxFiles() {
  const mdxFileDirectories = require
    .context("../posts", false, /\.(mdx)$/)
    .keys();

  const modules = mdxFileDirectories.map((postDirectory) => {
    const data = require(`../posts/${postDirectory.split("/").pop()}`);
    return data;
  });

  return modules.filter((mdxModule) => {
    const { title, subTitle, desc, i } = mdxModule;
    console.log({ title, subTitle, desc, i });
    if (title && desc && i)
      return {
        MdxComponent: mdxModule.default,
        title,
        subTitle,
        desc,
      };
  });
}

const IndexPage = ({ background }) => {
  const mdxFiles = getMdxFiles();
  console.log(mdxFiles);
  const renderedList = getMdxFiles().map((post, index) => {
    return (
      <PostThumbnail
        title={post.title}
        desc={post.desc}
        key={`post_${index}`}
      />
    );
  });

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

export default IndexPage;
