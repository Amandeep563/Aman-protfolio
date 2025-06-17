const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-white"
    >
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
            Hello, I'm <span className="block text-gray-600">Amandeep</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            A passionate fresher developer creating modern web experiences with
            clean code and thoughtful design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-black text-white px-8 py-3 rounded-none hover:bg-gray-800 transition-colors duration-300 font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border-2 border-black text-black px-8 py-3 rounded-none hover:bg-black hover:text-white transition-colors duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
