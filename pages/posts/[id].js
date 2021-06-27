import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Image from "next/image";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

const thumbnailLoader = ({ src }) => {
  return `${src}`;
};

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  function countWords(str) {
    var words = postData.contentHtml.split(" ").length;

    if (words <= 300) {
      return "3 min read";
    } else if (words > 300 && words <= 600) {
      return "5 min read";
    } else if (words > 600 && words <= 1000) {
      return "8 min read";
    } else {
      return "12 min read";
    }
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
          &nbsp;•&nbsp;
          <span>{countWords()}</span>
        </div>
        <br />
        <br />
        <Image
          src={postData.thumbnail}
          height={1080}
          loader={thumbnailLoader}
          width={1920}
          placeholder="blur"
        />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
