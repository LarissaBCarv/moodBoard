import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Inspirado = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/inspirado (1).jpg",
    "/img/inspirado (2).jpg",
    "/img/inspirado (3).jpg",
    "/img/inspirado (4).jpg",
    "/img/inspirado (5).jpg",
    "/img/inspirado (6).jpg",
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
    "Tudo muda quando você decide não desistir.",
    "Vai com medo, mas vai. Parada não se constrói história.",
    "A força que você precisa já tá em você.",
    "Recomeçar também é um tipo de coragem.",
    "Não é sobre ser forte o tempo todo. É sobre continuar, mesmo cansada.",
    "O mundo tenta te silenciar, mas sua existência já é grito.",
    "Entre tropeços e vitórias, você ainda é poesia em construção.",
    "Que nunca te falte fé pra recomeçar e coragem pra se reinventar.",
    "Cada passo é um protesto contra tudo que já tentou te parar.",
    "Você é a versão que ontem parecia impossível.",
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
        <source src="/Inspirado.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          top: "70px",
          right: "20px",
          width: "350px",
          height: "250px",
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
          src="https://www.youtube.com/embed/videoseries?si=9gHO8J4zv9rk-2jx&amp;list=PLZWYsTB9THkWthiHCEGKiQheU8e8EJ1Yc"
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
          top: "20px",
          left: "60px",
          fontSize: "35px",
          color: "white",
          fontFamily: "Lugrasimo, cursive",
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          maxWidth: "320px",
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
          bottom: "05px",
          right: "40px",
          width: "300px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EIeMOnMimNdXO?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Upload de imagens */}
      <label
        htmlFor="upload-input"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50px",
          zIndex: 2,
          background: "#1A4768",
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
        onMouseOver={(e) => (e.currentTarget.style.background = "#CDD9A9")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#1A4768")}
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

      {/* Carrossel de imagens */}
      <div
        onClick={() => setIndexAtual((prev) => (prev + 1) % imagens.length)}
        style={{
          position: "absolute",
          bottom: "50px",
          left: "200px",
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

export default Inspirado;
