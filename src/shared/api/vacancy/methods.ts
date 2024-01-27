import { mocks } from "shared/mocks";

export const getAll = () => mocks.vacancies;

export const getById = <T>(vacancyId: string): T => {
  return getAll().find((data) => data.id === vacancyId) as T;
};