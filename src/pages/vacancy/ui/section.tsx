import { useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router";
import { useGate } from "effector-react";
import { Segmented } from "antd";
import ReactHtmlParser from "react-html-parser"; // TODO: поискать менее тяжелый парсер
import { vacancyLib, VacancyLogo } from "entities/vacancy";
import { Gate, stores } from "../model";

const TextSegmented = {
  Responsibilities: "Обязанности",
  Requirements: "Требования",
};

const initialStateSwitcher = TextSegmented.Responsibilities;

export const Section = () => {
  const { id } = useParams();
  const vacancy = stores.useVacancy();

  const [switcherValue, setSwitcherValue] = useState(initialStateSwitcher);
  const isResponsibilities = switcherValue === TextSegmented.Responsibilities;

  useGate(Gate, id);

  return (
    <SectionStyled>
      <h2 className="vacancy-title">{vacancy?.title}</h2>

      <div className="salary">
        <p className="salary__number">
          {vacancyLib.getSalary(vacancy?.from, vacancy?.to)}
        </p>
        <p className="salary__ndfl">после вычета НДФЛ</p>
      </div>

      <div className="company">
        <VacancyLogo url={vacancy?.logoUrl} />
        <p className="company__name">{vacancy?.company}</p>
      </div>

      <div className="location">
        <p className="location__text">{vacancy?.location}</p>
      </div>

      <table className="info-table">
        <tbody>
          <tr className="info-table__row">
            <td>Опыт</td>
            <td>{vacancy?.experience}</td>
          </tr>

          <tr className="info-table__row">
            <td>Занятость</td>
            <td>{vacancy?.employment}</td>
          </tr>

          <tr className="info-table__row">
            <td>График</td>
            <td>{vacancy?.schedule}</td>
          </tr>

          <tr className="info-table__row">
            <td>Проживание</td>
            <td>{vacancy?.accommodation}</td>
          </tr>
        </tbody>
      </table>

      <SegmentedStyled
        value={switcherValue}
        options={[TextSegmented.Responsibilities, TextSegmented.Requirements]}
        onChange={(value) => setSwitcherValue(value as string)}
      />

      {isResponsibilities
        ? vacancy?.responsibilities &&
          ReactHtmlParser(vacancy?.responsibilities)
        : vacancy?.requirements && ReactHtmlParser(vacancy?.requirements)}
    </SectionStyled>
  );
};

const SegmentedStyled = styled(Segmented)`
  margin-bottom: var(--spacing-03);
  border-radius: 10px;
  background-color: var(--tg-theme-secondary-bg-color);

  font-size: 10px;
  font-weight: 400;

  .ant-segmented-item {
    color: var(--tg-theme-text-color);
    opacity: 0.5;

    &:hover:not(.ant-segmented-item-selected):not(.ant-segmented-item-disabled) {
      background-color: var(--tg-theme-bg-color);
      color: var(--tg-theme-text-color);
      opacity: 0.3;
    }
  }

  .ant-segmented-item-selected {
    background-color: var(--tg-theme-bg-color);
    opacity: 1;
  }

  .ant-segmented-item-label {
    min-height: 16px;
    line-height: 16px;
  }

  .ant-segmented-thumb,
  .ant-segmented-item {
    border-radius: 10px;
  }

  .ant-segmented-thumb {
    background-color: var(--tg-theme-bg-color);
  }
`;

const SectionStyled = styled.section`
  height: 100vh;
  padding: var(--spacing-05);
  background-color: var(--tg-theme-bg-color);

  .vacancy-title {
    margin: 0 auto;
    margin-bottom: var(--spacing-04);
  }

  .salary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-04);
  }

  .salary__number {
    color: var(--primary);
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
  }

  .salary__ndfl {
    overflow: hidden;
    color: var(--text-04);
    text-overflow: ellipsis;
    font-size: 10px;
    font-weight: 400;
    line-height: normal;
  }

  .company {
    display: flex;
    align-items: center;
    margin-bottom: var(--spacing-04);
  }

  .vacancy-logo {
    margin-right: var(--spacing-03);
    height: 24px;
    width: 24px;
    border-radius: 50%;

    background: radial-gradient(
      at center,
      ${vacancyLib.getRandomRgba()},
      ${vacancyLib.getRandomRgba(0.5)} 40%,
      rgba(255, 255, 255, 1) 80%
    );
  }

  .vacancy-img {
    margin-right: var(--spacing-03);
    height: 24px;
    width: 24px;
    object-fit: contain;
    border-radius: 8px;
  }

  .company__name {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
  }

  .location {
    margin-bottom: var(--spacing-04);
  }

  .location__text {
    color: var(--text-03);
  }

  .info-table {
    margin-top: var(--spacing-03);
    margin-bottom: var(--spacing-04);
    padding-bottom: var(--spacing-02);

    border-spacing: 0;
    border-collapse: collapse;
    border-radius: 10px;
    background: var(--tg-theme-secondary-bg-color);
  }

  .info-table__row {
    color: var(--tg-theme-text-color);
    line-height: normal;
    vertical-align: top;

    td {
      padding-top: var(--spacing-03);
      padding-right: var(--spacing-03);
      padding-bottom: var(--spacing-03);
      padding-left: var(--spacing-03);

      &:first-child {
        opacity: 0.7;
      }

      &:not(:first-child) {
        width: 100%;
        padding-left: 0;
        color: var(--tg-theme-text-color);
      }
    }
  }

  .vacancy-details {
    line-height: 12px;
  }

  .details-list {
    margin-top: var(--spacing-03);
    padding-left: var(--spacing-05);
    list-style: disc;
  }
`;
