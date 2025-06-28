import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Calma = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/calma (1).jpg",
    "/img/calma (2).jpg",
    "/img/calma (3).jpg",
    "/img/calma (4).jpg",
    "/img/calma (5).jpg",
    "/img/calma (6).jpg",
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
    "A calma não é ausência de barulho, é presença de serenidade no meio do caos.",
    "Se a alma respira, o corpo agradece. E isso começa com um pouco de calma.",
    "Tem dias que a maior revolução é ficar em paz.",
    "A pressa grita. A calma sussurra o caminho.",
    "Entre o impulso e a resposta, mora a calma — e ali vive a sabedoria.",
    "Nada floresce no grito. Até o sol nasce devagar.",
    "Ser calmo não é ser lento. É ser profundo.",
    "A calma é como um rio que ensina a contornar pedras sem perder o rumo.",
    "A serenidade é uma coragem silenciosa.",
    "Respira fundo. A calma vem depois do suspiro.",
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
        <source src="/Calma.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "310px",
          width: "300px",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          transform: "rotate(5deg)",
          zIndex: 1,
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?si=ywkMZg22k_pVsv6M&amp;list=PLDUAx1zZF7lsggPTGTLY4WoOM4O2dZHJM"
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
          top: "320px",
          right: "70px",
          fontSize: "30px",
          color: "#587F8F",
          fontFamily: "Creepster, system-ui",
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          maxWidth: "230px",
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
          bottom: "10px",
          left: "520px",
          width: "300px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1EVHGWrwldPRtj?utm_source=generator&theme=0"
          width="100%"
          height="152"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Upload de imagens */}
      <label
        htmlFor="upload-input"
        style={{
          position: "absolute",
          bottom: "150px",
          left: "50px",
          zIndex: 2,
          background: "#172D35",
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
        onMouseOver={(e) => (e.currentTarget.style.background = "#56535A")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#172D35")}
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
          bottom: "200px",
          left: "20px",
          width: "250px",
          height: "220px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          zIndex: 1,
          cursor: "pointer",
          transform: "rotate(-5deg)",
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

export default Calma;
