export default function PriceDisplay({ totalPrice }) {
  return (
    <div>
      <span className="text-sm text-gray-500">Ваш полис</span>
      <p className="text-xl font-bold text-warm-500">
        {totalPrice.toLocaleString()} ₽/год
      </p>
    </div>
  );
}
