import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Medo = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/medo (1).jpg",
    "/img/medo (2).jpg",
    "/img/medo (3).jpg",
    "/img/medo (4).jpg",
    "/img/medo (5).jpg",
    "/img/medo (6).jpg",
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
    "O medo não grita, ele sussurra dúvidas na minha cabeça.",
    "Às vezes, o que mais assusta é o que mais importa.",
    "Meu maior medo? Ser eu mesma e não bastar.",
    "O medo me paralisa, mas também me prepara.",
    "Tenho medo de confiar e quebrar de novo.",
    "Medo não se vê, mas se sente em cada escolha.",
    "O medo vem baixinho, tipo sussurro de algo que não tem boca.",
    "Tem noite que o escuro parece olhar de volta.",
    "Tem medo que vem da infância e nunca vai embora.",
    "O corpo treme antes da mente entender o que viu.",
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
        <source src="/Medo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          bottom: "50px",
          right: "35%",
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
          src="https://www.youtube.com/embed/videoseries?si=SwVRJAo0oPs05OL4&amp;list=PLa9lwyamPaJOAZCDDZGQvF75zg6QU1Wox"
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
          top: "30px",
          left: "250px",
          fontSize: "35px",
          color: "white",
          fontFamily: "Creepster, system-ui",
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
          top: "40px",
          left: "45%",
          width: "300px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/3nSKcSSzEMw7TyqxejMIjZ?utm_source=generator"
          width="100%"
          height="170"
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
          left: "300px",
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
          bottom: "90px",
          left: "300px",
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

export default Medo;
