import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, CheckCircle } from "lucide-react";

const highlights = [
  "Affiliated to CBSE (Affiliation No. 2430473)",
  "Classes from Nursery to XII",
  "Experienced and dedicated faculty",
  "Modern classrooms and infrastructure",
  "Strong focus on holistic development",
  "Regular parent-teacher interactions",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left visual */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Main image placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-700 to-primary-950 aspect-[4/3] flex items-center justify-center">
            <div className="text-center text-white p-6 sm:p-8">
              <div className="font-display text-4xl sm:text-6xl font-bold mb-2 text-gold-400">KOES</div>
              <div className="text-primary-200 text-lg">Kankinara Oxford English School</div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white font-numeric">15+</div>
                  <div className="text-primary-300">Years</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white font-numeric">2000+</div>
                  <div className="text-primary-300">Students</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white font-numeric">50+</div>
                  <div className="text-primary-300">Teachers</div>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <div className="text-2xl font-bold text-white">CBSE</div>
                  <div className="text-primary-300">Affiliated</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating info card */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-white rounded-2xl p-3 sm:p-5 shadow-xl border border-gray-100 max-w-[160px] sm:max-w-[200px]"
          >
            <div className="flex items-center gap-2 text-primary-700 font-bold text-sm mb-1">
              <MapPin size={14} className="text-gold-500" />
              Location
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              South Narayanpur Road, Kankinara, North 24 Parganas
            </p>
          </motion.div>
        </motion.div>

        {/* Right content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">About Us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-2 mb-6 leading-tight">
            Welcome to Kankinara Oxford English School
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Kankinara Oxford English School epitomizes the essence of quality education in a nurturing environment. With dedicated faculty, diverse extracurricular opportunities, and modern facilities, we help students see their dreams come true.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Our experienced members of faculty relentlessly strive to set things in the right perspective and help generously to ensure every student reaches their fullest potential.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700 text-sm">
                <CheckCircle size={18} className="text-primary-600 mt-0.5 flex-shrink-0" />
                {item === "Affiliated to CBSE (Affiliation No. 2430473)" ? (
                  <span>
                    Affiliated to CBSE (Affiliation No. <span className="font-numeric">2430473</span>)
                  </span>
                ) : (
                  item
                )}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-full transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#notice"
              className="inline-flex items-center justify-center px-6 py-3 border border-primary-200 hover:border-primary-400 text-primary-700 font-semibold rounded-full transition-all"
            >
              View Notice Board
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
