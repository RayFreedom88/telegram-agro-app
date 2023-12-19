type TSalary = string | number | null | undefined;

export const getSalary = (from: TSalary, to: TSalary) => {
  if (from && to)
    return `${parseInt(from as string).toLocaleString("ru-RU")}-${parseInt(
      to as string,
    ).toLocaleString("ru-RU")} ₽`;
  if (from) return `${parseInt(from as string).toLocaleString("ru-RU")} ₽`;

  return "з/п не указана";
};

export const getRandomRgba = (opacity = 1) => {
  const o = Math.round;
  const r = Math.random;
  const s = 255;

  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    opacity +
    ")"
  );
};
