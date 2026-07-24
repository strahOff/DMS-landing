import { useForm } from "react-hook-form";
import { useState } from "react";

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm({
    defaultValues: {
      name: "",
      phone: "",
      goal: "",
    },
    mode: "onBlur", // проверка при потере фокуса
    reValidateMode: "onChange", // перепроверка при изменении
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Данные формы:", data);
      setIsSuccess(true);
      methods.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { methods, isSubmitting, isSuccess, onSubmit };
};
