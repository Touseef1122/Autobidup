import React, { useState, useEffect } from "react";

export default function ViewComponent() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    // Load the images on component mount
    useEffect(() => {
        const fileNames = [];

        for (let i = 1; i <= 36; i++) {
            const fileName = `car-${i}.png`;
            fileNames.push(fileName);
        }

        const images = fileNames.map((imageName) =>
            require(` ../../../Assets/Car-Images/${imageName}`)
        );

        setImages(images);
    }, []);

    // Set the interval to change the image
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 200);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <>
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
        </>
    );
}
