import {Grid} from '@mui/material';
import {Contactinfo} from "./index";
import React, {useEffect, useState} from "react";


export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [images, setImages] = useState([]);

    useEffect(() => {
        const imageNames = [];
        for (let i = 1; i <= 36; i++) {
            const imageName = `car-${i}.png`;
            imageNames.push(imageName);
        }
        const importedImages = imageNames.map(async (imageName) => {
            const {default: image} = await import(`/public/car-images/${imageName}`);
            return image;
        });

        Promise.all(importedImages).then((images) => setImages(images));
    }, []);

    useEffect(() => {
        console.clear()
        console.log(images)

        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 300);
        return () => clearInterval(interval);
    }, [images]);

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} sm={7}>
                {images && images.length !== 0 &&
                    <div className={"animate-card"}>
                        <img
                            key={currentImageIndex}
                            src={images[currentImageIndex].src}
                            alt={`Image ${currentImageIndex}`}
                            style={{
                                opacity: currentImageIndex === 0 ? 1 : 0,
                            }}
                        />
                        <img
                            key={currentImageIndex + 1}
                            src={images[(currentImageIndex + 1) % images.length].src}
                            alt={`Image ${(currentImageIndex + 1) % images.length}`}
                            style={{
                                opacity: currentImageIndex === 0 ? 0 : 1,
                            }}
                        />
                    </div>
                }
            </Grid>
            <Grid item xs={12} sm={5}>
                <Contactinfo/>
            </Grid>
        </Grid>
    );
}
