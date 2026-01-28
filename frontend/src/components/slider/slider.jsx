import { useState, useEffect } from "react";
import "./slider.scss";

import slide1 from "../../assets/Beastars-segunda-imagem.webp";
import slide2 from "../../assets/AAAABW2tNCl7vdZFVw3Yp6fCH-j-Jh3h27R5VROi2EHMwWfMRcJC-8hCkArXGlzWiHIDzYUbUOVSgcSJF_XeUNCOVC8ybplNiNjY-D9L.jpg";
import slide3 from "../../assets/Beastar-terceira-imagem.webp";


const slides = [slide1, slide2, slide3];

export default function Slider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <img src={slides[index]} alt="slide" />
    </div>
  );
}
