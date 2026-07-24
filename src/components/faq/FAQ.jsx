import { useState } from "react";
import { Element } from "react-scroll";
import { FAQS } from "../../constants/constants";
import FAQItem from "./components/FAQItem";

export const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="pt-24 pb-36 px-6 flex justify-center">
      <div className="w-full max-w-3xl">
        <h2 className="text-4xl font-bold text-center mb-16">Частые вопросы</h2>
        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
