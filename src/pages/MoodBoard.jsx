import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // <- IMPORTANTE
import "@fontsource/source-serif-pro";

const buttonsData = [
  {
    name: "Felicidade",
    path: "/Felicidade",
    borderColor: "#ebbd00",
    bgColor: "#ffd93d",
    textColor: "white",
  },
  {
    name: "Tristeza",
    path: "/Tristeza",
    borderColor: "#2c4c7c",
    bgColor: "#4a6fa5",
    textColor: "white",
  },
  {
    name: "Amor",
    path: "/Amor",
    borderColor: "#bc4949",
    bgColor: "#f76c6c",
    textColor: "white",
  },
  {
    name: "Raiva",
    path: "/Raiva",
    borderColor: "#951728",
    bgColor: "#d7263d",
    textColor: "white",
  },
  {
    name: "Surpresa",
    path: "/Surpresa",
    borderColor: "#bc542f",
    bgColor: "#ff6f3c",
    textColor: "white",
  },
  {
    name: "Medo",
    path: "/medo",
    borderColor: "#2e2e2e",
    bgColor: "#514646",
    textColor: "white",
  },
  {
    name: "Inspirado",
    path: "/inspirado",
    borderColor: "#35613d",
    bgColor: "#4f8e5a",
    textColor: "white",
  },
  {
    name: "Ansiedade",
    path: "/ansiedade",
    borderColor: "#3e3751",
    bgColor: "#5c5470",
    textColor: "white",
  },
  {
    name: "Calma",
    path: "/calma",
    borderColor: "#7bb29e",
    bgColor: "#a8e6cf",
    textColor: "white",
  },
];

const MoodBoard = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Pegando o nome que veio da tela anterior
  const userName = location.state?.userName || "amigo(a)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/MoodBoardfundo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: "5rem",
          minHeight: "100vh",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: '"Skillet Condensed", sans-serif',
            fontSize: "80px",
            textAlign: "center",
            color: "#5c5470",
            margin: "0 1rem 2rem",
            zIndex: 2,
          }}
        >
          Oi, {userName} <br /> Qual o seu mood de hoje?
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            maxWidth: "960px",
            width: "100%",
            margin: "0 auto",
            padding: "0 1rem",
            zIndex: 2,
          }}
        >
          {buttonsData.map(
            ({ name, path, borderColor, bgColor, textColor }) => {
              const isHovered = hoveredButton === name;
              return (
                <button
                  key={name}
                  onClick={() => navigate(path)} // <- Continua funcionando normalmente
                  onMouseEnter={() => setHoveredButton(name)}
                  onMouseLeave={() => setHoveredButton(null)}
                  style={{
                    height: "90px",
                    width: "300px",
                    fontSize: "30px",
                    borderRadius: "999px",
                    border: `3px solid ${borderColor}`,
                    backgroundColor: isHovered ? "#cbaaf7" : bgColor,
                    color: isHovered ? "#027361" : textColor,
                    cursor: "pointer",
                    fontFamily: '"Skillet Condensed", sans-serif',
                    transition: "all 0.3s ease",
                    boxShadow: isHovered
                      ? "0 4px 10px rgba(0,0,0,0.2)"
                      : "none",
                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                    marginTop: "15px",
                  }}
                >
                  {name}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodBoard;
