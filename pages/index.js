import { getSortedPostsData } from "../lib/posts";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Date from "../components/date";
import Header from "../components/header";

const siteTitle = "Welcome to TechCity!";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home style={{ minHeight: "100%", marginBottom: "-50px" }}>
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
