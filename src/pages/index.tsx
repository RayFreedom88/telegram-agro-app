import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("./main"));
const VacanciesPage = lazy(() => import("./vacancies"));
const VacancyPage = lazy(() => import("./vacancy"));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="vacancies" element={<VacanciesPage />} />
      <Route path="vacancies/:id" element={<VacancyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
