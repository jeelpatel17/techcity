import Head from "next/head";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import styles from "./layout.module.css";

const name = "Jeel Patel";
const siteName = "TechCity";
export const siteTitle = "TechCity | Your Everyday Tech Blog.";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              src={"https://avatars.githubusercontent.com/jeelpatel17"}
              className={utilStyles.borderCircle}
              height={144}
              loader={myLoader}
              width={144}
              alt={name}
              placeholder="blur"
            />
            <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
            <p>Every tech matters.</p>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  src={"https://avatars.githubusercontent.com/jeelpatel17"}
                  className={utilStyles.borderCircle}
                  height={144}
                  loader={myLoader}
                  width={144}
                  alt={name}
                  placeholder="blur"
                />
              </a>
            </Link>
            <h2 className={utilStyles.heading2Xl}>
              <Link href="/">
                <a>{siteName}</a>
              </Link>
            </h2>
            <p className={utilStyles.headingSm}>Every tech matters.</p>
          </>
        )}
      </header>
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
