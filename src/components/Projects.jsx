/* eslint-disable react/prop-types */
import { PROJECTS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCards,
  EffectCoverflow,
} from "swiper/modules";
import { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Search,
  Filter,
  Star,
  Eye,
  Code,
  Calendar,
  Tag,
  ChevronDown,
  X,
  Heart,
  Share2,
  RotateCcw,
  Maximize2,
  Grid3X3,
  Layers,
} from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [swiperEffect, setSwiperEffect] = useState("coverflow");
  const [isMobile, setIsMobile] = useState(false);

  // Get all unique technologies
  const allTechnologies = [
    ...new Set(PROJECTS.flatMap((project) => project.technologies)),
  ].sort();

  // Filter projects
  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech =
      !selectedTech || project.technologies.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  // Create infinite array for smooth looping
  const infiniteProjects =
    filteredProjects.length > 0
      ? [...filteredProjects, ...filteredProjects]
      : [];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Navigation handlers
  const handlePrev = () => swiper?.slidePrev();
  const handleNext = () => swiper?.slideNext();
  const resetToFirst = () => swiper?.slideToLoop(0);

  const toggleAutoplay = () => {
    if (swiper) {
      if (isAutoplay) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      setIsAutoplay(!isAutoplay);
    }
  };

  const toggleFavorite = (projectId) => {
    setFavorites((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const shareProject = (project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveLink || project.githubLink,
      });
    } else {
      navigator.clipboard.writeText(project.liveLink || project.githubLink);
    }
  };

  const ProjectCard = ({ project, index }) => (
    <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-850 to-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 group">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Image Section */}
        <div className="relative lg:w-2/5 h-48 lg:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/20 lg:to-gray-900/40"></div>

          {/* Floating action buttons */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(project.id || index);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-colors ${
                favorites.includes(project.id || index)
                  ? "bg-red-500/80 text-white"
                  : "bg-black/50 text-white hover:bg-red-500/60"
              }`}
              title="Add to favorites"
            >
              <Heart
                size={16}
                fill={
                  favorites.includes(project.id || index)
                    ? "currentColor"
                    : "none"
                }
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                shareProject(project);
              }}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-blue-500/60 transition-colors"
              title="Share project"
            >
              <Share2 size={16} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProject(project);
              }}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-purple-500/60 transition-colors"
              title="View details"
            >
              <Maximize2 size={16} />
            </motion.button>
          </div>

          {/* Status badge */}
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {project.status || "Completed"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm flex items-center space-x-2">
                  <Calendar size={14} />
                  <span>{project.date || "2024"}</span>
                  <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                  <Code size={14} />
                  <span>{project.type || "Web App"}</span>
                </p>
              </div>

              <div className="flex items-center space-x-1 text-yellow-400">
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-medium">
                  {project.rating || "4.8"}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Tag size={16} className="text-purple-400 mr-2" />
                <span className="text-sm font-medium text-purple-300">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies
                  .slice(0, isMobile ? 4 : 6)
                  .map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full hover:from-purple-600/30 hover:to-pink-600/30 transition-all cursor-pointer"
                      onClick={() =>
                        setSelectedTech(selectedTech === tech ? "" : tech)
                      }
                    >
                      {tech}
                    </motion.span>
                  ))}
                {project.technologies.length > (isMobile ? 4 : 6) && (
                  <span className="text-xs text-gray-400 px-2 py-1">
                    +{project.technologies.length - (isMobile ? 4 : 6)} more
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg group/btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github
                size={18}
                className="group-hover/btn:rotate-12 transition-transform"
              />
              <span>Code</span>
            </motion.a>

            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg shadow-purple-500/25 group/btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink
                  size={18}
                  className="group-hover/btn:rotate-12 transition-transform"
                />
                <span>Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div id="projects" className=" lg:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-7">
            Swipe through my latest work and creative solutions. Each project
            represents a unique challenge.
          </p>
        </motion.h1>
        {/* <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Swipe through my latest work and creative solutions. Each project
            represents a unique challenge.
          </p>
        </motion.div> */}

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center space-x-2 px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white hover:border-purple-500 transition-all backdrop-blur-sm"
            >
              <Filter size={20} />
              <span className="hidden sm:inline">
                {selectedTech || "All Tech"}
              </span>
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  filterOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-xl z-10 max-h-64 overflow-y-auto"
                >
                  <button
                    onClick={() => {
                      setSelectedTech("");
                      setFilterOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 transition-colors border-b border-gray-700"
                  >
                    All Technologies
                  </button>
                  {allTechnologies.map((tech) => (
                    <button
                      key={tech}
                      onClick={() => {
                        setSelectedTech(tech);
                        setFilterOpen(false);
                      }}
                      className={`w-full px-4 py-2 text-left transition-colors ${
                        selectedTech === tech
                          ? "bg-purple-600 text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Swiper Controls */}
          <div className="flex items-center space-x-2">
            {/* Effect Selector */}
            <div className="flex bg-gray-800/50 rounded-xl border border-gray-700 p-1">
              <button
                onClick={() => setSwiperEffect("coverflow")}
                className={`p-2 rounded-lg transition-all ${
                  swiperEffect === "coverflow"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                title="Coverflow Effect"
              >
                <Layers size={18} />
              </button>
              <button
                onClick={() => setSwiperEffect("cards")}
                className={`p-2 rounded-lg transition-all ${
                  swiperEffect === "cards"
                    ? "bg-purple-600 text-white"
                    : "text-gray-400 hover:text-white"
                }`}
                title="Cards Effect"
              >
                <Grid3X3 size={18} />
              </button>
            </div>

            {/* Playback Controls */}
            <div className="flex bg-gray-800/50 rounded-xl border border-gray-700 p-1">
              <button
                onClick={handlePrev}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={toggleAutoplay}
                className={`p-2 transition-colors ${
                  isAutoplay
                    ? "text-green-400"
                    : "text-gray-400 hover:text-white"
                }`}
                title={isAutoplay ? "Pause" : "Play"}
              >
                {isAutoplay ? <Pause size={18} /> : <Play size={18} />}
              </button>
              <button
                onClick={handleNext}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                title="Next"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <button
              onClick={resetToFirst}
              className="p-3 bg-gray-800/50 border border-gray-700 rounded-xl text-gray-400 hover:text-white hover:border-purple-500 transition-all"
              title="Reset to first"
            >
              <RotateCcw size={18} />
            </button>
          </div>
        </motion.div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-8 text-sm text-gray-400">
          <span>
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
            {selectedTech && ` with ${selectedTech}`}
          </span>
          <div className="flex items-center space-x-4">
            {favorites.length > 0 && (
              <span className="flex items-center space-x-1">
                <Heart size={16} className="text-red-400" />
                <span>
                  {favorites.length} favorite{favorites.length !== 1 ? "s" : ""}
                </span>
              </span>
            )}
            <span className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full">
              {activeIndex + 1} / {filteredProjects.length}
            </span>
          </div>
        </div>

        {/* Swiper Container */}
        {filteredProjects.length > 0 ? (
          <div className="relative">
            {/* Desktop Navigation Buttons */}
            {!isMobile && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/90 hover:bg-purple-600 text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm -ml-6 lg:-ml-8 transition-all duration-200"
                  onClick={handlePrev}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/90 hover:bg-purple-600 text-white w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm -mr-6 lg:-mr-8 transition-all duration-200"
                  onClick={handleNext}
                >
                  <ChevronRight size={24} />
                </motion.button>
              </>
            )}

            <Swiper
              effect={swiperEffect}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={swiperEffect === "cards" ? 1 : "auto"}
              initialSlide={0}
              loop={filteredProjects.length > 1}
              loopAdditionalSlides={2}
              spaceBetween={swiperEffect === "cards" ? 0 : 30}
              autoplay={
                isAutoplay
                  ? {
                      delay: 4000,
                      disableOnInteraction: false,
                    }
                  : false
              }
              coverflowEffect={{
                rotate: isMobile ? 15 : 25,
                stretch: 0,
                depth: isMobile ? 100 : 200,
                modifier: 1,
                slideShadows: true,
              }}
              cardsEffect={{
                slideShadows: true,
                transformEl: null,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              modules={[
                EffectCoverflow,
                EffectCards,
                Pagination,
                Navigation,
                Autoplay,
              ]}
              className="mySwiper py-12"
              onSwiper={setSwiper}
              onSlideChange={(swiper) =>
                setActiveIndex(swiper.realIndex % filteredProjects.length)
              }
            >
              {infiniteProjects.map((project, index) => (
                <SwiperSlide
                  key={`${project.id || project.title}-${index}`}
                  className={`${
                    swiperEffect === "cards"
                      ? "w-full max-w-5xl"
                      : isMobile
                      ? "w-[340px]"
                      : "w-[600px] lg:w-[700px]"
                  } ${
                    swiperEffect === "cards"
                      ? "h-[500px] lg:h-[400px]"
                      : "h-[400px] lg:h-[350px]"
                  }`}
                >
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Keyboard Shortcuts Hint */}
            <div className="hidden lg:block text-center mt-8 text-gray-500 text-sm">
              <p>
                💡 Swipe, use arrow keys, or click controls to navigate • Space
                for auto-play
              </p>
            </div>
          </div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              No projects found
            </h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("");
              }}
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateY: -15 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 15 }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-400 flex items-center space-x-2">
                    <span>{selectedProject.type || "Web Application"}</span>
                    <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
                    <span>{selectedProject.date || "2024"}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-700 rounded-lg"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                <div>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl mb-4 shadow-lg"
                  />

                  <div className="flex space-x-4">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    About This Project
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <h3 className="text-lg font-semibold text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 text-purple-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.features && (
                    <>
                      <h3 className="text-lg font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <ul className="text-gray-300 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
