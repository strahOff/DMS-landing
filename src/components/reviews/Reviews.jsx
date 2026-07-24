import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { REVIEWS } from "../../constants/constants";
import { ReviewCard } from "./components/ReviewCard";

const Reviews = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} id="reviews" className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">Отзывы</h2>
        <div className="flex gap-8 overflow-x-auto max-w-5xl mx-auto snap-x pb-4 px-4">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
