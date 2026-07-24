export const SliderSide = ({ side, position, children }) => {
  if (side === "left") {
    return (
      <div className="absolute inset-0 bg-gray-200 flex flex-col items-center justify-center p-8">
        {children}
      </div>
    );
  }

  return (
    <div
      className="absolute inset-0 bg-gradient-to-br from-mint-400/90 to-warm-100 flex flex-col items-center justify-center p-8"
      style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
    >
      {children}
    </div>
  );
};
