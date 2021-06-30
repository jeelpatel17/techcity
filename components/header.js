import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import styles from "./layout.module.css";

const name = "Jeel Patel";
const siteName = "TechCity";

const myLoader = ({ src }) => {
  return `${src}`;
};

export default function Header(props) {
  return (
    <>
      <Head>
        <title>{props.siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.header}>
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
      </div>
    </>
  );
}
