// components/SpotifyPlayerVisual.jsx
const SpotifyPlayerVisual = ({ image, link, label = "Ouça no Spotify" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "10px 14px",
        borderRadius: "12px",
        textDecoration: "none",
        color: "#1DB954",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "14px",
        zIndex: 2,
        backdropFilter: "blur(4px)",
      }}
    >
      <img
        src={image}
        alt="Capa Spotify"
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "8px",
          marginRight: "10px",
        }}
      />
      {label}
    </a>
  );
};

export default SpotifyPlayerVisual;
