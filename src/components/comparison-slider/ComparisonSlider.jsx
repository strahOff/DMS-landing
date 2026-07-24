import { useSliderPosition } from "./hook/useSliderPosition";
import { SliderHandle } from "./components/SliderHandler";
import { SliderSide } from "./components/SliderSide";
import { content } from "./components/content";

export const ComparisonSlider = () => {
  const { position, containerRef, handleMove } = useSliderPosition();

  return (
    <section id="comparison" className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Сравните и забудьте о проблемах
        </h2>

        <div
          ref={containerRef}
          className="relative max-w-5xl mx-auto h-[400px] rounded-3xl overflow-hidden shadow-xl select-none"
          onMouseMove={(e) => handleMove(e.clientX)}
          onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        >
          <SliderSide side="left">
            <span className="text-6xl mb-4">{content.leftContent.emoji}</span>
            <p className="text-xl font-medium text-center">
              {content.leftContent.title}
            </p>
            <p className="text-gray-600 text-center">
              {content.leftContent.subtitle}
            </p>
          </SliderSide>

          <SliderSide side="right" position={position}>
            <span className="text-6xl mb-4">{content.rightContent.emoji}</span>
            <p className="text-xl font-medium text-white text-center">
              {content.rightContent.title}
            </p>
            <p className="text-white/80 text-center">
              {content.rightContent.subtitle}
            </p>
          </SliderSide>

          <SliderHandle position={position} />
        </div>
      </div>
    </section>
  );
};
