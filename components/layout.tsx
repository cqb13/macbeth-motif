import Head from "next/head";
import { ReactNode } from "react";

const Layout = ({
  children,
  title
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
};

export default Layout;
