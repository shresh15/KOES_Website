import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  GraduationCap, 
  Users, 
  Lock, 
  User, 
  Mail, 
  ArrowLeft, 
  Eye, 
  EyeOff, 
  Calendar, 
  BookOpen, 
  Bell, 
  CheckCircle,
  FileText
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LoginPortal() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("teacher"); // "teacher" or "parent"
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(null);

  // Form states
  const [teacherForm, setTeacherForm] = useState({ teacherId: "", password: "", rememberMe: false });
  const [parentForm, setParentForm] = useState({ emailOrPhone: "", password: "", rememberMe: false });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginSuccess(null);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setLoginSuccess(activeTab === "teacher" ? "teacher" : "parent");
      
      // Clear forms on success mock
      if (activeTab === "teacher") {
        setTeacherForm({ teacherId: "", password: "", rememberMe: false });
      } else {
        setParentForm({ emailOrPhone: "", password: "", rememberMe: false });
      }
    }, 1500);
  };

  return (
    <div className="min-h-[85vh] bg-gradient-to-br from-primary-50 via-white to-gold-50/30 flex items-center justify-center px-4 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-primary-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/10 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 grid md:grid-cols-12 min-h-[550px] relative z-10">
        
        {/* Left Branding/Info Panel */}
        <div className="md:col-span-5 bg-gradient-to-br from-primary-800 to-primary-950 p-6 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle graphic patterns */}
          <div className="absolute -right-20 -bottom-20 w-60 h-60 rounded-full bg-white/5 border border-white/10 -z-0"></div>
          
          <div className="relative z-10">
            {/* Back button */}
            <button 
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-primary-200 hover:text-gold-400 transition-colors mb-6 md:mb-8 cursor-pointer group"
            >
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
              Back to main website
            </button>

            <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 md:mb-6">
              <GraduationCap className="text-gold-400" size={26} />
            </div>

            <h2 className="font-display font-bold text-3xl leading-tight mb-2">
              KOES Digital Campus
            </h2>
            <p className="text-sm text-primary-200 mb-6 md:mb-8 font-body">
              Kankinara Oxford English School's unified teacher & parent communication portal.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                { icon: Calendar, text: "Track attendance and schedules" },
                { icon: BookOpen, text: "Access homework & syllabus status" },
                { icon: FileText, text: "Download report cards & certificates" },
                { icon: Bell, text: "Real-time notices and alerts" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-primary-100">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <item.icon size={13} className="text-gold-400" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 md:mt-12 relative z-10">
            <div className="text-xs text-primary-300 font-semibold tracking-wider uppercase mb-1">
              Affiliated to CBSE
            </div>
            <div className="text-[11px] text-primary-400">
              Affiliation No. <span className="font-numeric">2430473</span> · Nursery to Class XII
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="md:col-span-7 px-4 py-8 sm:p-8 md:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h3 className="font-display font-bold text-2xl text-gray-900 mb-2">
                Sign In to Portal
              </h3>
              <p className="text-sm text-gray-500">
                Select your user role and enter your login credentials to continue.
              </p>
            </div>

            {/* Success Mock Toast */}
            <AnimatePresence>
              {loginSuccess && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-2xl flex items-start gap-3 shadow-sm"
                >
                  <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <div className="font-semibold text-sm">Authentication Successful!</div>
                    <p className="text-xs text-green-700 mt-0.5">
                      {loginSuccess === "teacher" 
                        ? "Mock login: Redirecting to teacher dashboard..." 
                        : "Mock login: Redirecting to parent dashboard..."}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Custom iOS style Sliding Tab Switcher */}
            <div className="bg-gray-100/80 p-1 rounded-xl flex items-center mb-8 relative border border-gray-200/50">
              <button
                type="button"
                onClick={() => { setActiveTab("teacher"); setShowPassword(false); setLoginSuccess(null); }}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                  activeTab === "teacher" ? "text-primary-950 font-bold" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <GraduationCap size={15} className="flex-shrink-0" />
                Teacher Portal
              </button>
              <button
                type="button"
                onClick={() => { setActiveTab("parent"); setShowPassword(false); setLoginSuccess(null); }}
                className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all relative z-10 flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                  activeTab === "parent" ? "text-primary-950 font-bold" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                <Users size={15} className="flex-shrink-0" />
                Parent Portal
              </button>

              {/* Sliding Pill Background */}
              <motion.div
                layoutId="activePortalTab"
                className="absolute top-1 bottom-1 left-1 bg-white rounded-lg shadow-sm border border-gray-200/40 -z-0"
                style={{ width: "calc(50% - 4px)" }}
                animate={{
                  x: activeTab === "teacher" ? 0 : "100%",
                }}
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            </div>

            {/* Forms Container */}
            <form onSubmit={handleLoginSubmit} className="space-y-5">
              
              {/* Teacher Login Form */}
              {activeTab === "teacher" ? (
                <motion.div
                  key="teacher-form"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Teacher ID / Employee Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        value={teacherForm.teacherId}
                        onChange={(e) => setTeacherForm({ ...teacherForm, teacherId: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-gray-50/30"
                        placeholder="e.g. KOES/T/2026/001"
                      />
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* Parent Login Form */
                <motion.div
                  key="parent-form"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5">
                      Registered Email / Phone *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                        <Mail size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        value={parentForm.emailOrPhone}
                        onChange={(e) => setParentForm({ ...parentForm, emailOrPhone: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-gray-50/30"
                        placeholder="parent@example.com or +91 9876543210"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Shared Password Field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-gray-500">
                    Password *
                  </label>
                  <a href="#forgot" className="text-xs font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Lock size={16} />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={activeTab === "teacher" ? teacherForm.password : parentForm.password}
                    onChange={(e) => {
                      if (activeTab === "teacher") {
                        setTeacherForm({ ...teacherForm, password: e.target.value });
                      } else {
                        setParentForm({ ...parentForm, password: e.target.value });
                      }
                    }}
                    className="w-full border border-gray-200 rounded-xl pl-10 pr-10 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all bg-gray-50/30"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {/* Remember Me Option */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={activeTab === "teacher" ? teacherForm.rememberMe : parentForm.rememberMe}
                  onChange={(e) => {
                    if (activeTab === "teacher") {
                      setTeacherForm({ ...teacherForm, rememberMe: e.target.checked });
                    } else {
                      setParentForm({ ...parentForm, rememberMe: e.target.checked });
                    }
                  }}
                  className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-500 font-semibold cursor-pointer">
                  Remember this device
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-primary-100/40 hover:shadow-lg disabled:bg-primary-400 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>Sign In to {activeTab === "teacher" ? "Teacher" : "Parent"} Account</>
                )}
              </button>

              {/* Help text */}
              <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500">
                  Having trouble accessing your account?{" "}
                  <a href="mailto:koesworkspace16@gmail.com" className="text-primary-600 font-semibold hover:underline">
                    Email Support
                  </a>{" "}
                  or contact School Admin.
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}
