import Head from "next/head";
import Link from "next/link";
import styles from "./layout.module.css";

export const siteTitle = "TechCity | Every Tech Matters.";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content={`https://raw.githubusercontent.com/jeelpatel17/techcity/main/public/images/screenstabbed.jpg`}
        />
        <meta
          name="google-site-verification"
          content="8VJBJfVPCua_pYuvuJWayZ_4wxT64-GxBem-XMoNtio"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="description"
          content="A Personal Blog by Jeel Patel, with number of features like loading transitions, commenting, and circular cursor. It is an open source blog, anyone can write blog in it."
        />
        <meta
          property="og:description"
          content="A Personal Blog by Jeel Patel, with number of features like loading transitions, commenting, and circular cursor. It is an open source blog, anyone can write blog in it."
        />
        <meta property="og:url" content="https://techcity.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
