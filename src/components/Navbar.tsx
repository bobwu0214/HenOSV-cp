import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-black bg-opacity-90 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        <Link to="/" className="text-2xl font-bold hover:text-gray-400 text-[#4286F3]">He<sup className="text-sm text-white">n</sup>OSV</Link>
        <div className="space-x-6 flex justify-end">
          <Link to="/" className="hover:text-gray-400 text-[#4286F3]">首页</Link>
          <Link to="/modeling" className="hover:text-gray-400 text-[#4286F3]">参数化建模</Link>
          <Link to="/guide" className="hover:text-gray-400 text-[#4286F3]">2050-无限竞速</Link>
          <Link to="/docs" className="hover:text-gray-400 text-[#4286F3]">文档</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
