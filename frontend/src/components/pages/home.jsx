import img1 from "../../assets/Beastars-segunda-imagem.webp";
import img2 from "../../assets/Beastar-terceira-imagem.webp";
import img3 from "../../assets/AAAABW2tNCl7vdZFVw3Yp6fCH-j-Jh3h27R5VROi2EHMwWfMRcJC-8hCkArXGlzWiHIDzYUbUOVSgcSJF_XeUNCOVC8ybplNiNjY-D9L.jpg";

import Slider from "../slider/slider";
import "./home.scss";

export default function Home() {
    return(
        <div className="home">

           <section className="blocos">
  <div className="bloco">
    <img src={img1} />
    <p>texto aqui</p>
  </div>

  <div className="bloco grande">
    <img src={img2} />
    <p>texto aqui</p>
  </div>

  <div className="bloco">
    <img src={img3} />
    <p>texto aqui</p>
  </div>
</section>

   <Slider />


<section className="texto">
  <p>textão aqui hehehaw</p>
</section>


        </div>
    );
}