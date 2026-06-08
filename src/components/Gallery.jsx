import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn, X, Calendar } from "lucide-react";

// Import images from assets
import sta from "../assets/Students/sta.jpg";
import sta2 from "../assets/Students/sta2.jpg";

import cultural from "../assets/Cultural/cultural.jpg";
import stu1 from "../assets/Cultural/stu1.jpg";
import stu2 from "../assets/Cultural/stu2.jpg";

import sports from "../assets/Sports/sports.jpg";
import sports2 from "../assets/Sports/sports2.jpg";
import sportsImg from "../assets/Sports/image.png";

const galleryGroups = [
  {
    id: "students",
    title: "Student Activities",
    category: "Campus & Academics",
    description: "Daily learning, science laboratory experiments, and classroom activities.",
    images: [sta, sta2],
  },
  {
    id: "cultural",
    title: "Cultural Activities",
    category: "Events & Celebrations",
    description: "Annual festival celebrations, music, dance performances, and art showcases.",
    images: [cultural, stu1, stu2],
  },
  {
    id: "sports",
    title: "Sports & Athletics",
    category: "Physical Education",
    description: "Annual sports meet, football, cricket tournaments, and physical training.",
    images: [sports, sports2, sportsImg],
  },
];

function GalleryCard({ group, onOpenLightbox }) {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto transition images every 4.5 seconds
  useEffect(() => {
    if (isHovered) return; // Pause auto-play on hover for better user experience
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % group.images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [group.images.length, isHovered]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + group.images.length) % group.images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % group.images.length);
  };

  return (
    <div
      className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-primary-950 shadow-lg border border-gray-100 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenLightbox(group, index)}
    >
      {/* Slideshow image container */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.img
            key={index}
            src={group.images[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
            alt={`${group.title} image ${index + 1}`}
          />
        </AnimatePresence>
      </div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 transition-all duration-300 group-hover:from-black/90 group-hover:via-black/45" />

      {/* Manual Slide Controls (visible on hover) */}
      <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <button
          onClick={handlePrev}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNext}
          className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md text-white flex items-center justify-center transition-all hover:scale-105 border border-white/10"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Interactive hover zoom icon */}
      <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/80 opacity-0 group-hover:opacity-100 transition-all z-20 hover:text-white hover:scale-105">
        <ZoomIn size={16} />
      </div>

      {/* Content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex flex-col justify-end h-1/2">
        <span className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-1.5 inline-block bg-gold-400/10 px-2.5 py-0.5 rounded-full border border-gold-400/20 w-fit">
          {group.category}
        </span>
        <h3 className="text-white font-display font-bold text-xl md:text-2xl mb-1 leading-snug group-hover:text-gold-300 transition-colors">
          {group.title}
        </h3>
        <p className="text-gray-300 text-xs leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-20 transition-all duration-300">
          {group.description}
        </p>

        {/* Slide Indicators / Dots */}
        <div className="flex gap-1.5 mt-4 z-20">
          {group.images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === index ? "w-6 bg-gold-400" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxGroup, setLightboxGroup] = useState(galleryGroups[0]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (group, imgIndex) => {
    setLightboxGroup(group);
    setLightboxIndex(imgIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const nextLightboxImg = () => {
    if (!lightboxGroup) return;
    setLightboxIndex((prev) => (prev + 1) % lightboxGroup.images.length);
  };

  const prevLightboxImg = () => {
    if (!lightboxGroup) return;
    setLightboxIndex((prev) => (prev - 1 + lightboxGroup.images.length) % lightboxGroup.images.length);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">School Life</span>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-gray-900 mt-2 mb-4">
            Gallery & Events
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A dynamic glimpse into the rich learning, sports, and cultural events at Kankinara Oxford English School.
          </p>
        </motion.div>

        {/* 3 picture box slideshow grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryGroups.map((group, i) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <GalleryCard group={group} onOpenLightbox={openLightbox} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full screen Lightbox modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-[100] flex flex-col justify-between p-4 md:p-8 select-none"
          >
            {/* Header / Top Bar */}
            <div className="flex justify-between items-center text-white z-10 w-full">
              <div>
                <h4 className="font-display font-bold text-lg md:text-xl text-gold-400">
                  {lightboxGroup.title}
                </h4>
                <p className="text-xs text-gray-400 flex items-center gap-1.5 mt-0.5">
                  <Calendar size={12} /> {lightboxGroup.category} Album
                </p>
              </div>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              >
                <X size={20} />
              </button>
            </div>

            {/* Main Visual Carousel Area */}
            <div className="flex-1 flex items-center justify-between w-full max-h-[75vh] my-auto relative px-10">
              
              {/* Navigation Chevrons */}
              <button
                onClick={prevLightboxImg}
                className="absolute left-1 md:left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all border border-white/10 hover:scale-105 z-10 cursor-pointer"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              
              {/* Active Slide Image */}
              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxIndex}
                    src={lightboxGroup.images[lightboxIndex]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl border border-white/5"
                    alt={`${lightboxGroup.title} album full size view`}
                  />
                </AnimatePresence>
              </div>

              <button
                onClick={nextLightboxImg}
                className="absolute right-1 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center transition-all border border-white/10 hover:scale-105 z-10 cursor-pointer"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>

            {/* Bottom Info / Counter */}
            <div className="text-center text-white z-10">
              <p className="text-sm text-gray-300 max-w-md mx-auto mb-3">
                {lightboxGroup.description}
              </p>
              <span className="text-xs bg-white/10 border border-white/10 rounded-full px-3 py-1 text-gold-400 font-semibold tracking-wider">
                {lightboxIndex + 1} / {lightboxGroup.images.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
