import Slider from "../slider/slider";
import "./home.scss";

export default function Home() {
    return(
        <div className="home">

           <section className="blocos">
  <div className="bloco">
    <img src="/img/img1.jpg" />
    <p>texto aqui</p>
  </div>

  <div className="bloco">
    <img src="/img/img2.jpg" />
    <p>texto aqui</p>
  </div>

  <div className="bloco">
    <img src="/img/img3.jpg" />
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