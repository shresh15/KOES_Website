import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bell, Calendar, ArrowRight, FileText } from "lucide-react";

const notices = [
  {
    date: "01 Jun 2026",
    title: "Admission Open for Session 2026–27",
    desc: "Enrollments now open for Nursery to Class IX and Class XI. Apply before seats fill up.",
    badge: "Urgent",
    badgeColor: "bg-red-100 text-red-600",
  },
  {
    date: "15 May 2026",
    title: "Annual Sports Day – Participation Notice",
    desc: "All students from Class III to XII are requested to register for the Annual Sports Day events.",
    badge: "Event",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    date: "10 May 2026",
    title: "Term-End Examination Schedule Released",
    desc: "The schedule for Term-End examinations has been published. Students can collect a copy from the office.",
    badge: "Exam",
    badgeColor: "bg-amber-100 text-amber-600",
  },
  {
    date: "01 May 2026",
    title: "Mandatory Public Disclosure",
    desc: "All mandatory CBSE disclosures are available for review. Please visit the school office for details.",
    badge: "Notice",
    badgeColor: "bg-green-100 text-green-600",
  },
];

export default function NoticeBoard() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="notice" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">Announcements</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-2">
              Notice Board
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 font-semibold text-sm transition-colors"
          >
            View All Notices <ArrowRight size={16} />
          </a>
        </motion.div>

        <div className="space-y-4">
          {notices.map((notice, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <div className="flex items-center gap-4 sm:w-36 flex-shrink-0">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                  <Bell size={18} className="text-primary-600" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Calendar size={12} />
                  {notice.date}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-start gap-3 mb-1">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${notice.badgeColor}`}>
                    {notice.badge}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                    {notice.title}
                  </h3>
                </div>
                <p className="text-gray-500 text-sm sm:ml-0" style={{marginLeft: 0}}>{notice.desc}</p>
              </div>

              <div className="flex-shrink-0">
                <button className="flex items-center gap-2 text-primary-600 text-sm font-semibold hover:text-primary-800 transition-colors">
                  <FileText size={16} /> Read
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
