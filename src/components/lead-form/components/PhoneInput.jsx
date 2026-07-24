import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";

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
        defaultValue=""
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask="+7 (000) 000 00 00"
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
