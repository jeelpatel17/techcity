import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Header from "../../components/header";
import Disqus from "disqus-react";
import Content from "../../components/content";
// for cursor
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";

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
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <Layout>
      {/* Blog Header */}
      <Header siteTitle={postData.title} />
      <AnimatedCursor
        color="65,105,225"
        innerSize={12}
        outerSize={24}
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={4}
      />
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
