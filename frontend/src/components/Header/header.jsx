// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import image1 from '../../assets/l1.webp';
import image2 from '../../assets/l2.webp';
import image3 from '../../assets/l3.webp';
import image4 from '../../assets/l4.webp';

const images = [image1, image2, image3, image4];

const Header = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000); // Change image every 4 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[200px] md:h-[400px] overflow-hidden rounded-3xl mt-6">
            {/* Map through images to show only the current one with opacity transitions */}
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt="Adventure"
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* Text overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <p className="text-white text-2xl md:text-3xl font-bold text-center">
                    Being a lawyer is not merely a vocation. It is a public trust, and each of us has an obligation to give back to our communities.
                </p>
            </div>
            
        </div>
    );
};

export default Header;