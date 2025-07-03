const Navbar = () => (
  <nav className="bg-black text-white p-6 sticky top-0 z-50 shadow-lg">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold">Poovarasan</h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-blue-400">About</a>
        <a href="#projects" className="hover:text-blue-400">Projects</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </div>
    </div>
  </nav>
);

export default Navbar;