import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import logoImg from "../assets/Logo/logo.jpeg";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "About Us", href: "/#about" },
  { label: "Academics", href: "/#academics" },
  { label: "Notice Board", href: "/#notice" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <img
              src={logoImg}
              alt="Kankinara Oxford English School Logo"
              className="w-12 h-12 rounded-full object-cover shadow-md border border-white/20"
            />
            <div>
              <div className="font-display font-bold text-xl">Kankinara Oxford</div>
              <div className="text-primary-400 text-sm">English School</div>
            </div>
          </div>
          <p className="text-primary-300 text-sm leading-relaxed mb-6 max-w-sm">
            Kankinara Oxford English School epitomizes the essence of quality education in a nurturing environment. With dedicated faculty and diverse extracurricular opportunities, we help every student achieve their dreams.
          </p>
          <div className="space-y-2.5 text-sm text-primary-300">
            <div className="flex items-start gap-2.5">
              <MapPin size={14} className="text-gold-400 mt-1 flex-shrink-0" />
              <span className="font-numeric">18/1/3 South Narayanpur Road, Ward No-31, Panpur, PIN-743126, Kankinara, North 24 Parganas</span>
            </div>
            <a href="tel:9433307528" className="flex items-center gap-2.5 hover:text-white transition-colors font-numeric">
              <Phone size={14} className="text-gold-400" /> 9433307528 / 8961725696
            </a>
            <a href="mailto:koesworkspace16@gmail.com" className="flex items-center gap-2.5 hover:text-white transition-colors">
              <Mail size={14} className="text-gold-400" /> koesworkspace16@gmail.com
            </a>
          </div>
          {/* Social */}
          <div className="flex gap-3 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100088713187357"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-primary-950 flex items-center justify-center transition-all"
            >
              <ExternalLink size={16} />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=919433307528"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 hover:text-primary-950 flex items-center justify-center transition-all"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center gap-2 text-sm text-primary-300 hover:text-gold-400 transition-colors group"
                >
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Admission info */}
        <div>
          <h4 className="font-display font-bold text-lg mb-5">Admissions</h4>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="text-gold-400 font-bold text-sm mb-2">🎓 Open Now!</div>
            <div className="text-white font-semibold mb-1">Session <span className="font-numeric">2026–27</span></div>
            <div className="text-primary-300 text-xs mb-4">
              Admissions open for Nursery to Class IX and Class XI. CBSE Affiliated.
            </div>
            <div className="text-xs text-primary-400 mb-1">Affiliation No.</div>
            <div className="text-white font-bold text-lg font-display font-numeric">2430473</div>
            <Link
              to="/#contact"
              className="mt-4 block text-center py-2.5 bg-gold-500 hover:bg-gold-400 text-primary-950 font-bold text-sm rounded-xl transition-all"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-400">
          <span>© <span className="font-numeric">2026</span> Kankinara Oxford English School. All Rights Reserved.</span>
          <span>Affiliated to CBSE · Affiliation No. <span className="font-numeric">2430473</span></span>
        </div>
      </div>
    </footer>
  );
}
