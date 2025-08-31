import React, { useState } from "react";
import "./ProductCarousel.css";

import hero from "../assets/hero.png";
import heroImage from "../assets/heroImages.png";

const slides = [
    {
        img: hero,
        alt: "Manuka Honey UMF 24+",
    }
];

export default function ProductCarousel() {
    const [index, setIndex] = useState(0);

    const moveSlide = (direction) => {
        let newIndex;
        if (direction === "prev") {
            newIndex = index === 0 ? slides.length - 1 : index - 1;
        } else {
            newIndex = (index + 1) % slides.length;
        }
        setIndex(newIndex);
    };

    return (
        <div>
            <div className="carousel">
                <div className="carousel-img-container">
                    <img src={slides[index].img} alt={slides[index].alt} />
                    <button
                        className="carousel-arrow left"
                        onClick={() => moveSlide("prev")}
                    >
                        &#10094;
                    </button>
                    <button
                        className="carousel-arrow right"
                        onClick={() => moveSlide("next")}
                    >
                        &#10095;
                    </button>
                </div>
                <div className="carousel-thumbs">
                    {slides.map((slide, i) => (
                        <img
                            key={i}
                            src={slide.img}
                            alt=""
                            className={i === index ? "active" : ""}
                            onClick={() => setIndex(i)}
                        />
                    ))}
                </div>
            </div>
            {/* Add heroImage below the carousel */}
            <div className="carousel-below-image">
                <img
                    src={heroImage}
                    alt="Manuka Honey Hero"
                    style={{ maxWidth: "100%", height: "auto", marginTop: "18px" }}
                />
            </div>
        </div>
    );
}