import { motion } from "framer-motion";
import { content } from "./hero-content/content";
import { useProgramStore } from "../../../store/useProgramStore";
import { Link } from "react-scroll";

export const HeroContent = () => {
  const setSummaryVisible = useProgramStore((s) => s.setSummaryVisible);
  const handleButtonClick = () => {
    setSummaryVisible(true);
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
    >
      <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
        {content.title}
      </h1>
      <p className="text-xl text-gray-600 max-w-lg mt-6">{content.subtitle}</p>
      <Link to="programs" smooth={true}>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-warm-500 text-white px-8 py-4 rounded-2xl text-lg font-semibold
                   shadow-lg shadow-warm-500/30 transition-all flex items-center gap-2 cursor-pointer mt-8"
          onClick={handleButtonClick}
        >
          {content.button}
          <p>{`->`}</p>
        </motion.button>
      </Link>

      <div className="flex gap-6 text-sm text-gray-500 mt-4 justify-center md:justify-start">
        {content.stats.map((stat) => (
          <span key={stat}>{stat}</span>
        ))}
      </div>
    </motion.div>
  );
};
