import { motion } from "framer-motion";

export const OptionsSelector = ({ options, onToggle }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {options.map((opt) => (
        <motion.button
          key={opt.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => onToggle(opt.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all cursor-pointer ${
            opt.active
              ? "bg-warm-500 text-white shadow-lg"
              : "bg-white border border-gray-200 text-gray-600 hover:bg-warm-100"
          }`}
        >
          {opt.label} {opt.price ? `+${opt.price.toLocaleString()} ₽` : ""}
        </motion.button>
      ))}
    </div>
  );
};
