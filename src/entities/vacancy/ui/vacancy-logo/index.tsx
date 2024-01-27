import { FC } from "react";
import { IVacancyCard } from "../vacancy-card";

interface IVacancyLogo {
  url?: IVacancyCard["logoUrl"];
}

export const VacancyLogo: FC<IVacancyLogo> = ({ url }) =>
  url ? (
    <img className="vacancy-img" src={url} alt="logo" />
  ) : (
    <div className="vacancy-logo" />
  );
