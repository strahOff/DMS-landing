export const SliderHandle = ({ position }) => {
  return (
    <div
      className="absolute top-0 bottom-0 w-1.5 bg-white shadow-lg cursor-ew-resize"
      style={{ left: `${position}%`, transform: "translateX(-50%)" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center">
        ⇔
      </div>
    </div>
  );
};
