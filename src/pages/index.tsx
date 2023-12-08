import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const MainPage = lazy(() => import("./main"));
const VacancyPage = lazy(() => import("./vacancy"));
// TODO: Когда будет готова MVP приложения, нужно проверить роутинг. На данный момент после обновления страницы (на любой кроме главной) браузер говорит, что нет такого сайта. Возможно причина кроется в Netlify.
export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/vacancy/:id" element={<VacancyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
