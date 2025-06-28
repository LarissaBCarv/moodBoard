import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Raiva = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/raiva (1).jpg",
    "/img/raiva (2).jpg",
    "/img/raiva (3).jpg",
    "/img/raiva (4).jpg",
    "/img/raiva (5).jpg",
    "/img/raiva (6).jpg",
  ];
  const [imagens, setImagens] = useState(imagensBase);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagens]);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const novasImagens = files.map((file) => URL.createObjectURL(file));
    setImagens((prev) => [...prev, ...novasImagens]);
  };

  const frases = [
    "Raiva é o grito da alma que ninguém ouviu.",
    "Engulo minha fúria pra não engasgar o mundo.",
    "Ser calma demais me ensinou a explodir.",
    "Tem silêncio que grita mais que qualquer soco.",
    "Minha paciência morre devagar, mas quando morre… vira caos.",
    "A raiva me ensinou a impor limites que o amor não soube.",
    "Tem coisas que não doem mais, só irritam.",
    "Raiva também é defesa — nem todo grito é ataque.",
    "Não é drama, é sobre carregar tudo sozinha por tempo demais.",
    "A raiva vem quando o coração cansa de apanhar calado.",
  ];

  const [indiceFrase, setIndiceFrase] = useState(0);

  useEffect(() => {
    const intervaloFrase = setInterval(() => {
      setIndiceFrase((prev) => (prev + 1) % frases.length);
    }, 4000);

    return () => clearInterval(intervaloFrase);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 0,
      }}
    >
      {/* Upload de imagens */}
      <label
        htmlFor="upload-input"
        style={{
          position: "absolute",
          top: "450px",
          left: "40px",
          zIndex: 2,
          background: "#FE2102",
          color: "white",
          padding: "10px 16px",
          borderRadius: "12px",
          fontFamily: "'Source Serif Pro', serif",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          border: "2px solid black",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#FECD00")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#FE2102")}
      >
        <input
          id="upload-input"
          type="file"
          accept="image/*"
          multiple
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        📷 Adicionar Imagem
      </label>

      {/* Vídeo de fundo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/Raiva.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "450px",
          width: "300px",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          transform: "rotate(8deg)",
          zIndex: 1,
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?si=0RilX6PUaU8EiBSS&amp;list=PLKpa-eeCoK3TIqL6hk-wPXssawa515GEi"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Frases de amor */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "40px",
          fontSize: "30px",
          color: "black",
          fontFamily: "Rubik Glitch, system-ui",
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          maxWidth: "290px",
          cursor: "pointer",
        }}
        onClick={() => setIndiceFrase((prev) => (prev + 1) % frases.length)}
        title="Clique para próxima frase"
      >
        {frases[indiceFrase].split("<br>").map((line, i) => (
          <p key={i} style={{ margin: "0 0 0.5em 0" }}>
            {line}
          </p>
        ))}
      </div>

      {/* Spotify Player */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "42%",
          width: "350px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }} // ✅ style como objeto
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EIhuCNl2WSFYd?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0" // ✅ camelCase
          allowFullScreen // ✅ boolean camelCase
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {/* Carrossel de imagens */}
      <div
        onClick={() => setIndexAtual((prev) => (prev + 1) % imagens.length)}
        style={{
          position: "absolute",
          top: "250px",
          left: "20px",
          width: "250px",
          height: "220px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          transform: "rotate(-10deg)",
          zIndex: 1,
          cursor: "pointer",
        }}
        title="Clique para trocar a imagem"
      >
        <img
          src={imagens[indexAtual]}
          alt="Imagem carrossel"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

export default Raiva;
