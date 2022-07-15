import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>My Blog</title>
      </Head>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
}
