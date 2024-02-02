import { createGate, useStore } from "effector-react";
import { createVacancy } from "entities/vacancy";

export const Gate = createGate<string>("vacancy page open");
const { $vacancy } = createVacancy(Gate);

export const stores = {
  useVacancy: () => useStore($vacancy),
};
