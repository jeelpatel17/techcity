import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Date from "./date";

export default function Content(props) {
  const thumbnailLoader = ({ src }) => {
    return `${src}`;
  };

  function countWords() {
    var words = `${props.content}`.split(" ").length;

    if (words <= 300) {
      return "3 min read";
    } else if (words > 300 && words <= 600) {
      return "5 min read";
    } else if (words > 600 && words <= 1000) {
      return "8 min read";
    } else {
      return "12 min read";
    }
  }
  return (
    <>
      <h1 className={utilStyles.headingXl}>{props.blogTitle}</h1>
      <div style={{ fontWeight: "100" }} className={utilStyles.lightText}>
        <Date dateString={props.blogDate} />
        &nbsp;•&nbsp;
        <span>{countWords()}</span>
      </div>
      <br />
      <br />
      <Image
        src={props.blogThumbnail}
        height={1080}
        loader={thumbnailLoader}
        width={1920}
        placeholder="blur"
      />
      &nbsp;
      <div dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} />
    </>
  );
}
