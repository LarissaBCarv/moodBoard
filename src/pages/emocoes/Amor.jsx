import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Amor = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/amor (1).jpg",
    "/img/amor (2).jpg",
    "/img/amor (3).jpg",
    "/img/amor (4).jpg",
    "/img/amor (5).jpg",
    "/img/amor (6).jpg",
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
    "Amor não se mede, se vive — inteiro, na loucura e na calmaria.",
    "O amor não precisa ser perfeito, só precisa ser verdadeiro.",
    "Amar é fazer do outro o seu lugar seguro, mesmo quando o mundo desaba.",
    "O amor que vale a pena é aquele que te cresce, não te diminui.",
    "Amar é deixar o outro ser inteiro, sem tentar consertar o que não tá quebrado.",
    "No fundo, todo mundo quer um amor que faça sentido até na bagunça da vida.",
    "Amor de verdade é resistência contra o tempo e contra o que querem fazer a ele.",
    "Amar é a arte de se perder e se encontrar no olhar do outro.",
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
          top: "150px",
          right: "370px",
          zIndex: 2,
          background: "#8D0317",
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
        onMouseOver={(e) => (e.currentTarget.style.background = "#d94f63")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#8D0317")}
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
        <source src="/Amor.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/*  YouTube Player */}
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
          src="https://www.youtube.com/embed/videoseries?si=SPTfvK2wHeNOndPa&amp;list=PLvjSuzwje74WIpUxBtgWLHp8GR9VX3VrP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Frases */}
      <div
        style={{
          position: "absolute",
          top: "220px",
          left: "300px",
          fontSize: "30px",
          color: "black",
          fontFamily: "Gluten, cursive",
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
          bottom: "190px",
          right: "250px",
          width: "350px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3J5toT8HI72?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Carrossel de imagens */}
      <div
        onClick={() => setIndexAtual((prev) => (prev + 1) % imagens.length)}
        style={{
          position: "absolute",
          top: "40px",
          right: "600px",
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

export default Amor;
