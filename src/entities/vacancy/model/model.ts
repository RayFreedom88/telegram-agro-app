import { createEffect, createStore } from "effector";
import { vacanciesApi } from "shared/api";
import { types } from ".";

export const getVacanciesFx = createEffect(() => vacanciesApi.getAll());

export const getVacancyByIdFx = createEffect((id: string) => {
  const data = vacanciesApi.getById<types.TVacancy>(id);
  return data;
});

export const $vacancy = createStore<types.TVacancy | null>(null);
export const $vacancies = createStore<types.TVacancy[] | null>(null);
