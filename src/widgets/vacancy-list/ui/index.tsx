import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { vacancies } from "entities/vacancy";
import { getSalary } from "../lib";

export const VacancyList = () => {
  return (
    <VacancyListStyled className="vacancy-list">
      {vacancies.map(({ id, logoUrl, name, address, from, to }) => (
        <li className="vacancy-list__item" key={id}>
          {/* TODO: Возможно стоит VacancyCardStyled вынести в слой entities */}
          <VacancyCardStyled className="vacancy" to={`/vacancy/${id}`}>
            {logoUrl && (
              <img className="vacancy__img" src={logoUrl} alt="icon" />
            )}
            <h3 className="vacancy__title">{name}</h3>
            <p className="vacancy__address">{address}</p>
            <p className="vacancy__salary">{getSalary(from, to)}</p>
          </VacancyCardStyled>
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

const VacancyCardStyled = styled(Link)`
  display: block;
  padding: 16px;
  background-color: var(--tg-theme-bg-color);
  /* background-color: white; */
  border-radius: 8px;

  .vacancy__img {
    height: 50px;
    width: 50px;
    object-fit: contain;
    border-radius: 18px;
    margin-bottom: 16px;
  }

  .vacancy__title {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    color: var(--tg-theme-text-color);
  }

  .vacancy__address {
    color: var(--text-03);
    margin-bottom: 16px;
  }

  .vacancy__salary {
    font-size: 20px;
    font-weight: 700;
    line-height: 100%; /* 20px */
    color: var(--primary);
  }
`;
