export const PriceSummary = ({ totalPrice }) => {
  return (
    <div className="mt-8 text-center text-2xl font-bold">
      Итого:{" "}
      <span className="text-warm-500">{totalPrice.toLocaleString()} ₽/год</span>
    </div>
  );
};
