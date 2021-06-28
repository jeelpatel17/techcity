import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Header from "../../components/header";
import React from "react";
import Disqus from "disqus-react";
import Content from "../../components/content";

// Assigning props to postData
export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

// Fetching Blogs
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

// Disqus Configuration
export default function Post({ postData }) {
  const disqusShortname = "techcity-1";
  const disqusConfig = {
    url: "http://localhost:3000/posts/[id].js",
    identifier: `${postData.id}`,
    title: `${postData.title}`,
  };

  return (
    <Layout>
      {/* Blog Header */}
      <Header siteTitle={postData.title} />

      {/* Blog Content */}
      <Content
        blogTitle={postData.title}
        blogDate={postData.date}
        blogThumbnail={postData.thumbnail}
        content={postData.contentHtml}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      {/* Comment Functionality */}
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </Layout>
  );
}
