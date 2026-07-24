import { Link } from "react-scroll";

export default function ActionButton() {
  return (
    <Link to="lead" smooth={true}>
      <button className="bg-warm-500 text-white px-6 py-3 rounded-xl font-medium active:scale-95 transition-transform cursor-pointer">
        Оформить
      </button>
    </Link>
  );
}
