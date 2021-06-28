import { getSortedPostsData } from "../lib/posts";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
// import Image from "next/image";
import Header from "../components/header";
// for cursor
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";

const siteTitle = "Welcome to TechCity!";

// const imgSources = [
//   "https://source.unsplash.com/164x130",
//   "https://source.unsplash.com/144x144",
//   "https://source.unsplash.com/1920x1080",
// ];

// let fetchImg = () => {
// do something else here

//   return imgSources.map((img, index) => (
//     <Image src={img} height={100} width={100} key={index} />
//   ));
// };

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  // for cursor
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <Layout home style={{ minHeight: "100%", marginBottom: "-50px" }}>
      {/* for cursor */}
      <AnimatedCursor
        color="65,105,225"
        innerSize={12}
        outerSize={24}
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={4}
      />
      <Header siteTitle={siteTitle} />
      <section className={`${utilStyles.headingMd}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, thumbnail }) => (
            <Container
              fluid
              className={`${utilStyles.card} ${utilStyles.anchors}`}
            >
              <Row>
                <Link href={`/posts/${id}`}>
                  <Col
                    className={`${utilStyles.blogCard}`}
                    style={{
                      backgroundImage: `linear-gradient(to bottom, 
                        rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${thumbnail})`,
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
      <footer align="center">
        Made with ❤️ & Next JS | <Link href={`/about`}>About</Link>
      </footer>
    </Layout>
  );
}
