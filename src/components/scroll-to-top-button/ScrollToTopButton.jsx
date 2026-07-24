import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollVisibility } from "./hook/useScrollVisibility";

export const ScrollToTopButton = () => {
  const isVisible = useScrollVisibility();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed top-1/2 -translate-y-1/2 right-6 z-50 w-14 h-14 bg-warm-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-warm-500/40 hover:shadow-warm-500/60 transition-shadow duration-200 cursor-pointer"
          aria-label="Наверх"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
