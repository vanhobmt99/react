

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-white font-bold text-xl">
              My Website
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-white hover:text-blue-200">
              Home
            </a>
            <a href="/about" className="text-white hover:text-blue-200">
              About
            </a>
            <a href="/services" className="text-white hover:text-blue-200">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-blue-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
