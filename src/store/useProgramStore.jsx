import { create } from "zustand";
import { OPTIONS, PROGRAMS } from "../constants/constants";

export const useProgramStore = create((set, get) => ({
  selected: "optimum",
  options: OPTIONS.map((opt) => ({ ...opt, active: false })),
  isSummaryVisible: false,
  setSummaryVisible: (visible) => set({ isSummaryVisible: visible }),
  setProgram: (id) => set({ selected: id }),
  toggleOption: (id) =>
    set((state) => ({
      options: state.options.map((opt) =>
        opt.id === id ? { ...opt, active: !opt.active } : opt,
      ),
    })),
  totalPrice: () => {
    const state = get();
    const program = PROGRAMS.find((p) => p.id === state.selected);
    const programPrice = program ? program.price : 0;
    const optionsPrice = state.options
      .filter((o) => o.active)
      .reduce((sum, o) => sum + o.price, 0);
    return programPrice + optionsPrice;
  },
}));
