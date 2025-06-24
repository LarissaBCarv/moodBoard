import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const [name, setName] = useState(""); // state para nome

  const handleStart = () => {
    if (name.trim() === "") {
      alert("Por favor, insira seu nome para continuar.");
      return;
    }
    navigate("/mood", { state: { userName: name } });
  };

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
        <source src="/MoodBoard.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <h1
        style={{
          fontFamily: '"Skillet Condensed", sans-serif',
          fontSize: "160px",
          textAlign: "center",
          color: "#027361",
          margin: "0 1rem 0",
          zIndex: 1,
          textShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        MoodBoard
      </h1>
      <h2
        style={{
          fontFamily: "'Source Serif Pro', serif",
          fontSize: "60px",
          textAlign: "center",
          color: "#8b61c2",
          margin: "0 1rem 1.5rem 1rem",
          marginTop: "-0.5rem",
          zIndex: 1,
        }}
      >
        Sinta, escolha e inspire
      </h2>

      {/* Input para o nome */}
      <input
        type="text"
        placeholder="Digite seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          fontFamily: '"Skillet Condensed", sans-serif',
          fontSize: "1.2rem",
          padding: "0.8rem 1.2rem",
          borderRadius: "999px",
          border: "3px dotted #8b61c2",
          marginBottom: "1rem",
          width: "250px",
          textAlign: "center",
          outline: "none",
          zIndex: 1,
          backgroundColor: "rgba(255,255,255,0.8)",
          color: "#027361",
        }}
      />

      <button
        onClick={handleStart}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          fontFamily: '"Skillet Condensed", sans-serif',
          padding: "1rem 2.5rem",
          fontSize: "clamp(1rem, 4vw, 1.2rem)",
          borderRadius: "999px",
          border: "3px dotted #8b61c2",
          backgroundColor: hover ? "#cbaaf7" : "#cbaaf7",
          color: hover ? "#027361" : "#027361",
          cursor: "pointer",
          transition: "all 0.3s ease",
          backdropFilter: "blur(8px)",
          zIndex: 1,
          boxShadow: hover ? "0 4px 10px rgba(0,0,0,0.2)" : "none",
          transform: hover ? "scale(1.05)" : "scale(1)",
        }}
      >
        {hover ? "Vamos começar" : "Escolha seu mood"}
      </button>
    </div>
  );
};

export default Home;
