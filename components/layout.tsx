import Image from "next/image";
import Head from "next/head";

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
      <footer className="flex justify-between align-middle text-lg px-4 pb-2">
        <p>Macbeth Motif | By: cqb13</p>
        <a href="https://github.com/cqb13" target="_blank">
          <Image
            src="/github.svg"
            alt="Github Logo"
            width={30}
            height={30}
          />
        </a>
      </footer>
    </>
  );
};

export default Layout;
