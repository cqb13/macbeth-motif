import Layout from "@components/layout";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="Macbeth Motif">
      <div
        className="bg-hero-pattern bg-cover bg-center flex mx-auto flex-col items-center justify-center min-h-screen"
      >
        <section className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20">
          <h1 className="text-6xl font-bold">Macbeth Motif</h1>
        </section>
        <section>

        </section>
        <section>
          <article>
            
          </article>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
