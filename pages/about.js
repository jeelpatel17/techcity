import Header from "../components/header";
import Layout from "../components/layout";
import styles from "../components/layout.module.css";
import Image from "next/image";
// for cursor
import React from "react";
import AnimatedCursor from "react-animated-cursor";
import dynamic from "next/dynamic";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function About() {
  // for cursor
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <>
      {/* for cursor */}
      <AnimatedCursor
        color="65,105,225"
        innerSize={12}
        outerSize={24}
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={4}
      />
      <br />
      <br />
      <br />
      <Header siteTitle={`About | TechCity`} />
      <article className={styles.container}>
        <p>
          <b>TechCity</b> is a <b>'Technical + Self-Help'</b> blog where anyone
          can express their opinion into the comment box, and can publish blogs
          as a Guest Writer.
        </p>
        <Image
          src={
            "https://raw.githubusercontent.com/jeelpatel17/techcity/main/public/images/screenstabbed.jpg"
          }
          height={1080}
          loader={myLoader}
          width={1920}
          placeholder="blur"
        />
        <br />
        <br />
        <p>
          You'll find most blogs on:
          <ul>
            <li>Coding Problems & Solutions</li>
            <li>Software installing guides</li>
            <li>Self help & Neuroscience</li>
          </ul>
        </p>
        <p>
          It was started by <a href="https://jeelpatel.ml">Jeel Patel</a> on 29
          June, 2021, for expressing his views with like-minded individuals
          across the web.
        </p>
        <p align="center">
          <strong>
            Anyone can contribute to this{" "}
            <a href="https://github.com/jeelpatel17/techcity">open source</a>{" "}
            blog.
          </strong>
        </p>
      </article>
      <Layout />
    </>
  );
}
