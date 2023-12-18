import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Layout } from "shared/ui";
import { telegram } from "shared/lib";
import { VacancyList } from "widgets/vacancy-list";

const VacanciesPage = () => {
  const navigate = useNavigate();
  const { tg } = telegram.useTelegram();

  tg.BackButton.show();

  const handleBackButtonClick = () => {
    navigate(-1);
    tg.BackButton.hide();
  };

  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(handleBackButtonClick);

    return () => {
      tg.BackButton.offClick(handleBackButtonClick);
    };
  }, []);

  return (
    <Layout>
      <section>
        <h2 className="visually-hidden">Каталог агро-вакансий</h2>
        <VacancyList />
      </section>
    </Layout>
  );
};

export default VacanciesPage;
