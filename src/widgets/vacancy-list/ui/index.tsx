import { styled } from "styled-components";
import { useLocation } from "react-router";
import { VacancyCard } from "entities/vacancy";
import { mocks } from 'shared/mocks';


export const VacancyList = () => {
  const { pathname } = useLocation();

  return (
    <VacancyListStyled className="vacancy-list">
      {mocks.vacancies.map((props) => (
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
