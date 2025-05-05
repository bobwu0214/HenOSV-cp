import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-black bg-opacity-90 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link to="/" className="text-2xl font-bold hover:text-gray-400 text-[#4286F3]">He<sup className="text-sm text-white">n</sup>OSV</Link>
        <div className="space-x-6 flex justify-end">
          <Link to="/" className="hover:text-gray-400 text-[#4286F3]">首页</Link>
          <Link to="/modeling" className="hover:text-gray-400 text-[#4286F3]">参数化建模</Link>
          <Link to="/kit" className="hover:text-gray-400 text-[#4286F3]">教育小车套件</Link>
          <Link to="/henosv" className="hover:text-gray-400 text-[#4286F3]">滑板底盘</Link>
          <Link to="/simulator" className="hover:text-gray-400 text-[#4286F3]">交通工具模拟器</Link>
          <Link to="/simulatorlab" className="hover:text-gray-400 text-[#4286F3]">仿真套件</Link>
          <Link to="/guide" className="hover:text-gray-400 text-[#4286F3]">2050-无限竞速</Link>
          <Link to="/docs" className="hover:text-gray-400 text-[#4286F3]">文档</Link>
          <Link to="https://profabx.com/prototype/" className="hover:text-gray-400 text-[#4286F3]">数字加工</Link>
          {/* <Link to="https://ataraxia-msj.github.io/jishiqi/" className="hover:text-gray-400 text-[#4286F3]">比赛计时</Link> */}
          <a href="https://ataraxia-msj.github.io/jishiqi/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 text-[#4286F3]">比赛计时</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
