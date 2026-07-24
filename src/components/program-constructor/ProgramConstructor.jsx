import { useProgramStore } from "../../store/useProgramStore";
import { PROGRAMS } from "../../constants/constants";
import { ProgramCard } from "./components/ProgramCard";
import { OptionsSelector } from "./components/OptionsSelector";
import { PriceSummary } from "./components/PriceSummary";

export const ProgramConstructor = () => {
  const selected = useProgramStore((s) => s.selected);
  const setProgram = useProgramStore((s) => s.setProgram);
  const options = useProgramStore((s) => s.options);
  const toggleOption = useProgramStore((s) => s.toggleOption);
  const totalPrice = useProgramStore((s) => s.totalPrice);

  return (
    <section id="programs" className="py-24 px-6 flex justify-center">
      <div className="w-full max-w-7xl">
        <h2 className="text-4xl font-bold text-center mb-16">
          Соберите свой полис
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {PROGRAMS.map((prog) => (
            <ProgramCard
              key={prog.id}
              program={prog}
              isSelected={selected === prog.id}
              onSelect={setProgram}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <OptionsSelector options={options} onToggle={toggleOption} />
        </div>

        <PriceSummary totalPrice={totalPrice()} />
      </div>
    </section>
  );
};
