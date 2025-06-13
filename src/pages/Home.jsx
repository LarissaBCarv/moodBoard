import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

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
          fontSize: "clamp(1.5rem, 6vw, 3rem)",
          textAlign: "center",
          color: "white",
          margin: "0 1rem 1.5rem",
          zIndex: 1,
        }}
      >
        Qual é o seu mood hoje?
      </h1>

      <button
        onClick={() => navigate("/mood")}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "1rem 2.5rem",
          fontSize: "clamp(1rem, 4vw, 1.2rem)",
          borderRadius: "999px",
          border: "2px solid white",
          backgroundColor: hover ? "white" : "transparent",
          color: hover ? "#000" : "#fff",
          cursor: "pointer",
          transition: "all 0.3s ease",
          backdropFilter: "blur(8px)",
          zIndex: 1,
        }}
      >
        {hover ? "Vamos começar!" : "Escolher meu mood"}
      </button>
    </div>
  );
};

export default Home;
