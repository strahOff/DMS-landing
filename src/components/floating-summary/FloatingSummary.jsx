import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useProgramStore } from "../../store/useProgramStore";
import PriceDisplay from "./components/PriceDisplay";
import ActionButton from "./components/ActionButton";

export const FloatingSummary = () => {
  const selected = useProgramStore((s) => s.selected);
  const options = useProgramStore((s) => s.options);
  const totalPrice = useProgramStore((s) => s.totalPrice);
  const isVisible = useProgramStore((s) => s.isSummaryVisible);

  const price = useMemo(() => totalPrice(), [selected, options, totalPrice]);

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          id="summary"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 24 }}
          className="fixed bottom-4 left-4 right-4 z-50"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-white/50 shadow-2xl rounded-2xl p-4 flex items-center justify-between">
            <PriceDisplay totalPrice={price} />
            <ActionButton />
          </div>
        </motion.div>
      ) : (
        true
      )}
    </AnimatePresence>
  );
};
