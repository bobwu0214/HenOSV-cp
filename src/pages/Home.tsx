import { useState, useEffect } from "react";

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 255, 150, 0.4), transparent 50%)`,
          mixBlendMode: "overlay",
        }}
      />
      <h1
        className="text-8xl font-bold relative z-10"
        style={{
          background: "linear-gradient(90deg, #00ff96, #008cff, #ff007a)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease",
        }}
      >
        HeⁿOSV-test
      </h1>
     
    </div>
  );
};

export default Home;