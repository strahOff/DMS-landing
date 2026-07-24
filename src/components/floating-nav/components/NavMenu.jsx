import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { NAV_ITEMS } from "../../../constants/constants";

export default function NavMenu({ isOpen, onItemClick }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -20, height: 0 }}
          animate={{ opacity: 1, x: 0, height: "auto" }}
          exit={{ opacity: 0, x: -20, height: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="mt-3 bg-white/95 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl overflow-hidden w-52"
        >
          <nav className="py-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-20}
                  duration={500}
                  activeClass="text-mint-600 bg-mint-400/10"
                  className="w-full flex items-center gap-3 px-4 py-3 text-graphite hover:bg-mint-400/10 hover:text-mint-600 transition-colors text-left cursor-pointer"
                  onClick={onItemClick}
                >
                  <Icon size={18} className="flex-shrink-0" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
