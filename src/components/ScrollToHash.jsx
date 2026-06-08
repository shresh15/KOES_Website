import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      let targetId = hash.replace("#", "");

      // Handle custom mappings and fallbacks for submenu items
      if (targetId === "aboutus" || targetId === "principal" || targetId === "vision") {
        targetId = "about";
      } else if (targetId === "curriculum" || targetId === "facilities" || targetId === "cocurricular") {
        targetId = "academics";
      } else if (targetId === "noticeboard") {
        targetId = "notice";
      } else if (targetId === "contactus") {
        targetId = "contact";
      }

      // We use a timeout to ensure the page layout is fully stable before we calculate positions and scroll.
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const yOffset = -80; // Offset to account for the sticky header height
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}
