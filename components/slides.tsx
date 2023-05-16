import ImageSlides from "@data/ImageSlides";
import { useState, useEffect } from "react";
import Image from "next/image";

//TODO instead of Image, set background
const Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prevSlide => (prevSlide + 1) % ImageSlides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

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

  const { name, quote, location, image } = ImageSlides[currentSlide];

  return (
    <div className="relative h-screen">
<Image
    src={image}
    alt={name}
    width={1920}
    height={1080}
    quality={100}
    className="object-contain h-screen w-screen"
/>
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
      <div className="absolute w-1/5 rounded bottom-4 left-4 bg-white bg-opacity-50 p-4">
        <p className="text-lg">
          {quote}
        </p>
        <p className="text-sm">
          {location}
        </p>
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={goToPreviousSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white font-bold text-2xl"
        onClick={goToNextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Slides;
