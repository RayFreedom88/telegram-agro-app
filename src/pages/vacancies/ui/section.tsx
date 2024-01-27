import { VacancyList } from "widgets/vacancy-list";
import { Filter } from "./filter";

const TITLE = "Каталог агро-вакансий";

export const Section = () => {
  return (
    <section>
      <h2 className="visually-hidden">{TITLE}</h2>
      <Filter />
      <VacancyList />
    </section>
  );
};
