import { sample } from "effector";
import { createGate, useStore } from "effector-react";
import { $vacancies, getVacanciesFx } from "entities/vacancy";

export const Gate = createGate<string>();

sample({
  source: Gate.state,
  clock: Gate.open,
  target: getVacanciesFx,
});

$vacancies
  .on(getVacanciesFx.doneData, (_, vacancies) => vacancies)
  .reset(Gate.close);

export const stores = {
  useVacancies: () => useStore($vacancies),
};
