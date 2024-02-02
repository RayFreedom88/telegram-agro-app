import { createGate, useStore } from "effector-react";
import { createVacancies } from "entities/vacancy";

export const Gate = createGate<{}>('Gate main page open');

const {$vacancies} = createVacancies(Gate);
const $vacanciesCount = $vacancies.map(vacancies => vacancies?.length)

export const stores = {
  useVacanciesCount: () => useStore($vacanciesCount),
};
