import React, { useState } from "react";

const FestivalCarousel = ({ config }) => {
  const [index, setIndex] = useState(0);
  const slides = config.slides;

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        {config.festival} Specials - {config.state}
      </h2>
      <div className="relative rounded-xl overflow-hidden shadow-lg">
        <img
          src={slides[index].imageUrl}
          alt={slides[index].title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 bg-black bg-opacity-60 w-full p-4 text-white">
          <h3 className="text-xl font-semibold">{slides[index].title}</h3>
          <p>{slides[index].description}</p>
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 px-2 py-1 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default FestivalCarousel;
