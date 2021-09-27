import Navbar from "../components/navbar";
import Head from "next/head";

const Layout = ({ children }) => (
  <>
    <Head>
      <title>{}</title>
    </Head>
    <Navbar />
    <main className="container py-4">{children}</main>
  </>
);

export default Layout;
