import ImageSlides from "@data/ImageSlides";
import { useState, useEffect } from "react";
import Image from "next/image";

const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(
    () => {
      if (!play) return;
      const interval = setInterval(() => {
        setCurrentSlide(prevSlide => (prevSlide + 1) % ImageSlides.length);
      }, 10000);

      return () => clearInterval(interval);
    },
    [play]
  );

  const goToNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % ImageSlides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide(prevSlide => {
      if (prevSlide === 0) {
        return ImageSlides.length - 1;
      } else {
        return prevSlide - 1;
      }
    });
  };

  const { name, quote, location, image, inText } = ImageSlides[currentSlide];

  return (
    <div className="relative h-screen">
      <div className="py-4">
        <Image
          src={image}
          alt={name}
          width={1920}
          height={1080}
          quality={100}
          className="object-contain h-slide-image-height w-fit rounded-2xl mx-auto"
        />
      </div>
      <div className="absolute top-4 left-4 text-white">
        <h1 className="text-4xl font-bold">
          {name}
        </h1>
      </div>
      <div className="absolute top-4 right-4 text-white">
        <h1 className="text-4xl font-bold">
          {currentSlide + 1}/{ImageSlides.length}
        </h1>
      </div>
      <div className="absolute w-1/5 rounded bottom-4 left-4 bg-white bg-opacity-20 p-4 backdrop-blur-md">
        <p className="text-lg">
          {quote}
        </p>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm">
            {location}
          </p>
          {inText
            ? <a
                href={`#${inText}`}
                className="hover:text-cyan-600 hover:tracking-wide duration-150"
              >
                View
              </a>
            : null}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 text-white">
        <button onClick={() => setPlay(!play)}>
          <Image
            src={play ? "/pause.svg" : "/play.svg"}
            alt={play ? "pause" : "play"}
            width={30}
            height={30}
          />
        </button>
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={goToPreviousSlide}
      >
        <Image src="/left-chevron.svg" alt="left" width={50} height={50} />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={goToNextSlide}
      >
        <Image src="/right-chevron.svg" alt="right" width={50} height={50} />
      </button>
    </div>
  );
};

export default Slides;
