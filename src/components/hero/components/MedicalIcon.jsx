import { motion } from "framer-motion";

export const MedicalIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="flex-1 flex justify-center"
    >
      <div className="relative w-72 h-72 md:w-96 md:h-96">
        {/* Внешнее кольцо */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-mint-400/20"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-mint-400 rounded-full shadow-[0_0_15px_#17C3B2]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Внутреннее кольцо */}
        <motion.div
          className="absolute inset-4 rounded-full border border-warm-500/10"
          animate={{ rotate: [0, -360] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-warm-500 rounded-full shadow-[0_0_10px_#FF6B57]"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Сердце */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="url(#heartGradient)"
            />
            <defs>
              <linearGradient id="heartGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FF6B57" />
                <stop offset="100%" stopColor="#17C3B2" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Частицы */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-mint-400"
            style={{
              top: `${50 + 40 * Math.sin((i * 60 * Math.PI) / 180)}%`,
              left: `${50 + 40 * Math.cos((i * 60 * Math.PI) / 180)}%`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
