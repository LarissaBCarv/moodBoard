import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tristeza = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/triste (1).jpg",
    "/img/triste (2).jpg",
    "/img/triste (3).jpg",
    "/img/triste (4).jpg",
    "/img/triste (5).jpg",
    "/img/triste (6).jpg",
  ];
  const [imagens, setImagens] = useState(imagensBase);
  const [indexAtual, setIndexAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndexAtual((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, [imagens]);

  // Função para lidar com upload de imagens
  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    const novasImagens = files.map((file) => URL.createObjectURL(file));
    setImagens((prev) => [...prev, ...novasImagens]);
  };

  const frases = [
    "É melhor estar triste com amor, do que alegre sem ele.",
    "A alma resiste muito mais facilmente às mais vivas dores do que à tristeza prolongada.",
    "A vida não é triste. Tem horas tristes.",
    "Nas asas do tempo, a tristeza voa.",
    "A melancolia é a felicidade de se ser triste.",
    "As horas mais tristes da vida são aquelas em que duvidamos de nós próprios.",
    "A tristeza pura é tão impossível como a alegria pura.",
    "Todas as grandes esperanças são seguidas de tristeza.",
    "A tristeza também provoca doenças.",
    "Triste é o homem que só ama as coisas quando as perde.",
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
      {/* nput para upload de imagens */}
      <label
        htmlFor="upload-input"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          zIndex: 2,
          background: "#6e3e85",
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
        onMouseOver={(e) => (e.currentTarget.style.background = "#3f234c")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#6e3e85")}
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
        <source src="/Tristeza.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          top: "130px",
          right: "200px",
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
          src="https://www.youtube.com/embed/videoseries?si=wy32SxuaHVk15fG2&amp;list=PLnO1iIBciMKfDNpg6_otfUXIYeE7qeGrH"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      {/* Frases */}
      <div
        style={{
          position: "absolute",
          top: "408px",
          right: "380px",
          fontSize: "35px",
          color: "white",
          fontFamily: '"Bahiana", sans-serif',
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          maxWidth: "290px",
          cursor: "pointer",
        }}
        onClick={() => setIndiceFrase((prev) => (prev + 1) % frases.length)} // clique para avançar
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
          top: "190px",
          left: "450px",
          width: "280px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/4vbRpNnWhPpGW8NMAmnQ5Y?utm_source=generator"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Carrossel rotacionado */}
      <div
        onClick={() => setIndexAtual((prev) => (prev + 1) % imagens.length)}
        style={{
          position: "absolute",
          bottom: "70px",
          left: "150px",
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

export default Tristeza;
