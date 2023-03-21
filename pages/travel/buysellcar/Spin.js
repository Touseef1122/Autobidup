import React, { useState, useEffect } from "react";

import car1 from "../../../../src/Assets/Car-Images/car-1.png";
import car2 from "../../../../src/Assets/Car-Images/car-2.png";

// Import the rest of the car images here

export default function ViewComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [car1, car2]; // Add the rest of the car images here

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 200);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className={"animate-card"}>
      <img
        key={currentImageIndex}
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex}`}
        style={{
          opacity: currentImageIndex === 0 ? 1 : 0,
        }}
      />
      <img
        key={currentImageIndex + 1}
        src={images[(currentImageIndex + 1) % images.length]}
        alt={`Image ${(currentImageIndex + 1) % images.length}`}
        style={{
          opacity: currentImageIndex === 0 ? 0 : 1,
        }}
      />
    </div>
  );
}
