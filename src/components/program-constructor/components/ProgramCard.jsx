import { motion } from "framer-motion";

export const ProgramCard = ({ program, isSelected, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={() => onSelect(program.id)}
      className={`cursor-pointer rounded-2xl p-8 border-2 transition-all ${
        isSelected
          ? "border-mint-400 shadow-2xl shadow-mint-400/20 bg-white"
          : "border-gray-200 bg-white/70 hover:border-mint-400/50"
      }`}
    >
      <h3 className="text-2xl font-bold">{program.name}</h3>
      <p className="text-3xl font-bold mt-4 text-warm-500">
        {program.price.toLocaleString()} ₽/год
      </p>
      <ul className="mt-6 space-y-2 text-gray-600">
        {program.features.map((f) => (
          <li key={f} className="flex items-center gap-2">
            <span className="text-mint-400">✓</span> {f}
          </li>
        ))}
      </ul>
      <button
        className={`mt-8 w-full py-3 rounded-xl font-medium cursor-pointer ${
          isSelected
            ? "bg-mint-400 text-white"
            : "bg-gray-100 text-gray-700 hover:bg-mint-400/10"
        }`}
      >
        {isSelected ? "Выбрано" : "Выбрать"}
      </button>
    </motion.div>
  );
};
