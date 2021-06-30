import Link from "next/link";
import Head from "next/head";
import styles from "../styles/404.module.css";
// for cursor
import React from "react";
import dynamic from "next/dynamic";

export default function Custom404() {
  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Uh oh! Page not found!</title>
      </Head>
      {/* for cursor */}
      <AnimatedCursor
        color="65,105,225"
        innerSize={12}
        outerSize={24}
        outerAlpha={0.2}
        innerScale={0.4}
        outerScale={4}
      />
      <body className={styles.body}>
        <section className={styles.notFound}>
          <div className={styles.img}>
            <img
              className={styles.image}
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
            <img
              className={styles.image}
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
          <div className={styles.text}>
            <h1 className={styles.h1}>404</h1>
            <h2 className={styles.h2}>PAGE NOT FOUND</h2>
            <h3 className={styles.h3}>BACK TO HOME?</h3>
            <Link href="/">
              <a className={styles.a}>YES</a>
            </Link>
            <a
              href="https://www.youtube.com/watch?v=G3AfIvJBcGo"
              className={styles.a}
            >
              NO
            </a>
          </div>
        </section>
      </body>
    </>
  );
}
