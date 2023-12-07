import { styled } from "styled-components";

const icon =
  "https://play-lh.googleusercontent.com/bUo5-ivw6m2ICBJZbu-aePO82eThLIx7yJKwE1y-JRj6ktVTIY4SiyyoBEu-cK7b-xY=s512";

type TSalary = string | number | null;

export const VacancyList = () => {
  const vacancies = [
    {
      name: "Стажер-технолог по выращиванию птицы",
      address: "Респ.Башкортостан, с.Буздяк",
      from: 26000,
      to: 55000,
    },
    {
      name: "Ветеринарный техник",
      address: "Псковская обл., г.Великие Луки",
      from: 35000,
      to: null,
    },
    {
      name: "Оператор машинного доения",
      address: "г.Череповец",
      from: 38000,
      to: null,
    },
    {
      name: "Бригадир животноводства",
      address: "Самарская обл., д.Арсентьевка",
      from: null,
      to: null,
    },
  ];

  const getSalary = (from: TSalary, to: TSalary) => {
    if (from && to)
      return `${parseInt(from as string).toLocaleString("ru-RU")}-${parseInt(
        to as string,
      ).toLocaleString("ru-RU")} ₽`;
    if (from) return `${parseInt(from as string).toLocaleString("ru-RU")} ₽`;

    return "з/п не указана";
  };

  return (
    <VacancyListStyled>
      {vacancies.map(({ name, address, from, to }, index) => (
        <li key={`vacancy-${index}`}>
          <VacancyCardStyled className="vacancy">
            <img className="vacancy__img" src={icon} alt="icon" />
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

  li {
    margin-bottom: 4px;
  }
`;

const VacancyCardStyled = styled.div`
  padding: 16px;
  /* background-color: var(--tg-theme-secondary-bg-color); */
  background-color: white;
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
