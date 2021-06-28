import { getSortedPostsData } from "../lib/posts";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";

const siteTitle = "Welcome to TechCity!";
// const imgSources = [
//   "https://source.unsplash.com/164x130",
//   "https://source.unsplash.com/144x144",
//   "https://source.unsplash.com/1920x1080",
// ];

// let fetchImg = () => {
//   for (let i = 0; i < imgSources.length; i++) {
//     // console.log(imgSources[i]);
//     return <Image src={imgSources[i]} height={100} width={100} />;
//   }
// };

export default function Home({ allPostsData }) {
  return (
    <Layout home style={{ minHeight: "100%", marginBottom: "-50px" }}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <Container
              fluid
              className={`${utilStyles.card} ${utilStyles.anchors}`}
            >
              <Row>
                <Link href={`/posts/${id}`}>
                  <Col
                    className={"align-items-center"}
                    style={{
                      backgroundImage: `linear-gradient(to bottom, 
                      #000, rgba(0,0,0,0)), url(${thumbnail})`,
                      height: "150px",
                      borderRadius: "10px",
                      backgroundPosition: "center",
                      cursor: "pointer",
                    }}
                  >
                    <li className={utilStyles.listItem} key={id}>
                      <a style={{ color: "#fff!important" }}>{title}</a>
                      <br />
                      <small
                        style={{ color: "#eee!important", fontSize: ".9rem" }}
                      >
                        <Date dateString={date} />
                      </small>
                    </li>
                  </Col>
                </Link>
              </Row>
            </Container>
          ))}
        </ul>
      </section>
      <footer align="center">Made with ❤️ & Next JS</footer>
    </Layout>
  );
}
