import { motion } from "framer-motion";

export const ReviewCard = ({ review, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.2 }}
      className="min-w-[300px] bg-white p-8 rounded-2xl shadow-lg snap-center flex-shrink-0"
    >
      <p className="text-lg text-gray-700">{review}</p>
      <div className="mt-4 flex items-center gap-2">
        <div className="w-10 h-10 bg-mint-400 rounded-full" />
        <div>
          <p className="font-medium">Some author</p>
          <div className="flex text-yellow-400">★★★★★</div>
        </div>
      </div>
    </motion.div>
  );
};
