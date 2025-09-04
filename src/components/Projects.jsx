/* eslint-disable react/prop-types */
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Search, 
  Filter, 
  ChevronDown, 
  X, 
  Calendar, 
  Code, 
  Tag,
  Heart,
  Share2,
  Maximize2,
} from 'lucide-react';
import {PROJECTS} from '../constants';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

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

  const toggleFavorite = (projectId) => {
    setFavorites((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const shareProject = async (project) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.description,
          url: project.liveLink || project.githubLink,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(project.liveLink || project.githubLink);
        // You could add a toast notification here
        console.log('Link copied to clipboard!');
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  // Container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Card variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className="group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500"
    >
      {/* Image Section */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        
        {/* Floating action buttons */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(project.id);
            }}
            className={`p-2 rounded-full backdrop-blur-md transition-colors ${
              favorites.includes(project.id)
                ? "bg-red-500/80 text-white"
                : "bg-black/50 text-white hover:bg-red-500/60"
            }`}
            title="Add to favorites"
          >
            <Heart
              size={16}
              fill={favorites.includes(project.id) ? "currentColor" : "none"}
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
          <span className={`px-3 py-1 backdrop-blur-sm text-white text-xs font-medium rounded-full ${
            project.status === 'Completed' ? 'bg-green-500/90' :
            project.status === 'Live' ? 'bg-blue-500/90' : 'bg-orange-500/90'
          }`}>
            {project.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-1">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm flex items-center space-x-2">
              <Calendar size={14} />
              <span>{project.date}</span>
              <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
              <Code size={14} />
              <span>{project.type}</span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Tag size={14} className="text-blue-400 mr-2" />
            <span className="text-xs font-medium text-blue-300">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-2 py-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-300 text-xs font-medium rounded-md hover:from-blue-600/30 hover:to-purple-600/30 transition-all cursor-pointer"
                onClick={() => setSelectedTech(selectedTech === tech ? "" : tech)}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-xs text-slate-400 px-2 py-1">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg group/btn"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
            <span>Code</span>
          </motion.a>

          {project.liveLink && (
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg shadow-blue-500/25 group/btn"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={18} className="group-hover/btn:rotate-12 transition-transform" />
              <span>Live</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Explore my latest work and creative solutions. Each project represents a unique challenge solved with modern technologies.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all backdrop-blur-sm"
            />
          </div>

          {/* Filter */}
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center space-x-2 px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white hover:border-blue-500 transition-all backdrop-blur-sm min-w-[140px]"
            >
              <Filter size={20} />
              <span className="truncate">{selectedTech || "All Tech"}</span>
              <ChevronDown size={16} className={`transition-transform ${filterOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {filterOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 w-64 bg-slate-800 border border-slate-700 rounded-xl shadow-xl z-10 max-h-64 overflow-y-auto"
                >
                  <button
                    onClick={() => {
                      setSelectedTech("");
                      setFilterOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-slate-700 transition-colors border-b border-slate-700"
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
                          ? "bg-blue-600 text-white"
                          : "text-slate-300 hover:bg-slate-700"
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Results Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center justify-between mb-8 text-sm text-slate-400"
        >
          <span>
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
            {selectedTech && ` with ${selectedTech}`}
          </span>
          {favorites.length > 0 && (
            <span className="flex items-center space-x-1">
              <Heart size={16} className="text-red-400" />
              <span>{favorites.length} favorite{favorites.length !== 1 ? "s" : ""}</span>
            </span>
          )}
        </motion.div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          /* Empty State */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-slate-400 mb-6">Try adjusting your search or filter criteria</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSearchTerm("");
                setSelectedTech("");
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors"
            >
              Clear Filters
            </motion.button>
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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 lg:p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-slate-400 flex items-center space-x-2">
                    <span>{selectedProject.type}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span>{selectedProject.date}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
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
                      className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                    >
                      <Github size={20} />
                      <span>View Code</span>
                    </a>
                    {selectedProject.liveLink && (
                      <a
                        href={selectedProject.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors font-medium"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">About This Project</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>

                  <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {selectedProject.features && (
                    <>
                      <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                      <ul className="text-slate-300 space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
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
    </section>
  );
};

export default Projects;