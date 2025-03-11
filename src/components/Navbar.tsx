import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-screen bg-black bg-opacity-90 text-white p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">HenOSV</h1>
        <div className="space-x-6 flex justify-end">
          <Link to="/" className="hover:text-gray-400">首页</Link>
          <Link to="/modeling" className="hover:text-gray-400">参数化建模</Link>
          <Link to="/docs" className="hover:text-gray-400">文档</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
