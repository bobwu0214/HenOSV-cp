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
    <div className="w-full min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 w-full flex flex-col items-center justify-center">
        {/* 标题部分 */}
        <div className="w-full text-center mt-[200px]">
          <h1 className="text-6xl font-bold">
            <span className="text-green-500">Define</span>{" "}
            <span className="text-blue-500">your</span>{" "}
            <span className="text-gray-300">own</span>{" "}
            <span className="text-yellow-500">traffic</span>
          </h1>
        </div>
        <div className="flex gap-4 mt-8 z-10 justify-center">
          <Link
            to="/modeling"
            className="px-8 py-3 rounded-lg text-xl font-semibold text-white border border-white hover:border-green-400 transform hover:scale-105 transition-all duration-300 inline-block"
            style={{ fontSize: 'calc(1.3 * 1.125rem)' }}
          >
            开启
          </Link>
          <Link
            to="/docs"
            className="px-8 py-3 rounded-lg text-xl font-semibold text-white border border-white hover:border-yellow-400 transform hover:scale-105 transition-all duration-300 inline-block"
            style={{ fontSize: 'calc(1.3 * 1.125rem)' }}
          >
            更多
          </Link>
        </div>
        {/* 页面底部的<p className="text-lg mt-4 text-gray-400 z-10">Define your own traffic tool</p>副标题文本，用于补充说明主标题内容 */}
        
      </div>
    </div>
  );
};

export default Home;