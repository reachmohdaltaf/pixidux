import logo from '../../public/logo.png'

const Navbar = () => {
    return (
      <div className="h-16  z-1000  w-full bg-pink-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 sticky top-0 text-black flex items-center justify-between px-6 shadow-lg">
        <div className="logo text-3xl font-bold">
          <img src={logo} className="h-20"  alt="" />
        </div>
        <div className="nav-links space-x-6">
          <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-400 transition-colors">About</a>
          <a href="#services" className="hover:text-gray-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-gray-400 transition-colors">Contact</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;
  