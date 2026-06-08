import { motion } from "framer-motion";
import { ArrowRight, Star, BookOpen, Users } from "lucide-react";
import logoImg from "../assets/Logo/logo.jpeg";

const heroVideo = "https://res.cloudinary.com/dbkn7cvph/video/upload/v1780926312/Video_Project_axjcy5.mp4";

const stats = [
  { icon: BookOpen, value: "15+", label: "Years of Excellence" },
  { icon: Users, value: "2000+", label: "Students Enrolled" },
  { icon: Star, value: "CBSE", label: "Affiliated Board" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay Gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/65 via-primary-950/45 to-primary-950/65 lg:bg-gradient-to-r lg:from-primary-950/80 lg:via-primary-950/55 lg:to-primary-950/25" />

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary-700/30 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/20 blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 text-gold-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          >
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            Admissions Open <span className="font-numeric">2026–27</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 text-shadow"
          >
            Shaping
            <span className="block text-gold-400 italic">Tomorrow's</span>
            Leaders Today
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-primary-200 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Kankinara Oxford English School provides quality CBSE education in a
            nurturing environment, with dedicated faculty and modern facilities
            that help every student achieve their dreams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold rounded-full transition-all hover:scale-105 shadow-lg shadow-gold-500/30"
            >
              Apply for Admission <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded-full transition-all hover:bg-white/10"
            >
              Explore School
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:flex sm:flex-wrap sm:gap-8 mt-10 pt-8 border-t border-white/10"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left gap-2 sm:gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold-400" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white font-display leading-tight">{value}</div>
                  <div className="text-[10px] sm:text-xs text-primary-300 leading-tight mt-0.5">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — decorative card stack */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex relative justify-center"
        >
          {/* Main card */}
          <div className="relative w-80">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoImg}
                  alt="KOES Logo"
                  className="w-12 h-12 rounded-full object-cover shadow-md border border-white/20"
                />
                <div>
                  <div className="font-bold">KOES</div>
                  <div className="text-xs text-primary-300">Since 2008</div>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                {["Nursery to Class XII", "CBSE Affiliated", "Experienced Faculty", "Modern Facilities", "Extracurricular Activities"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-primary-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gold-500/20 rounded-2xl border border-gold-500/30">
                <div className="text-xs text-gold-400 font-semibold mb-1">Affiliation No.</div>
                <div className="text-white font-bold text-lg font-numeric">2430473</div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-gold-500 text-primary-950 rounded-2xl px-4 py-3 shadow-xl"
            >
              <div className="text-xs font-semibold">CBSE Board</div>
              <div className="text-xl font-bold font-display"><span className="font-numeric">10+2</span></div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs"
      >
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
