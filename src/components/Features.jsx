import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, Monitor, Users, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "World-Class Curriculum",
    desc: "CBSE-affiliated syllabus designed to prepare students for competitive exams and future careers.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Award,
    title: "Expert Faculty",
    desc: "Experienced and highly qualified teachers who relentlessly strive to help every student succeed.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Monitor,
    title: "Digital Learning",
    desc: "Modern IT infrastructure and smart classrooms that make education engaging and future-ready.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Users,
    title: "Co-Curricular Activities",
    desc: "Sports, arts, and cultural programs that develop the whole personality of every student.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Heart,
    title: "Nurturing Environment",
    desc: "A warm, inclusive atmosphere where every child feels safe, valued, and inspired to grow.",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: Shield,
    title: "Safe Campus",
    desc: "A secure, well-monitored campus ensuring the safety and well-being of all our students.",
    color: "bg-teal-50 text-teal-600",
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <feature.icon size={22} />
      </div>
      <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{feature.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="py-24 bg-gray-100" id="academics">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-2 mb-4">
            Excellence in Every Dimension
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base lg:text-lg">
            We believe education is about developing the head, heart, and hands — academic mastery, emotional intelligence, and practical skills.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
