import { useFormContext } from "react-hook-form";
import { GOALS } from "../../../constants/constants";

export const GoalSelector = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex gap-4 justify-center">
        {GOALS.map((g) => (
          <label key={g.value} className="flex-1 cursor-pointer">
            <input
              type="radio"
              value={g.value}
              {...register("goal", { required: "Выберите цель" })}
              className="hidden peer"
            />
            <span className="block text-center py-3 rounded-xl border border-gray-200 peer-checked:border-mint-400 peer-checked:bg-mint-400/10 transition">
              {g.label}
            </span>
          </label>
        ))}
      </div>
      {errors.goal && (
        <p className="text-warm-500 text-sm mt-2 text-center">
          {errors.goal.message}
        </p>
      )}
    </div>
  );
};
