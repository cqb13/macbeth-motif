import Layout from "@components/layout";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="Macbeth Motif">
      <div className="bg-hero-pattern bg-cover bg-center flex mx-auto flex-col items-center justify-center min-h-screen">
        <section className="flex flex-1 w-full flex-col items-center justify-center text-center gap-10">
          <h1 className="text-7xl font-bold">Macbeth Motif</h1>
          <a href="" className="animate-bounce flex flex-col items-center justify-center hover:tracking-wide hover:text-cyan-600 duration-150 color">
            <p className="font-medium text-xl">
              Learn More
            </p>
            <div className="90">
              <Image
                className="rotate-90"
                src="/arrow.svg"
                alt="arrow"
                width={50}
                height={50}
              />
            </div>
          </a>
        </section>
        <section />
        <section>
          <article />
        </section>
      </div>
    </Layout>
  );
};

export default Home;
