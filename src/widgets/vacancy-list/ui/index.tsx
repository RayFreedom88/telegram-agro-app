import { styled } from "styled-components";
import { useLocation } from "react-router";
import { VacancyCard, mockVacancies } from "entities/vacancy";

export const VacancyList = () => {
  const { pathname } = useLocation();
  console.log("useLocation :>> ", useLocation());

  return (
    <VacancyListStyled className="vacancy-list">
      {mockVacancies.map((props) => (
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
