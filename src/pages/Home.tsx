import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
        className="text-8xl font-bold relative z-10 hover:scale-110 transition-transform duration-300"
        style={{
          background: "linear-gradient(90deg, #55AF7B, #4286F3, #FAC230, #EB4537)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease, transform 0.3s ease",
        }}
      >
        Define your own traffic tool
      </h1>
      <div className="flex gap-4 mt-8 z-10">
        <Link
          to="/modeling"
          className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 inline-block"
        >
          开启
        </Link>
        <Link
          to="/docs"
          className="px-8 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-yellow-500 to-red-500 hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 inline-block"
        >
          更多
        </Link>
      </div>
      {/* 页面底部的<p className="text-lg mt-4 text-gray-400 z-10">Define your own traffic tool</p>副标题文本，用于补充说明主标题内容 */}
      
    </div>
  );
};

export default Home;