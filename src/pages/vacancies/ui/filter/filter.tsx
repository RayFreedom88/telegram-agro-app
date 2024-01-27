import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { icons } from "shared/assets";

// TODO: Возможно стоит перенести в слой @shared
export const Filter = () => {
  return (
    <FilterStyled>
      <div className="filter-item filter-item--input">
        <label htmlFor="amount" className="filter-item__label">
          Сумма
        </label>
        <input
          id="amount"
          autoComplete="off"
          inputMode="decimal"
          placeholder="от 0 ₽"
          className="filter-item__input"
          data-testid="amount"
          // value=""
        ></input>
      </div>

      <button className="filter-item">
        <div className="filter-item__container">
          <div>
            <div className="filter-item__name">Специализация</div>
            <div className="filter-item__value">Любая</div>
          </div>

          <ReactSVG className="filter-item__chevron" src={icons.chevronSort} />
        </div>
      </button>

      <button className="filter-item">
        <div className="filter-item__container">
          <div>
            <div className="filter-item__name">Локация</div>
            <div className="filter-item__value">Любая</div>
          </div>

          <ReactSVG className="filter-item__chevron" src={icons.chevronSort} />
        </div>
      </button>

      <button className="filter-item">
        <div className="filter-item__container">
          <div>
            <div className="filter-item__name">Опыт</div>
            <div className="filter-item__value">Любой</div>
          </div>

          <ReactSVG className="filter-item__chevron" src={icons.chevronSort} />
        </div>
      </button>
    </FilterStyled>
  );
};

const FilterStyled = styled.div`
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  margin: 12px 0;

  &::-webkit-scrollbar {
    display: none;
  }

  .filter-item {
    position: relative;
    background: var(--tertiary-fill-background);
    border: none;
    outline: none;
    height: 46px;
    padding: 0 10px;
    border-radius: 9px;
    cursor: pointer;

    color: var(--tg-theme-text-color);

    &:not(:first-child) {
      margin-inline-start: var(--spacing-02);
    }

    &--input {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100px;
      min-width: 100px;
      cursor: default;
    }
  }

  .filter-item__label {
    text-align: start;
    color: var(--tg-theme-text-color);
    opacity: 0.5;
  }

  .filter-item__input {
    height: 18px;
    width: 100%;
    background: rgba(0, 0, 0, 0);
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    margin-top: var(--spacing-02);
    appearance: none;
    text-align: start;

    font-size: 16px;
    white-space: nowrap;
    color: var(--tg-theme-text-color);
  }

  .filter-item__container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .filter-item__name {
    font-size: 10px;
    text-align: start;
    opacity: 0.5;
  }

  .filter-item__value {
    margin-top: var(--spacing-02);

    font-size: 16px;
    text-align: start;
    white-space: nowrap;
  }

  .filter-item__chevron {
    margin-inline-start: var(--spacing-03);
  }
`;
