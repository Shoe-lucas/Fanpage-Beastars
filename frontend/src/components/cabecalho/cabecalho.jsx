import "./cabecalho.scss";

export default function cabecalho(){
    return(
        <header className="header">
        <h1>Fanpage Beastars</h1>

        <div className="logo-img">
            <img src="https://media.discordapp.net/attachments/1448780166066081946/1458225006709309542/2tXPyUAAAAGSURBVAMA6lzdTVS6f4AAAAASUVORK5CYII.png?ex=6960d79e&is=695f861e&hm=c5a650910d9d05792ba966ab65001982ebf45ab0fc36187c7788f2abaddb5a3e&=&format=webp&quality=lossless" className="base" />
            <img src="https://media.discordapp.net/attachments/1448780166066081946/1458225143703670836/8AAAABklEQVQDALP96ypiiIloAAAAAElFTkSuQmCC.png?ex=6960d7be&is=695f863e&hm=8aacba98f7a7204965f72ad78e53ee119b5a4345b285c3559b6d126d1a1bd115&=&format=webp&quality=lossless" className="hover" />
        </div>

        <div className="right">
            <span className="icone">🔍</span>
            <span className="icone">☰</span>
        </div>
        </header>
    );
}