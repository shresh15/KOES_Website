import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function AdmissionCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 p-8 md:p-16 text-white flex flex-col items-center text-center sm:text-left md:flex-row md:items-center md:text-left justify-between gap-8"
        >
          {/* Decorative */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-gold-500/10 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute left-0 bottom-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />

          <div className="relative flex flex-col sm:flex-row items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={32} className="text-gold-400" />
            </div>
            <div>
              <div className="text-gold-400 font-semibold text-sm mb-1 uppercase tracking-wide">Admissions Open</div>
              <h2 className="font-display font-bold text-3xl md:text-4xl leading-tight">
                Join KOES for Session 2026–27
              </h2>
              <p className="text-primary-200 mt-2 text-sm max-w-md">
                Enrolling for Nursery through Class IX and Class XI. Secure your child's future with a quality CBSE education.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold rounded-full transition-all hover:scale-105 shadow-lg"
            >
              Apply Now <ArrowRight size={18} />
            </a>
            <a
              href="tel:9433307528"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded-full transition-all hover:bg-white/10"
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
