import { useEffect, useState } from "react";
import "./slider.scss";

export default function Slider() {
  const imagens = [
    "https://cdn.discordapp.com/attachments/1376271575581458573/1459648660722679918/BEASTARS-anime-jpg.png?ex=69640b3f&is=6962b9bf&hm=fb1a7af5ba5e339a2a5f12ce940b6a8f663a75228bd70b3ab0b1738d12284fda&",
    "https://cdn.discordapp.com/attachments/1376271575581458573/1459648952507957389/Beastars-scaled.png?ex=69640b85&is=6962ba05&hm=3c67242a0cc5af6e85bdb0f8f3c517920bf08d6645b025d1179aa0bf7ea66a15&",
    "https://cdn.discordapp.com/attachments/1376271575581458573/1459651212512067594/02-22.png?ex=69640da0&is=6962bc20&hm=9fe8f955977a9767847565229cbefb006210326ec00678865a0fbf8ff5cb4aef&",
    "https://media.discordapp.net/attachments/1376271575581458573/1459651395358556444/beastars-lobo-bom_netflix_estreia_2020_banner.png?ex=69640dcb&is=6962bc4b&hm=b9ef177585fc64f986165478c1ab3713c05adf1c14516cce2c44012c1ad3b698&=&format=webp&quality=lossless"

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={imagens[index]} alt="slider" />
    </div>
  );
}
