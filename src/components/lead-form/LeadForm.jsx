import { FormProvider } from "react-hook-form";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import { PhoneInput } from "./components/PhoneInput";
import { GoalSelector } from "./components/GoalSelector";
import { SubmitButton } from "./components/SubmitButton";
import { useLeadForm } from "./components/hook/useLeadForm";

const LeadForm = () => {
  const { methods, isSubmitting, isSuccess, onSubmit } = useLeadForm();

  return (
    <Element name="lead">
      <section id="lead" className="py-24 px-6 flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-8">
            Начните заботиться о себе
          </h2>
          <FormProvider {...methods}>
            <motion.form
              onSubmit={methods.handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl space-y-6"
            >
              <div>
                <input
                  {...methods.register("name", {
                    required: "Имя обязательно",
                    minLength: {
                      value: 2,
                      message: "Минимум 2 символа",
                    },
                    maxLength: {
                      value: 50,
                      message: "Не более 50 символов",
                    },
                  })}
                  placeholder="Ваше имя"
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-mint-400 focus:ring-2 focus:ring-mint-400/30 outline-none transition"
                />
                {methods.formState.errors.name && (
                  <p className="text-warm-500 text-sm mt-1">
                    {methods.formState.errors.name.message}
                  </p>
                )}
              </div>

              <PhoneInput />
              <GoalSelector />

              <SubmitButton isSubmitting={isSubmitting} isSuccess={isSuccess} />
              {isSuccess && (
                <div role="status" className="text-mint-400 text-center">
                  Заявка отправлена! Мы свяжемся с вами.
                </div>
              )}
              <p className="text-xs text-gray-400 text-center">
                Нажимая кнопку, вы разрешаете нам позаботиться о вашем здоровье.
                Никакого спама.
              </p>
            </motion.form>
          </FormProvider>
        </div>
      </section>
    </Element>
  );
};

export default LeadForm;
