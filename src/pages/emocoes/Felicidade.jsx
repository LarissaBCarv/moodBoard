import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Felicidade = () => {
  const navigate = useNavigate();
  const imagensBase = [
    "/img/feliz1.jpg",
    "/img/feliz2.jpg",
    "/img/feliz3.jpg",
    "/img/feliz4.jpg",
    "/img/feliz5.jpg",
    "/img/feliz6.jpg",
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
    "Seja gentil sempre que possível. E é sempre possível.",
    "Ser feliz é deixar de ser vítima dos problemas e se tornar autor da própria história.",
    "A felicidade não é algo pronto. Ela vem das suas próprias ações.",
    "A alegria está na luta, no esforço, no sofrimento envolvido.",
    "Ser feliz sem motivo é a mais autêntica forma de felicidade",
    "Não existe um caminho para a felicidade. A felicidade é o caminho.",
    "Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.",
    "A alegria de fazer o bem é a única felicidade verdadeira.",
    "Na plenitude da felicidade, cada dia é uma vida inteira.",
    "Felicidade é a certeza de que a nossa vida não está se passando inutilmente.",
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
      {/* Input para upload de imagens */}
      <label
        htmlFor="upload-input"
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          zIndex: 2,
          background: "##2da7b0",
          color: "white",
          padding: "10px 16px",
          borderRadius: "12px",
          fontFamily: "'Source Serif Pro', serif",
          fontSize: "16px",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          border: "2px solid white",
          transition: "background 0.3s ease",
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = "#25848b")}
        onMouseOut={(e) => (e.currentTarget.style.background = "#2da7b0")}
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
        <source src="/Felicidade2.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      {/* YouTube Player */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "200px",
          width: "320px",
          height: "200px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
          transform: "rotate(-8deg)",
          zIndex: 1,
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/videoseries?si=AbUm6cbI_pXsyWke&list=PLzJBqmiwm2cQOxVsqN_NCEc71Sv1vUNZv"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      {/* Título */}
      <h1
        style={{
          fontFamily: "DynaPuff, system-ui, sans-serif",
          fontSize: "160px",
          textAlign: "center",
          color: "#8cf7ff",
          margin: "0 1rem 0",
          zIndex: 1,
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        Luz e Leveza
      </h1>

      {/* Frases */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          right: "42px",
          fontSize: "30px",
          color: "white",
          fontFamily: "Luckiest Guy",
          zIndex: 1,
          textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
          maxWidth: "500px",
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
          bottom: "-40px",
          left: "20px",
          width: "200px",
          zIndex: 1,
          opacity: 0.85,
        }}
      >
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUIDYTCle9M9?utm_source=generator&theme=0"
          width="350"
          height="250"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>

      {/* Carrossel rotacionado */}
      <div
        onClick={() => setIndexAtual((prev) => (prev + 1) % imagens.length)}
        style={{
          position: "absolute",
          bottom: "30px",
          right: "250px",
          width: "250px",
          height: "220px",
          overflow: "hidden",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
          transform: "rotate(10deg)",
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

export default Felicidade;
