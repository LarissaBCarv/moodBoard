import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tristeza = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const imagens = [
    "/img/feliz1.jpg",
    "/img/feliz2.jpg",
    "/img/feliz3.jpg",
    "/img/feliz4.jpg",
    "/img/feliz5.jpg",
    "/img/feliz6.jpg",
  ];
  const [indexAtual, setIndexAtual] = useState(0);

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
      {/* 🔊 Vídeo de fundo */}
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
    </div>
  );
};

export default Tristeza;
