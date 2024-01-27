import { sample } from "effector";
import { createGate, useStore } from "effector-react";
import { $vacancy, getVacancyByIdFx } from "entities/vacancy";

export const Gate = createGate<string>("vacancy page open");

sample({
  source: Gate.state,
  clock: Gate.open,
  fn: (id) => id,
  target: getVacancyByIdFx,
});

$vacancy
  .on(getVacancyByIdFx.doneData, (_, vacancy) => vacancy)
  .reset(Gate.close);

export const stores = {
  useVacancy: () => useStore($vacancy),
};
