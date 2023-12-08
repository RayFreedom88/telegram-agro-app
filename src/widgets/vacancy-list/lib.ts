type TSalary = string | number | null;
// TODO: Возможно стоит вынести вместе с VacancyCardStyled в слой entities
export const getSalary = (from: TSalary, to: TSalary) => {
  if (from && to)
    return `${parseInt(from as string).toLocaleString("ru-RU")}-${parseInt(
      to as string,
    ).toLocaleString("ru-RU")} ₽`;
  if (from) return `${parseInt(from as string).toLocaleString("ru-RU")} ₽`;

  return "з/п не указана";
};