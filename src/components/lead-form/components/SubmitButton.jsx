import { Loader2, CheckCircle, Send } from "lucide-react";

export const SubmitButton = ({ isSubmitting, isSuccess }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all flex items-center justify-center gap-2 ${
        isSubmitting
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-warm-500 hover:bg-warm-700 text-white cursor-pointer shadow-lg shadow-warm-500/30"
      }`}
    >
      {isSubmitting ? (
        <>
          <Loader2 size={20} className="animate-spin" /> Отправляем...
        </>
      ) : isSuccess ? (
        <>
          <CheckCircle size={20} /> Отправлено!
        </>
      ) : (
        <>
          <Send size={18} /> Получить расчёт и консультацию
        </>
      )}
    </button>
  );
};
