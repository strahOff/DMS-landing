import { useFormContext, Controller } from "react-hook-form";
import { formatPhone } from "./utils/format-phone";

export const PhoneInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Controller
        name="phone"
        control={control}
        rules={{
          required: "Телефон обязателен",
          pattern: {
            value: /^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$/,
            message: "Формат: +7 (XXX) XXX XX XX",
          },
        }}
        render={({ field }) => (
          <input
            value={field.value || ""}
            onChange={(e) => {
              const formatted = formatPhone(e.target.value);
              field.onChange(formatted);
            }}
            onBlur={field.onBlur}
            placeholder="+7 (___) ___ __ __"
            className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/30 outline-none transition"
          />
        )}
      />
      {errors.phone && (
        <p className="text-warm-500 text-sm mt-1">{errors.phone.message}</p>
      )}
    </div>
  );
};
