import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoImg from "../assets/Logo/logo.jpeg";

const navLinks = [
  { label: "Home", href: "#home" },
  {
    label: "About",
    href: "#about",
    children: [
      { label: "Our Story", href: "#about" },
      { label: "Principal's Message", href: "#principal" },
      { label: "Vision & Mission", href: "#vision" },
    ],
  },
  {
    label: "Academics",
    href: "#academics",
    children: [
      { label: "Curriculum", href: "#curriculum" },
      { label: "Facilities", href: "#facilities" },
      { label: "Co-curricular", href: "#cocurricular" },
    ],
  },
  { label: "Notice Board", href: "#notice" },
  { label: "Gallery", href: "#gallery" },
  { label: "Parent / Teacher Login", href: "/login", isRoute: true },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const location = useLocation();

  const isLoginPage = location.pathname === "/login";

  const getHref = (link) => {
    if (link.isRoute) return link.href;
    return isLoginPage ? `/${link.href}` : link.href;
  };

  const getChildHref = (child) => {
    return isLoginPage ? `/${child.href}` : child.href;
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route/location change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location]);

  const toggleMobileExpanded = (label) => {
    setMobileExpanded((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* Top bar — hidden on mobile */}
      <div className="bg-primary-950 text-white text-sm py-2 px-4 hidden md:flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:9433307528" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <Phone size={13} /> 9433307528 / 8961725696
          </a>
          <a href="mailto:koesworkspace16@gmail.com" className="flex items-center gap-1.5 hover:text-gold-400 transition-colors">
            <Mail size={13} /> koesworkspace16@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 text-gold-400 font-semibold tracking-wide animate-pulse">
          🎓 Admissions Open 2026–27 · Nursery to Class IX & XI
        </div>
      </div>

      {/* Main navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logoImg}
              alt="Kankinara Oxford English School Logo"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md border border-primary-100"
            />
            <div>
              <div className="font-display font-bold text-primary-900 text-sm md:text-base leading-tight">
                Kankinara Oxford
              </div>
              <div className="text-xs text-primary-600 font-body tracking-wide">
                English School · CBSE
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.isRoute ? (
                  <Link
                    to={link.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-primary-700 bg-primary-50/50 hover:bg-primary-100/70 border border-primary-100/50 rounded-md transition-all shadow-sm hover:shadow-md"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={getHref(link)}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary-700 rounded-md hover:bg-primary-50 transition-all"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} />}
                  </a>
                )}
                <AnimatePresence>
                  {link.children && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 min-w-[180px] overflow-hidden"
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={getChildHref(child)}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-700 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href={isLoginPage ? "/#contact" : "#contact"}
            className="hidden lg:inline-flex items-center px-5 py-2 bg-primary-700 hover:bg-primary-800 text-white text-sm font-semibold rounded-full transition-all shadow-md hover:shadow-primary-200 hover:shadow-lg"
          >
            Admissions
          </a>

          {/* Mobile hamburger toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: "block" }}
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  style={{ display: "block" }}
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                {navLinks.map((link) =>
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-3 py-3 text-sm font-semibold text-primary-700 bg-primary-50/60 hover:bg-primary-100/70 border border-primary-100/50 rounded-xl transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : link.children ? (
                    <div key={link.label}>
                      {/* Accordion toggle */}
                      <button
                        className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-colors"
                        onClick={() => toggleMobileExpanded(link.label)}
                      >
                        <span>{link.label}</span>
                        <motion.span
                          animate={{ rotate: mobileExpanded === link.label ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          style={{ display: "inline-block" }}
                        >
                          <ChevronDown size={16} />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === link.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden pl-3"
                          >
                            {link.children.map((child) => (
                              <a
                                key={child.label}
                                href={getChildHref(child)}
                                className="block px-3 py-2.5 text-sm text-gray-500 hover:text-primary-700 hover:bg-primary-50 rounded-lg transition-colors border-l-2 border-primary-100 ml-1 mb-0.5"
                                onClick={() => setMobileOpen(false)}
                              >
                                {child.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={getHref(link)}
                      className="block px-3 py-3 text-sm font-medium text-gray-700 hover:text-primary-700 hover:bg-primary-50 rounded-xl transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}

                {/* Mobile CTA */}
                <div className="pt-2">
                  <a
                    href={isLoginPage ? "/#contact" : "#contact"}
                    className="block text-center px-5 py-3 bg-primary-700 hover:bg-primary-800 text-white text-sm font-semibold rounded-full transition-colors shadow-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    Admissions
                  </a>
                </div>

                {/* Mobile contact strip */}
                <div className="pt-2 border-t border-gray-100 flex flex-col gap-2 text-xs text-gray-500">
                  <a href="tel:9433307528" className="flex items-center gap-2 hover:text-primary-700 px-1">
                    <Phone size={12} /> 9433307528 / 8961725696
                  </a>
                  <a href="mailto:koesworkspace16@gmail.com" className="flex items-center gap-2 hover:text-primary-700 px-1">
                    <Mail size={12} /> koesworkspace16@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
