import { FC } from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { getRandomRgba, getSalary } from "../../lib";
import { VacancyLogo } from "../vacancy-logo";

export interface IVacancyCard {
  id: string;
  title: string;
  logoUrl?: string | null;
  company: string;
  location: string;
  experience?: string | null;
  from?: string | number | null;
  to?: string | number | null;
}

export const VacancyCard: FC<IVacancyCard> = ({
  id,
  title,
  logoUrl,
  company,
  location,
  experience,
  from,
  to,
}) => {
  return (
    <VacancyCardStyled className="vacancy" to={`/vacancies/${id}`}>
      <div className="vacancy__caption">
        <h3 className="vacancy__title">{title}</h3>
        <div className="vacancy__company">
          {<VacancyLogo url={logoUrl} />}

          <h4 className="vacancy__company-name">{company}</h4>
        </div>
      </div>

      <table className="vacancy__info">
        <tbody>
          <tr className="vacancy__row">
            <td>Локация</td>
            <td>{location}</td>
          </tr>

          <tr className="vacancy__row">
            <td>Опыт</td>
            <td>{experience}</td>
          </tr>
        </tbody>
      </table>

      <p className="vacancy__salary">{getSalary(from, to)}</p>
    </VacancyCardStyled>
  );
};

const VacancyCardStyled = styled(Link)`
  display: block;
  padding: var(--spacing-04) var(--spacing-05);
  background-color: var(--tg-theme-bg-color);
  border-radius: 8px;
  overflow: hidden;

  color: var(--tg-theme-text-color);

  .vacancy-logo {
    margin-right: var(--spacing-03);
    height: 24px;
    width: 24px;
    border-radius: 50%;

    background: radial-gradient(
      at center,
      ${getRandomRgba()},
      ${getRandomRgba(0.5)} 40%,
      rgba(255, 255, 255, 1) 80%
    );
  }

  .vacancy__caption {
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: var(--spacing-04);

    &::after {
      content: "";
      position: absolute;
      left: calc(0px - var(--spacing-05));
      bottom: 0;
      height: 1px;
      width: calc(100% + (var(--spacing-05) * 2));
      background-color: var(--tg-theme-secondary-bg-color);
    }
  }

  .vacancy__title {
    margin-bottom: var(--spacing-02);
    font-size: 14px;
    line-height: 18px;
  }

  .vacancy__company {
    display: flex;
    align-items: center;
  }

  .vacancy-img {
    margin-right: var(--spacing-03);
    height: 24px;
    width: 24px;
    object-fit: contain;
    border-radius: 8px;
  }

  .vacancy__company-name {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }

  .vacancy__info {
    margin-top: var(--spacing-03);
    padding-bottom: var(--spacing-02);
    border-spacing: 0;

    .vacancy__row {
      color: var(--tg-theme-text-color);
      line-height: normal;
      vertical-align: top;

      td {
        padding: var(--spacing-02) 0;

        &:first-child {
          opacity: 0.5;
        }

        &:not(:first-child) {
          padding-left: var(--spacing-03);
        }
      }
    }
  }

  .vacancy__salary {
    font-size: 14px;
    font-weight: 700;
    line-height: 18px;
    color: var(--primary);
    margin-top: var(--spacing-02);
  }
`;
