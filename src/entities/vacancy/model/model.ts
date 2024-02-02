import { Gate } from "effector-react";
import { createEffect, createStore, sample } from "effector";
import { vacanciesApi } from "shared/api";
import { types } from ".";

export const createVacancy = (gate: Gate<string>) => {
  const getVacancyByIdFx = createEffect((id: string) => {
    const data = vacanciesApi.getById<types.TVacancy>(id);
    return data;
  });

  const $vacancy = createStore<types.TVacancy | null>(null);

  sample({
    source: gate.state,
    clock: gate.open,
    fn: (id) => id,
    target: getVacancyByIdFx,
  });

  $vacancy
    .on(getVacancyByIdFx.doneData, (_, vacancy) => vacancy)
    .reset(gate.close);

  return {
    getVacancyByIdFx,
    $vacancy,
  };
};

export const createVacancies = (gate: Gate) => {
  const getVacanciesFx = createEffect(() => vacanciesApi.getAll());
  const $vacancies = createStore<types.TVacancy[] | null>(null);

  sample({
    source: gate.state,
    clock: gate.open,
    target: getVacanciesFx,
  });

  $vacancies
    .on(getVacanciesFx.doneData, (_, vacancies) => vacancies)
    .reset(gate.close);

  return {
    getVacanciesFx,
    $vacancies,
  };
};
