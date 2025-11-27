export const Crosshair = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {/* Center dot */}
      <div
        style={{
          width: "4px",
          height: "4px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "50%",
          boxShadow: "0 0 2px rgba(0, 0, 0, 0.8)",
        }}
      />
    </div>
  );
};
