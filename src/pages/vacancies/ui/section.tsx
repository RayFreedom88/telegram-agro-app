import { styled } from "styled-components";
import { VacancyList } from "widgets/vacancy-list";
import { Filter } from "./filter";

const TITLE = "Каталог агро-вакансий";

export const Section = () => {
  return (
    <SectionStyled>
      <h2 className="visually-hidden">{TITLE}</h2>
      <Filter />
      <VacancyList />
    </SectionStyled>
  );
};

const SectionStyled = styled.section`
  height: 100vh;
`;
