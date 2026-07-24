import { MoreVertical, X } from "lucide-react";

export default function NavTrigger({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-14 h-14 bg-warm-500 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-warm-500/40 hover:shadow-warm-500/60 transition-shadow duration-200 cursor-pointer"
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
    >
      {isOpen ? <X size={24} /> : <MoreVertical size={24} />}
    </button>
  );
}
