import { motion, AnimatePresence } from "framer-motion";

export default function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full text-left text-lg font-medium flex justify-between items-center p-6 cursor-pointer hover:bg-gray-50 transition-colors"
      >
        <span className="pr-4">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-2xl text-mint-400 flex-shrink-0"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 px-6 pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
