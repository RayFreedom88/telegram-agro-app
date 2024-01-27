import { styled } from "styled-components";
import { useGate } from "effector-react";
import { VacancyCard } from "entities/vacancy";
import { Gate, stores } from "../model";

export const VacancyList = () => {
  const vacancies = stores.useVacancies();

  useGate(Gate);

  return (
    <VacancyListStyled className="vacancy-list">
      {vacancies?.map((props) => (
        <li className="vacancy-list__item" key={props.id}>
          <VacancyCard {...props} />
        </li>
      ))}
    </VacancyListStyled>
  );
};

const VacancyListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  .vacancy-list__item {
    margin-bottom: 4px;
  }
`;
