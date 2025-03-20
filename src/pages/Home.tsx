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
          background: "linear-gradient(90deg, #55AF7B, #4286F3, #FAC230, #EB4537)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease",
        }}
      >
        Define your own traffic tool
      </h1>
      {/* 页面底部的<p className="text-lg mt-4 text-gray-400 z-10">Define your own traffic tool</p>副标题文本，用于补充说明主标题内容 */}
      
    </div>
  );
};

export default Home;