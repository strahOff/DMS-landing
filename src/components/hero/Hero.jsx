import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";
import { MedicalIcon } from "./components/MedicalIcon";
import { HeroContent } from "./components/HeroContent";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <HeroContent />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <MedicalIcon />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
