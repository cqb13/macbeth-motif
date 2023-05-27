import ParticleBackgroundWrapper from "@components/particleBackgroundWrapper";
import EssayContainer from "@components/essayContainer";
import Layout from "@components/layout";
import Slides from "@components/slides";
import Essay from "@components/essay";
import { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout title="Macbeth's Torment">
      <div className="flex mx-auto flex-col items-center justify-center min-h-screen">
        <section className="w-screen h-screen flex flex-col justify-center items-center text-center gap-10 bg-hero-pattern bg-cover bg-center">
          <h1 className="text-7xl font-bold">Macbeth's Torment</h1>
          <a
            href="#slides"
            className="animate-bounce flex flex-col items-center w-fit justify-center hover:tracking-wide hover:text-cyan-600 duration-150"
          >
            <p className="font-medium text-xl">Learn More</p>
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
        <ParticleBackgroundWrapper>
          <div className="py-36" />
          <section id="slides" className="w-screen h-screen">
            <Slides />
          </section>
          <div className="py-36" />
          <section>
            <EssayContainer essay={<Essay />} />
          </section>
        </ParticleBackgroundWrapper>
      </div>
    </Layout>
  );
};

export default Home;
