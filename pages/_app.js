import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css"; // styles of nprogress
import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css"; //nprogress module

// Binding events
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
