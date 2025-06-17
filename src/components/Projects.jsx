const Projects = () => {
  const projects = [
    {
      title: "Task Management App",
      description:
        "A modern task management application built with React and local storage. Features include task creation, editing, categorization, and real-time filtering with a clean, intuitive interface.",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      githubLink: "https://github.com/alexjohnson/task-manager",
      liveLink: "https://taskmanager-alex.netlify.app",
      features: [
        "Task CRUD operations",
        "Category filtering",
        "Responsive design",
        "Local data persistence",
      ],
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather application that displays current weather conditions and 5-day forecasts. Built with vanilla JavaScript and integrated with OpenWeatherMap API for real-time data.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
      githubLink: "https://github.com/alexjohnson/weather-dashboard",
      liveLink: "https://weather-alex.netlify.app",
      features: [
        "Real-time weather data",
        "5-day forecast",
        "Location search",
        "Mobile-first design",
      ],
    },
    {
      title: "Movie App",
      description:
        "A clean, minimalistic portfolio website showcasing my projects and skills. Built with React and Tailwind CSS, featuring smooth animations and responsive design principles.",
      technologies: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Responsive Design",
      ],
      githubLink: "https://github.com/Amandeep563/movie-app",
      liveLink: "https://movie-app-kappa-bice.vercel.app/",
      features: [
        "Smooth scroll navigation",
        "Contact form",
        "Mobile optimization",
        "Modern design",
      ],
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web
            development and problem-solving.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-black transition-colors duration-300 group"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-black mb-2">
                      Key Features:
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white text-center py-2 px-4 hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-black text-black text-center py-2 px-4 hover:bg-black hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
