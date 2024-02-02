import { createGate, useStore } from "effector-react";
import { createVacancies} from "entities/vacancy";

export const Gate = createGate<{}>();
const {$vacancies} = createVacancies(Gate)

export const stores = {
  useVacancies: () => useStore($vacancies),
};
