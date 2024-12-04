export const BgGradients = () => {
  return (
    <div className="pointer-events-none absolute left-0 top-0 z-40 h-dvh w-screen">
      <div
        style={{
          transform: "translateY(-350px) rotate(-45deg)",
          width: 560,
          height: 1380,
          background:
            "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(179, 217, 255, 0.08) 0px, rgba(26, 140, 255, 0.02) 50%, rgba(0, 115, 230, 0) 80%)",
        }}
        className="absolute left-0 top-0"
      />
      <div
        style={{
          transform: "rotate(-45deg) translate(5%, -50%)",
          transformOrigin: "left top 0px",
          width: 240,
          height: 1380,
          background:
            "radial-gradient(50% 50%, rgba(179, 217, 255, 0.06) 0px, rgba(26, 140, 255, 0.02) 80%, transparent 100%)",
        }}
        className="absolute left-0 top-0"
      />
      <div
        style={{
          position: "absolute",
          borderRadius: 20,
          transform: "rotate(-45deg) translate(-180%, -70%)",
          transformOrigin: "left top 0px",
          top: 0,
          left: 0,
          width: 240,
          height: 1380,
          background:
            "radial-gradient(50% 50%, rgba(179, 217, 255, 0.04) 0px, rgba(0, 115, 230, 0.02) 80%, transparent 100%)",
        }}
        className="absolute left-0 top-0"
      />
    </div>
  );
};
