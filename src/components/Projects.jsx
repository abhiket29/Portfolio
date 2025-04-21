import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Projects = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Create an infinite array of projects by duplicating them
  const infiniteProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  // Custom navigation handlers
  const handlePrev = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiper) swiper.slideNext();
  };

  return (
    <div
      id="projects"
      className="border-b border-neutral-900 py-16 px-8 md:px-[9rem] lg:px-[20rem]"
    >
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        {/* <p className="text-neutral-300 max-w-2xl mx-auto">
          Explore my latest work and side projects. Swipe or use the navigation buttons to browse through the collection.
        </p> */}
      </motion.div>

      <div className="relative max-w-6xl mx-auto">
        {/* Custom Navigation Buttons */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/80 hover:bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm -ml-6 lg:ml-0"
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <ChevronLeft size={24} />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/80 hover:bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm -mr-6 lg:mr-0"
          onClick={handleNext}
          aria-label="Next project"
        >
          <ChevronRight size={24} />
        </motion.button>

        <Swiper
          autoplay={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          loop={true}
          loopAdditionalSlides={2}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={false} // Disable default navigation
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper py-16"
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {infiniteProjects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="w-[350px] rounded-xl overflow-hidden shadow-2xl transform transition-all duration-300"
            >
              <motion.div
                className="h-full bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 rounded-xl overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[220px] object-cover transform transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>

                <div className="lg:p-[5rem] md:p-8 p-8">
                  <h6 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h6>
                  <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-purple-600 text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors font-medium shadow-md shadow-purple-600/20"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      GitHub
                    </motion.a>

                    {project.liveLink && (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors font-medium border border-gray-600"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Project counter display */}
        {/* <div className="absolute bottom-0 right-0 bg-gray-800/70 backdrop-blur-sm rounded-tl-lg rounded-br-lg px-4 py-2 text-sm text-white font-medium">
          {activeIndex + 1} / {PROJECTS.length}
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
