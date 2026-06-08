import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", cls: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", email: "", message: "", cls: "" });
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-primary-600 font-semibold text-sm tracking-widest uppercase">Get in Touch</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 mt-2 mb-4">
            Contact & Admissions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions or want to apply? Fill out the form and our team will get back to you promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "18/1/3 South Narayanpur Road, Ward No-31, Panpur, PIN-743126, P.O.-Kankinara, North 24 Parganas",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "9433307528 / 8961725696",
              },
              {
                icon: Mail,
                label: "Email",
                value: "koesworkspace16@gmail.com",
              },
              {
                icon: Clock,
                label: "School Hours",
                value: "Monday–Saturday: 8:00 AM – 2:00 PM",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="bg-white rounded-2xl p-5 flex gap-4 border border-gray-100 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</div>
                  <div className="text-gray-800 text-sm">{value}</div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-primary-900 rounded-2xl p-6 text-white">
              <div className="text-sm font-semibold mb-2 text-gold-400">📍 Find Us</div>
              <p className="text-primary-300 text-sm">
                Located in Kankinara, North 24 Parganas, West Bengal — easily accessible by road and rail.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-6">Quick Enquiry</h3>
              {sent && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                  ✅ Thank you! We'll contact you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Student's name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">Class Seeking Admission</label>
                    <select
                      value={form.cls}
                      onChange={e => setForm({ ...form, cls: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-white"
                    >
                      <option value="">Select class</option>
                      {["Nursery", "LKG", "UKG", ...Array.from({length:12}, (_, i) => `Class ${i+1}`)].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    placeholder="Parent's contact number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                    placeholder="Any specific queries?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-primary-200 hover:shadow-lg"
                >
                  <Send size={16} /> Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
