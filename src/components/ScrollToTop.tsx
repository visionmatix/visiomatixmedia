    // src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" }); // or "smooth"
  }, [pathname]); // ✅ Runs only when route path changes

  return null;
};

export default ScrollToTop;
