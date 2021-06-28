import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Header(props) {
  return (
    <>
      <Head>
        <title>{props.siteTitle}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}
