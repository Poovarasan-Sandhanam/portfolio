const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
    <div className="text-center px-6">
      <h1 className="text-5xl md:text-7xl font-bold mb-6">Hi, I'm Poovarasan</h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-400">Mobile App Developer | React Native Specialist</p>
      <a
        href="#contact"
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg"
      >
        Get in Touch
      </a>
    </div>
  </section>
);

export default Hero;