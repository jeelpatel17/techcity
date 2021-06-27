import { getSortedPostsData } from "../lib/posts";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
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

export default function Home({ allPostsData }) {
  const [elements, setElement] = useState([
    {
      id: 1,
      src: "",
    },
    {
      id: 2,
      src: "https://source.unsplash.com/144x144",
    },
    {
      id: 3,
      src: "https://source.unsplash.com/144x144",
    },
  ]);
  const [src, setSrc] = useState("");
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
                      <small style={{ color: "#eee!important" }}>
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
      <div>
        {elements.length
          ? elements.map((item) => (
              <React.Fragment key={item.id}>
                <Image
                  src={item.src}
                  height={144}
                  // loader={myLoader}
                  width={144}
                  placeholder="blur"
                />
              </React.Fragment>
            ))
          : null}
      </div>
      <footer align="center">Made with ❤️ & Next JS</footer>
    </Layout>
  );
}
