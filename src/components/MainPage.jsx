import React, { useState, useEffect } from 'react';
const MainPage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      'https://i.ytimg.com/vi/hvtNBXemTWs/maxresdefault.jpg',
      'https://i.ytimg.com/vi/UVDrv5Tldbc/maxresdefault.jpg',
      'https://i.pinimg.com/originals/46/04/e0/4604e04f42fc8ec09e28bd1923051638.jpg'
    ];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval); 
    }, [currentIndex, images.length]);
    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
    const prevSlide = () => {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    return (
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          ))}
        </div>
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors"
        >
          &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors"
        >
          &#9654;
        </button>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              }`}
            ></button>
          ))}
        </div>
      </div>
    );
  };

export default MainPage;
